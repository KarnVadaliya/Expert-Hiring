const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const productSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    description:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    inCart:{
        type: Boolean,
        required: true
    },
    category:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    id:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        unique: true
    }
});

const Product = mongoose.model('Fridge Products', productSchema);

module.exports = Product;