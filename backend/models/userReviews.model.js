const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    comment:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    ratings:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    }
});

const Review = mongoose.model('user reviews', reviewSchema);

module.exports = Review;