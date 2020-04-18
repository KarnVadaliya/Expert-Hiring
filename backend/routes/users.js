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

router.route('/findByEmail/:email').get((req,res)=>{
    User.findOne({username:req.params.email})
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).json('Error: ' + error));
});



router.route("/sendQuery").post((req,res)=>{

    const mailOptions = {
        from: LEGION_GMAIL_USERNAME,
        to: LEGION_GMAIL_USERNAME,
        subject: "New Query Recieved",
        html: `<div><p>From: ${req.body.email}</p><p>${req.body.message}</p><br></br>
        <p>${req.body.fullName}</p><p>${req.body.phone}</p></div>`
    };


    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log("error while sending an email");
            //  res.status(200);
        } else {
            console.log("Email sent");
            //  res.status(400);
        }
    });
    
    res.json("Query Send")
});

router.route("/sendApp").post((req,res)=>{

    const mailOptions = {
        from: LEGION_GMAIL_USERNAME,
        to: req.body.email,
        subject: "Application Recieved",
        html: `<div><p>From: ${LEGION_GMAIL_USERNAME}</p><br>
        <p>We will get back to you for further enquiries</p><br>
        <p>Regards</p><p>Legion HR Team</p></div>`
    };


    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log("error while sending an email");
            //  res.status(200);
        } else {
            console.log("Email sent");
            //  res.status(400);
        }
    });
    
    res.json("Query Send")
});





router.route("/addPayment").post((req,res)=>{
    User.find({username: req.body.username})
        .then(user=>{

            const listitems=req.body.payment.transactions[0].item_list.items.map(item=>{
                return(
                    `<tr>
                    <td><strong>${item.name}</strong><br></br><p>${item.description}</p></td>
                    <td>&nbsp;${item.quantity}</td>
                    <td>$ ${item.quantity*item.price}.00</td></tr>` 
                )
            });
            var bookTime='';
            if(req.body.payment.transactions[0].custom.split(" ").length===4)
            {
                bookTime=req.body.payment.transactions[0].custom.split(" ")[3];
            }

            const mailOptions = {
                from: LEGION_GMAIL_USERNAME,
                to: req.body.username,
                subject: "New Service Booking - Payment Successful",
                html: `<h1>Thank You for your Purchase</h1>
                <br></br>
                <h2>Order Details</h2>
                <div>
                    <div>
                    <Table>
                        <thead>
                        <tr>
                        <th>Service Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        ${listitems}
                        <tr>
                        <th>Total :</th>
                        <td></td>
                        <td>$ ${req.body.payment.transactions[0].amount.total}</td>
                        </tr>
                        </tbody>
                    </Table>
                    </div>
                    <div>
                        <div>
                            <h2>Booking Details</h2>
                            <p><span >Booking For:</span>&emsp; ${req.body.payment.transactions[0].custom.split(" ")[0]}&nbsp;${req.body.payment.transactions[0].custom.split(" ")[1]}</p>
                            <p><span>Booking Total:</span>&emsp; ${req.body.payment.transactions[0].amount.total} ${req.body.payment.transactions[0].amount.currency}</p>
                            <p><span>Booking Date:</span>&emsp; ${req.body.payment.transactions[0].custom.split(" ")[2]}</p>
                            <p><span>Booking Time Slot:</span>&emsp; ${bookTime}</p>
                            <p><span>Booking Address</span>&emsp;</p>
                            <p>${req.body.payment.payer.payer_info.shipping_address.line1}<br></br>${req.body.payment.payer.payer_info.shipping_address.line2}<br></br>${req.body.payment.payer.payer_info.shipping_address.postal_code}<br></br>${req.body.payment.payer.payer_info.shipping_address.city}, ${req.body.payment.payer.payer_info.shipping_address.state}, ${req.body.payment.payer.payer_info.shipping_address.country_code}</p>
                        </div>
                        <div>
                            <h2>Payment Details</h2>
                            <p><span >Payment Method:</span>&emsp; Paypal</p>
                            <p><span >Payment_ID:</span>&emsp; ${req.body.payment.id}</p>
                            <p><span >Created On:</span>&emsp; ${req.body.payment.create_time}</p>
                            <p><span >Payment Account</span>&emsp;<br></br>Name:&emsp;${req.body.payment.payer.payer_info.first_name} ${req.body.payment.payer.payer_info.last_name} <br></br>Email:&emsp;${req.body.payment.payer.payer_info.email}</p>
                        </div>
                        <p>Best,</p>
                        <p>Legion Group</p>
                    </div>
                 </div>`
            };

            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    console.error("error while sending an email")
                } else {
                    console.log("Email sent");
                }
            });

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