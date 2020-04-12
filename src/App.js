import React from 'react';
import Navbar from './components/Navbar';

import { BrowserRouter, Route } from 'react-router-dom';
// import { ConnectedRouter } from 'react-router-redux';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import SofaCleaning from './components/Cleaning/SofaCleaning';
import MakeUp from './components/Services/make-up/Makeup';
import ScrollToTop from './ScrollToTop';


function App() {
  return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
              <Navbar name={"hello"}></Navbar>
              <Route path="/" exact component={Home}></Route>  
              <Route path="/about" component={AboutUs}></Route>  
              <Route path="/contact" component={ContactUs}></Route> 
              <Route path="/makeup" component={MakeUp}></Route> 
              <Route path="/cleaning/sofaCleaning" component={SofaCleaning}></Route>          
              <Footer></Footer>
          </div>
        </ScrollToTop>
      </BrowserRouter>
  );
}


export default App;
