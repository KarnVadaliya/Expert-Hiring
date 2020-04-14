const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password:{
        type: String,
        required: true,
        select: false,
        minlength: 3
    },
    paymentHistory: {
        type: Array
    }
});

userSchema.plugin(passportLocalMongoose);


const User = mongoose.model('User', userSchema);

module.exports = User;