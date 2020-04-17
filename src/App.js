import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
import Careers from './components/Careers';
import Payment from './components/Payment';
import PaymentHistory from "./components/PaymentHistory";

import SofaCleaning from './components/Services/Cleaning/SofaCleaning/SofaCleaning';
import SofaCleaningCart from './components/Services/Cleaning/SofaCleaning/SofaCleaningCart';
import BathroomCleaning from './components/Services/Cleaning/BathroomCleaning/BathroomCleaning';
import BathroomCleaningCart from './components/Services/Cleaning/BathroomCleaning/BathroomCleaningCart';
import KitchenCleaning from './components/Services/Cleaning/KitchenCleaning/KitchenCleaning';
import KitchenCleaningCart from './components/Services/Cleaning/KitchenCleaning/KitchenCleaningCart';


import Electrician from './components/Services/Home Service/Electrician/Electrician';
import ElectricianCart from './components/Services/Home Service/Electrician/ElectricianCart';
import Plumber from './components/Services/Home Service/Plumber/Plumber';
import PlumberCart from './components/Services/Home Service/Plumber/PlumberCart';
import Carpenter from './components/Services/Home Service/Carpenter/Carpenter';
import CarpenterCart from './components/Services/Home Service/Carpenter/CarpenterCart';


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
import Review from './components/Review';

import MakeUp from './components/Services/Salon/makeUp/MakeUp';
import MakeUpCart from './components/Services/Salon/makeUp/MakeUpCart';
import SalonAtHomeWomen  from './components/Services/Salon/SalonAtHome/SalonAtHomeWomen';
import SalonAtHomeWomenCart from './components/Services/Salon/SalonAtHome/SalonAtHomeWomenCart';
import Haircut from './components/Services/Salon/Hair/Haircut';
import HaircutCart from './components/Services/Salon/Hair/HaircutCart';
import CartModal from './components/Services/Cleaning/SofaCleaning/CartModal';

import BodyMassage from './components/Services/Massage/BodyMassage/BodyMassage';
import BodyMassageCart from './components/Services/Massage/BodyMassage/BodyMassageCart';

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
                  <Route path="/paymenthistory" exact component={PaymentHistory}></Route>
                  <Route path="/paymenthistory/review" component={Review}></Route>

                  <Route path="/careers" component={Careers}></Route>

                  <Route path="/Cleaning/sofaCleaning" exact component={SofaCleaning}></Route>             
                  <Route path="/Cleaning/sofaCleaning/shop" component={SofaCleaningCart}></Route>
                  <Route path="/Cleaning/bathroomCleaning" exact component={BathroomCleaning}></Route>             
                  <Route path="/Cleaning/bathroomCleaning/shop" component={BathroomCleaningCart}></Route> 
                  <Route path="/Cleaning/kitchenCleaning" exact component={KitchenCleaning}></Route>             
                  <Route path="/Cleaning/kitchenCleaning/shop" component={KitchenCleaningCart}></Route> 
                  
                  <Route path="/HomeService/plumber" exact component={Plumber}></Route>  
                  <Route path="/HomeService/plumber/shop" component={PlumberCart}></Route>    
                  <Route path="/HomeService/electrician" exact component={Electrician}></Route>  
                  <Route path="/HomeService/electrician/shop" component={ElectricianCart}></Route>    
                  <Route path="/HomeService/carpenter" exact component={Carpenter}></Route>  
                  <Route path="/HomeService/carpenter/shop" component={CarpenterCart}></Route> 

                  <Route path="/Salon/makeup" exact component={MakeUp}></Route>
                  <Route path="/Salon/makeup/shop" component={MakeUpCart}></Route>
                  <Route path="/Salon/salonAtHomeWomen" exact component={SalonAtHomeWomen}></Route>
                  <Route path="/Salon/salonAtHomeWomen/shop"  component={SalonAtHomeWomenCart}></Route>
                  <Route path="/Salon/haircut" exact component={Haircut}></Route>
                  <Route path="/Salon/haircut/shop" component={HaircutCart}></Route>
                  
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

                  
                  <Route path="/Massage/bodyMassage" exact component={BodyMassage}></Route>
                  <Route path="/Massage/bodyMassage/shop" component={BodyMassageCart}></Route>

                  <CartModal />
                  <Footer />    

                  
                   
              </div>
            </ScrollToTop>
          </Switch>
      </BrowserRouter>
  );
}


export default App;
