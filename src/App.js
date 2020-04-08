import React from 'react';
import Navbar from './components/NavbarComponent';
import Searchbar from './components/Searchbar';
// import CardsFooter from '../node_modules/argon-design-system-react/src/components/Footers/CardsFooter';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ServiceBar from './components/ServiceBarComponent';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
            <Navbar></Navbar>            
        </header>
        <Switch>
          <Route path='/aboutUs' component={AboutUs} />
          <Route path='/'>
            <div>
              <Searchbar></Searchbar>
              <ServiceBar></ServiceBar>
            </div>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
