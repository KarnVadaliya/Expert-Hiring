const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors');
require('dotenv').config({path: __dirname + '/.env'})
const uri = process.env.DB_CONNECTION ;
const app = express();

mongoose.Promise = global.Promise;

var connectionString = '';
if(process.env.USERNAME){
  connectionString = 'mongodb://'+process.env.USERNAME +':'+process.env.PASSWORD+'ds043057.mlab.com:43057/heroku_1mj6bx35'
}



mongoose.connect(uri || connectionString,{useNewUrlParser:true,useUnifiedTopology: true})
    .then(()=> console.log("Connected to MongoDB.."))
    .catch(err => console.error('Could not connect...',err));
app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === 'production'){
  app.use(express.static("../build"));
}


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const PORT = process.env.PORT || 5000;

const userRouter = require('./routes/users');
app.use('/users',userRouter);
//localhost:5000/users => userRouter


// Cleaning Routers
const productsSofaCleaningRouter = require('./routes/cleaning/productsSofaCleaning');
app.use('/Cleaning/sofaCleaning',productsSofaCleaningRouter);
const productsBathroomRouter = require('./routes/cleaning/productsBathroom');
app.use('/Cleaning/bathroomCleaning',productsBathroomRouter);
const productsKitchenRouter = require('./routes/cleaning/productsKitchen');
app.use('/Cleaning/kitchenCleaning',productsKitchenRouter);

const professionalRouter = require('./routes/professionals/professionals');
app.use('/professionals', professionalRouter);

const applicationRouter = require('./routes/application/application');
app.use('/application', applicationRouter);

//Appliance Routers
const productsACRouter = require('./routes/appliance/productsAC');
app.use('/ApplianceRepair/ac',productsACRouter);
const productsFridgeRouter = require('./routes/appliance/productsFridge');
app.use('/ApplianceRepair/fridge',productsFridgeRouter);
const productsWahingMachineRouter = require('./routes/appliance/productsWashingMachine');
app.use('/ApplianceRepair/washingmachine',productsWahingMachineRouter);

//Electronic Routers
const productsMicrowaveRouter = require('./routes/electronic/productsMicrowave');
app.use('/ElectronicRepair/microwave',productsMicrowaveRouter);
const productsTVRouter = require('./routes/electronic/productsTV');
app.use('/ElectronicRepair/tv',productsTVRouter);
const productsWaterPurifierRouter = require('./routes/electronic/productsWaterPurifier');
app.use('/ElectronicRepair/water',productsWaterPurifierRouter);

const productsMakeUpRouter = require('./routes/salon/productsMakeUp');
app.use('/Salon/makeup', productsMakeUpRouter);

const productsElectricianRouter = require('./routes/homeservice/productsElectrician');
app.use('/HomeService/electrician', productsElectricianRouter);

const productsPlumberRouter = require('./routes/homeservice/productsPlumber');
app.use('/HomeService/plumber', productsPlumberRouter);

const productsCarpenterRouter = require('./routes/homeservice/productsCarpenter');
app.use('/HomeService/carpenter', productsCarpenterRouter);

const productsSalonSpaRouter = require('./routes/salon/productsSalonSpa');
app.use('/Salon/salonSpa', productsSalonSpaRouter);

const productsHaircutRouter = require('./routes/salon/productsHair');
app.use('/Salon/haircut', productsHaircutRouter);

const productsMassageRouter = require('./routes/massage/productsMassage');
app.use('/Massage/bodyMassage', productsMassageRouter);

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



app.listen(process.env.PORT || PORT, () => {
  console.log(`app running on port ${PORT}`)
});