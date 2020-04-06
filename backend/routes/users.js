const router = require('express').Router();
const User = require('../models/users.model');

router.route('/').get((req,res)=>{
    User.find()
        .then(users=>res.json(users))
        .catch(error=>res.status(400).json('Error: '+error));
});

router.route('/add').post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new User({
        name,
        email,
        password
    });
    newUser.save()
        .then(()=>res.json('User created'))
        .catch(error=>res.status(400).json('Error: '+error));
});

module.exports = router;