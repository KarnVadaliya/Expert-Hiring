const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const applicationSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    phone:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    skills:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    location:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    position:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    }

});

const Review = mongoose.model('Job Application', applicationSchema);

module.exports = Review;