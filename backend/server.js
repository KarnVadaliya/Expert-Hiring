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
app.use('/Cleaning/sofaCleaning',productsSofaCleaningRouter);

const professionalRouter = require('./routes/professionals/professionals');
app.use('/professionals', professionalRouter);

const productsMakeUpRouter = require('./routes/salon/productsMakeUp');
app.use('/Salon/makeup', productsMakeUpRouter);

const productsElectricianRouter = require('./routes/homeservice/productsElectrician');
app.use('/HomeService/electrician', productsElectricianRouter);

const productsSalonSpaRouter = require('./routes/salon/productsSalonSpa');
app.use('/Salon/salonSpa', productsSalonSpaRouter);

const productsHaircutRouter = require('./routes/salon/productsHair');
app.use('/Salon/haircut', productsHaircutRouter);

const productsMassageRouter = require('./routes/massage/productsMassage');
app.use('/Massage/BodyMassage', productsMassageRouter);

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