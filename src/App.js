import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
import SofaCleaning from './components/Services/Cleaning/sofaCleaning/SofaCleaning';
import SofaCleaningCart from './components/Services/Cleaning/sofaCleaning/SofaCleaningCart';
import Electrician from './components/Services/Home Service/Electrician/Electrician';
import Plumber from './components/Services/Home Service/Plumber/Plumber';
import Carpenter from './components/Services/Home Service/Carpenter/Carpenter';
import Careers from './components/Careers';
import SalonAtHome from './components/Services/SalonAtHome';
import Payment from './components/Payment';
import ElectricianCart from './components/Services/Home Service/Electrician/ElectricianCart';
import MakeUp from './components/Services/Salon/makeUp/MakeUp';
import MakeUpCart from './components/Services/Salon/makeUp/MakeUpCart';
import MicrowaveRepair  from "./components/Services/ElectronicRepair/microwaveRepair/MicrowaveRepair";
import MicrowaveRepairCart  from "./components/Services/ElectronicRepair/microwaveRepair/MicrowaveRepairCart";
import TVRepair  from "./components/Services/ElectronicRepair/tvRepair/TVRepair";
import TVRepairCart  from "./components/Services/ElectronicRepair/tvRepair/TVRepairCart";
import WaterRepair  from "./components/Services/ElectronicRepair/waterRepair/WaterRepair";
import WaterRepairCart  from "./components/Services/ElectronicRepair/waterRepair/WaterRepairCart";
import ACRepair  from "./components/Services/ApplianceRepair/acRepair/ACRepair";
import ACRepairCart  from "./components/Services/ApplianceRepair/acRepair/ACRepairCart";
import WMRepair  from "./components/Services/ApplianceRepair/washingMachineRepair/WashingMachineRepair";
import WMRepairCart  from "./components/Services/ApplianceRepair/washingMachineRepair/WashingMachineRepairCart";
import FridgeRepair  from "./components/Services/ApplianceRepair/fridgeRepair/FridgeRepair";
import FridgeRepairCart  from "./components/Services/ApplianceRepair/fridgeRepair/FridgeRepairCart";

function App() {
  return (
      <BrowserRouter>
        <Switch>
            <ScrollToTop>
              <div className="App">
                  <Navbar />
                  <Route path="/" exact component={Home}></Route>  
                  <Route path="/about" component={AboutUs}></Route>  
                  <Route path="/contact" component={ContactUs}></Route>         
                  <Route path="/payment" component={Payment}></Route> 
                  <Route path="/salon-at-home" component={SalonAtHome}></Route> 
                  <Route path="/careers" component={Careers}></Route>
                  <Route path="/cleaning/sofaCleaning" exact component={SofaCleaning}></Route>             
                  <Route path="/cleaning/sofaCleaning/shop" component={SofaCleaningCart}></Route> 
                  <Route path="/homeservice/plumber" exact component={Plumber}></Route>     
                  <Route path="/homeservice/electrician" exact component={Electrician}></Route>  
                  <Route path="/homeservice/electrician/shop" component={ElectricianCart}></Route>    
                  <Route path="/homeservice/carpenter" exact component={Carpenter}></Route>        
                  <Route path="/salon/makeup" exact component={MakeUp}></Route>
                  <Route path="/salon/makeup/shop" component={MakeUpCart}></Route>
                  <Route path="/ElectronicRepair/microwaveRepair" exact component={MicrowaveRepair}></Route>             
                  <Route path="/ElectronicRepair/microwaveRepair/shop" component={MicrowaveRepairCart}></Route> 
                  <Route path="/ElectronicRepair/tvRepair" exact component={TVRepair}></Route>
                  <Route path="/ElectronicRepair/tvRepair/shop" component={TVRepairCart}></Route> 
                  <Route path="/ElectronicRepair/waterRepair" exact component={WaterRepair}></Route>
                  <Route path="/ElectronicRepair/waterRepair/shop" component={WaterRepairCart}></Route>  
                  <Route path="/ApplianceRepair/acRepair" exact component={ACRepair}></Route>
                  <Route path="/ApplianceRepair/acRepair/shop" component={ACRepairCart}></Route>
                  <Route path="/ApplianceRepair/washingMachineRepair" exact component={WMRepair}></Route>
                  <Route path="/ApplianceRepair/washingMachineRepair/shop" component={WMRepairCart}></Route>
                  <Route path="/ApplianceRepair/fridgeRepair" exact component={FridgeRepair}></Route>
                  <Route path="/ApplianceRepair/fridgeRepair/shop" component={FridgeRepairCart}></Route>
                  <Footer />    
                  
                   
              </div>
            </ScrollToTop>
          </Switch>
      </BrowserRouter>
  );
}


export default App;
