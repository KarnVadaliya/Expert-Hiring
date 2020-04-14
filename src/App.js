import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import SofaCleaningCart from './components/Services/Cleaning/SofaCleaning/SofaCleaningCart';
import MakeUp from './components/Services/make-up/Makeup';
import ScrollToTop from './ScrollToTop';
import SofaCleaning from './components/Services/Cleaning/SofaCleaning/SofaCleaning';
import Electrician from './components/Services/Home Service/Electrician/Electrician';
import Plumber from './components/Services/Home Service/Plumber/Plumber';
import Carpenter from './components/Services/Home Service/Carpenter/Carpenter';
import Careers from './components/Careers';
import SalonAtHome from './components/Services/SalonAtHome';
import Payment from './components/Payment';
import Footer from './components/Footer';

function App() {
  return (
      <BrowserRouter>
        <Switch>
            <ScrollToTop>
              <div className="App">
                  <Navbar />
                  <Route path="/" exact component={Home}></Route>  
                  <Route path="/about" component={AboutUs}></Route>  
                  <Route path="/contact" component={ContactUs}></Route> 
                  <Route path="/makeup" component={MakeUp}></Route> 
                  <Route path="/payment" component={Payment}></Route> 
                  <Route path="/salon-at-home" component={SalonAtHome}></Route> 
                  <Route path="/careers" component={Careers}></Route>
                  <Route path="/cleaning/sofaCleaning" exact component={SofaCleaning}></Route>             
                  <Route path="/cleaning/sofaCleaning/shop" component={SofaCleaningCart}></Route> 
                  <Route path="/homeservice/plumber" exact component={Plumber}></Route>     
                  <Route path="/homeservice/electrician" exact component={Electrician}></Route>     
                  <Route path="/homeservice/carpenter" exact component={Carpenter}></Route>        
                  <Footer />
              </div>
            </ScrollToTop>
          </Switch>
      </BrowserRouter>
  );
}


export default App;
