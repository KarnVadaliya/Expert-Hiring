import React from 'react';
import Navbar from './components/Navbar';

import { BrowserRouter, Route, Switch} from 'react-router-dom';
// import { ConnectedRouter } from 'react-router-redux';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import SofaCleaningCart from './components/Cleaning/SofaCleaningCart';
import MakeUp from './components/Services/make-up/Makeup';
import ScrollToTop from './ScrollToTop';
import SofaCleaning from './components/Services/sofaCleaning/SofaCleaning';


function App() {
  return (
      <BrowserRouter>
        <Switch>
            <ScrollToTop>
              <div className="App">
                  <Navbar name={"hello"}></Navbar>
                  <Route path="/" exact component={Home}></Route>  
                  <Route path="/about" component={AboutUs}></Route>  
                  <Route path="/contact" component={ContactUs}></Route> 
                  <Route path="/makeup" component={MakeUp}></Route> 
                  <Route path="/cleaning/sofaCleaning" exact component={SofaCleaning}></Route>             
                  <Route path="/cleaning/sofaCleaning/shop" component={SofaCleaningCart}></Route> 
                  <Footer></Footer>
              </div>
            </ScrollToTop>
          </Switch>
      </BrowserRouter>
  );
}


export default App;
