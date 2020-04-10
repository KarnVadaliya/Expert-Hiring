import React from 'react';
import Navbar from './components/Navbar';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import makeUp from './components/Services/Makeup';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar></Navbar>
        <Route path="/" exact component={Home}></Route>  
        <Route path="/about" component={AboutUs}></Route>  
        <Route path="/contact" component={ContactUs}></Route>   
        <Route path="/makeup" component={makeUp}></Route>     
        <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
