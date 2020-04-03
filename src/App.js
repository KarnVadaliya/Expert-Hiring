import React from 'react';
import Navbar from './components/NavbarComponent';
import ServiceBar from './components/ServiceBarComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <ServiceBar></ServiceBar>
      </header>
    </div>
  );
}

export default App;
