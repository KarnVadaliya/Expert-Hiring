const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
// const uri = process.env.DB_CONNECTION;
mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://webDesign:Legion16@webdesign-kulau.mongodb.net/test?retryWrites=true&w=majority`);
mongoose.connect('mongodb+srv://webDesign:Legion16@webdesign-kulau.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true})
    .then(()=> console.log("Connected to MongoDB.."))
    .catch(err => console.error('Could not connect...',err));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});