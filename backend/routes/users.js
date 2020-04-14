const router = require('express').Router();
const User = require('../models/users.model');
const nodemailer = require('nodemailer');
const passport = require("passport")

const LEGION_GMAIL_USERNAME = process.env.LEGION_GMAIL_USERNAME;
const LEGION_GMAIL_PASSWORD = process.env.LEGION_GMAIL_PASSWORD;

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: LEGION_GMAIL_USERNAME,
        pass: LEGION_GMAIL_PASSWORD
    }
});


router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(error => res.status(400).json('Error: ' + error));
});


// Add a new User
router.route('/add').post((req, res) => {
    // res.send("hellooo");
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const newUser = new User({
        name,
        username,
        password
    });

    User.register(newUser, req.body.password, (err, user) => {

        if (err) {res.status(400).json('Error: ' + err.message); return;}

        const mailOptions = {
            from: LEGION_GMAIL_USERNAME,
            to: username,
            subject: "Account Created",
            html: `<p>Welcome to the webdesign project.</p><p>If you didn't create an account, feel free to ignore it!</p>`
        };
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.error("error while sending an email")
            } else {
                console.log("Email sent");
            }
        });
        res.json('User created')
       
    })
});

router.post("/login", async (req, res) => {
    // look up the user by their username
    const query = User.findOne({ username: req.body.username });
    const foundUser = await query.exec();
    if (foundUser) {
        passport.authenticate('local')(req, res, () => {
            // If logged in, we should have user info to send back
            if (req.user) {
                return res.send(JSON.stringify(req.user));
            }
    
            // Otherwise return an error
            return res.send(JSON.stringify({ error: 'There was an error logging in' }));
        });
    } else {
        return res.send(
            JSON.stringify({ error: "Login credentials are incorrect" })
        );
    }
});

router.route("/addPayment").post((req,res)=>{
    User.find({username: req.body.username})
        .then(user=>{
            console.log(req.body.payment);
            User.updateOne({username: req.body.username}, {
                $push: { paymentHistory : req.body.payment }
            })
                .then(data=> res.status(200).send(data))
                .catch(error => res.status(400).send(error.message));
        })
        .catch(err=>{
            res.status(400).send(err.message);
        })
});

router.route('/findByID/:id').get((req,res)=>{
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(error => res.status(400).json('Error: ' + error));
});

module.exports = router;