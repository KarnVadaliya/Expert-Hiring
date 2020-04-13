import React from 'react';
import Navbar from './components/NavbarComponent';
import Searchbar from './components/Searchbar';

<<<<<<< Updated upstream
import ServiceBar from './components/ServiceBarComponent';
=======
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Careers from './components/Careers';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
<<<<<<< Updated upstream
        <Searchbar></Searchbar>
        {/* {console.log(this.state.service)} */}
        <ServiceBar></ServiceBar>
      </header>
=======
        <Route path="/" exact component={Home}></Route>  
        <Route path="/about" component={AboutUs}></Route>  
        <Route path="/contact" component={ContactUs}></Route>  
        <Route path="/careers" component={Careers}></Route>
        <Footer></Footer>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
