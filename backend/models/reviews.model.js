const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    starsGiven:{
        type: Number,
        required: true,
    },
    comment:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    date:{
        type: Date,
        default: Date.now
    }
});


module.exports = reviewSchema;