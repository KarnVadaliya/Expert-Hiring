import React from 'react';
import Navbar from './components/NavbarComponent';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar></Navbar>
        <Route path="/" exact component={Home}></Route>  
        {/* <Route path="/about" exact component={AboutUs}></Route>  
        <Route path="/contact" exact component={ContactUs}></Route>      */}
    </div>
    </BrowserRouter>
  );
}

export default App;
