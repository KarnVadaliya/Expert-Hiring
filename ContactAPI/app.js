const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');


const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.get('/api', (req, res, next) => {
    res.send('API Status: I\'m awesome')
});


app.post('/', ( req, res, next) => {

    console.log(req.body);

    sendGrid.setApiKey('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');
    const msg = {
        to: 'webdesign.legion.16@gmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        // text: req.body.comments
    }

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
});


app.listen(3030, '0.0.0.0');