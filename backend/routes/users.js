const router = require('express').Router();
const User = require('../models/users.model');
const nodemailer = require('nodemailer');

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

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new User({
        name,
        email,
        password
    });
    newUser.save()
        .then(() => {

            const mailOptions = {
                from: LEGION_GMAIL_USERNAME,
                to: email,
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
        .catch(error => res.status(400).json('Error: ' + error));
});

module.exports = router;