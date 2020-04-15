const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
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

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const PORT = process.env.PORT || 5000;

const userRouter = require('./routes/users');
app.use('/users',userRouter);
//localhost:5000/users => userRouter


const productsSofaCleaningRouter = require('./routes/cleaning/productsSofaCleaning');
app.use('/cleaning/sofaCleaning',productsSofaCleaningRouter);

const professionalRouter = require('./routes/professionals/professionals');
app.use('/professionals', professionalRouter);

const productsMakeUpRouter = require('./routes/salon/productsMakeUp');
app.use('/salon/makeup', productsMakeUpRouter);

// const salonRouter = require('./routes/salon/productsMakeUp');
// app.use('/salon/makeup', salonRouter);

app.use(passport.initialize());
app.use(passport.session());

const User = require('./models/users.model'); 


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser((user, cb) => {
  User.serializeUser();
  cb(null, user);
});
passport.deserializeUser((user, cb) => {
  User.deserializeUser();
  cb(null, user);
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});