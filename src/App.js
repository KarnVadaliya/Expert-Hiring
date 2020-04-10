import React from 'react';
import Navbar from './components/Navbar';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import SofaCleaning from './components/Cleaning/SofaCleaning';
import Example from './components/Example';



function App() {
  return (
      <BrowserRouter>
      <div className="App">
          <Navbar></Navbar>
          <Route path="/" exact component={Home}></Route>  
          <Route path="/about" component={AboutUs}></Route>  
          <Route path="/contact" component={ContactUs}></Route> 
          {/* <Route path="/party" component={Party}></Route>     */}
          <Route path="/cleaning/sofaCleaning" component={SofaCleaning}></Route>
          <Route path="/example" component={Example}></Route>
          <Footer></Footer>
      </div>
      </BrowserRouter>
  );
}

//routes define

export default App;
