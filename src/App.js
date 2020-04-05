import React from 'react';
import Navbar from './components/NavbarComponent';
import Searchbar from './components/Searchbar';
// import CardsFooter from '../node_modules/argon-design-system-react/src/components/Footers/CardsFooter';
import Footer from './components/Footer';

import ServiceBar from './components/ServiceBarComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Searchbar></Searchbar>
        {/* {console.log(this.state.service)} */}
        <ServiceBar></ServiceBar>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
