

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({path: __dirname + '/.env'})
const uri = process.env.DB_CONNECTION;
const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology: true})
    .then(()=> console.log("Connected to MongoDB.."))
    .catch(err => console.error('Could not connect...',err));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

const userRouter = require('./routes/users');
app.use('/users',userRouter);
//localhost:5000/users => userRouter

// 1)Log in
// 2)Register

const productsSofaCleaningRouter = require('./routes/cleaning/productsSofaCleaning');
app.use('/cleaning/sofaCleaning',productsSofaCleaningRouter);


app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});