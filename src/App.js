import React from 'react';
import Navbar from './components/Navbar';

import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import SofaCleaningCart from './components/Services/Cleaning/sofaCleaning/SofaCleaningCart';
import ScrollToTop from './ScrollToTop';
import SofaCleaning from './components/Services/Cleaning/sofaCleaning/SofaCleaning';
import Careers from './components/Careers';
import SalonAtHome from './components/Services/SalonAtHome';
import Payment from './components/Payment';
import MakeUp from './components/Services/Salon/makeUp/MakeUp';
import MakeUpCart from './components/Services/Salon/makeUp/MakeUpCart';

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
                  <Route path="/payment" component={Payment}></Route> 
                  <Route path="/salon-at-home" component={SalonAtHome}></Route> 
                  <Route path="/careers" component={Careers}></Route>
                  <Route path="/cleaning/sofaCleaning" exact component={SofaCleaning}></Route>             
                  <Route path="/cleaning/sofaCleaning/shop" component={SofaCleaningCart}></Route> 
                  <Route path="/salon/makeup" exact component={MakeUp}></Route>
                  <Route path="/salon/makeup/shop" component={MakeUpCart}></Route>
                  <Footer />
              </div>
            </ScrollToTop>
          </Switch>
      </BrowserRouter>
  );
}


export default App;
