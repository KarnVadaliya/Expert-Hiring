import React from 'react';
import Navbar from './components/NavbarComponent';
import Searchbar from './components/Searchbar';

import ServiceBar from './components/ServiceBarComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Searchbar></Searchbar>
        {/* {console.log(this.state.service)} */}
        <ServiceBar></ServiceBar>
      </header>
    </div>
  );
}

export default App;
