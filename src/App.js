import React from 'react';
import Navbar from './components/Navbar';
// import ServiceBar from './components/ServiceBarComponent';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Careers from './components/Careers';
import SofaCleaning from './components/Cleaning/SofaCleaning';
import Example from './components/Example';
import MakeUp from './components/Services/Makeup';
import SalonAtHome from './components/Services/SalonAtHome';



import Makeup from './components/Makeup';
import Payment from './components/Payment';

function App() {
  return (
      <BrowserRouter>
      <div className="App">
          <Navbar name={"hello"}></Navbar>
          <Route path="/" exact component={Home}></Route>  
          <Route path="/about" component={AboutUs}></Route>  
          <Route path="/contact" component={ContactUs}></Route> 
          <Route path="/makeup" component={MakeUp}></Route> 
          <Route path="/payment" component={Payment}></Route> 
          <Route path="/salon-at-home" component={SalonAtHome}></Route> 
          <Route path="/cleaning/sofaCleaning" component={SofaCleaning}></Route>
          <Route path="/example" component={Example}></Route>
          <Route path="/careers" component={Careers}></Route>
          <Footer></Footer>
      </div>
      </BrowserRouter>
  );
}


export default App;
