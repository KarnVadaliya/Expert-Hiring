const mongoose = require('mongoose');
var ReviewSchema = require('./reviews.model');

const Schema = mongoose.Schema;


const professionalSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    address:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    ratings:{
        type: Number,
        required: true
    },
    numberOfRatings:{
        type: Number,
        required: true
    },
    rated5Stars:{
        type: Number,
        required: true
    },
    reviews:[ReviewSchema],
    category:{
        type: String,
        required: true
    },
    serviceInCity:{
        type: String,
        required: true
    }
});

const Professional = mongoose.model('professionals', professionalSchema);

module.exports = Professional;