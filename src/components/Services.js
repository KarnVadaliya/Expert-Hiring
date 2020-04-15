import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Scrollspy from 'react-scrollspy'

class ServicesComponent extends Component{
    render(){
        return(
            <div>

                <div className="servicesSection">
                    <div className="servicesNav">
                        <h3 style={{fontWeight:"600",color:"black",letterSpacing:"0.8px"}}>All Categories</h3>
                        <Scrollspy items={ ['Salon', 'Massage', 'Appliance','Electronic','Cleaning','Home-Service','Fitness'] } currentClassName="is-current">
                            <li><a href="#Salon">Salon</a></li>
                            <li><a href="#Massage">Massage</a></li>
                            <li><a href="#Appliance">Appliance Repair</a></li>
                            <li><a href="#Electronic">Electronic Repair</a></li>
                            <li><a href="#Cleaning">Cleaning</a></li>
                            <li><a href="#Home-Service">Home Services</a></li>
                            <li><a href="#Fitness">Fitness</a></li>
                        </Scrollspy>
                    </div>

                    <div className="servicesDescription">
                        <section id="Salon" className="service">
                            <h5>Salon</h5>
                            <div className="serviceContent">
                                <div className="serviceCell">
                                        <Link to="/makeup">
                                            <div>
                                                <img alt="makeup and hairstyling" src={require("../assets/img/serviceIcons/salon2.jpg")}/>
                                            </div>
                                            <div>
                                                <h6>Makeup &amp; Hairstyling</h6>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="serviceCell">
                                        <Link to="/salon-at-home">
                                            <div>
                                                <img alt="Salon at Home" src={require("../assets/img/serviceIcons/salon1.jpg")}/>
                                            </div>
                                            <div>
                                                <h6>Salon at Home (Women)</h6>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="serviceCell">
                                    <a href="https://www.youtube.com/">
                                            <div>
                                                <img alt="hair cut" src={require("../assets/img/serviceIcons/salon3.jpg")}/>
                                            </div>
                                            <div>
                                        
                                                <h6>Hair-Cut</h6>
                                            </div>
                                    </a>
                                    </div>
                            </div>
                        </section>
                        <section id="Massage" className="service">
                        <h5>Massage</h5>
                            <div className="serviceContent">
                                <div className="serviceCell">
                                    <a href="https://www.youtube.com/">
                                        <div>
                                            <img alt="massage" src={require("../assets/img/serviceIcons/salon1.jpeg")}/>
                                        </div>
                                        <div>
                                            <h6>Body Massage</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section id="Appliance" className="service">
                        <h5>Appliance Repair</h5>
                            <div className="serviceContent">
                                    <div className="serviceCell">
                                    <Link to="/ApplianceRepair/acRepair">
                                            <div>
                                                <img alt="AC service" src={require("../assets/img/serviceIcons/appliance1.jpg")}/>
                                            </div>
                                            <div>
                                                <h6>AC Service &amp; Repair</h6>
                                            </div>
                                    </Link>
                                    </div>
                                    <div className="serviceCell">
                                    <Link to="/ApplianceRepair/washingMachineRepair">
                                            <div>
                                                <img alt="Washing Machine Service" src={require("../assets/img/serviceIcons/appliance2.png")}/>
                                            </div>
                                            <div>
                                                <h6>Washing Machine Service &amp; Repair</h6>
                                            </div>
                                    </Link>
                                    </div>
                                    <div className="serviceCell">
                                    <Link to="/ApplianceRepair/fridgeRepair">
                                            <div>
                                                <img alt="Refrigerator Repair" src={require("../assets/img/serviceIcons/appliance3.png")}/>
                                            </div>
                                            <div>
                                                <h6>Refrigerator Repair</h6>
                                            </div>
                                    </Link>
                                    </div>
                            </div>
                        </section>
                        <section id="Electronic" className="service">
                        <h5>Electronic Repair</h5>
                            <div className="serviceContent">
                                    <div className="serviceCell">
                                    <Link to="/ElectronicRepair/waterRepair">
                                            <div>
                                                <img alt="Water Purifier Repair" src={require("../assets/img/serviceIcons/electronic1.jpg")}/>
                                            </div>
                                            <div>
                                                <h6>Water Purifier Repair</h6>
                                            </div>
                                    </Link>
                                    </div>
                                    <div className="serviceCell">
                                    <Link to="/ElectronicRepair/tvRepair">
                                            <div>
                                                <img alt="TV Repair" src={require("../assets/img/serviceIcons/electronic3.jpg")}/>
                                            </div>
                                            <div>
                                                <h6>TV Repair &amp; Installation</h6>
                                            </div>
                                    </Link>
                                    </div>
                                    <div className="serviceCell">
                                    <Link to="/ElectronicRepair/microwaveRepair">
                                            <div>
                                                <img alt="Microwave Repair" src={require("../assets/img/serviceIcons/electronic2.jpg")}/>
                                            </div>
                                            <div>
                                                <h6>Microwave &amp; Oven Repair</h6>
                                            </div>
                                    </Link>
                                    </div>   
                            </div>
                        </section>
                        
                        <section id="Cleaning" className="service">
                        <h5>Cleaning</h5>
                            <div className="serviceContent">
                                    <div className="serviceCell">
                                    <a href="https://www.youtube.com/">
                                            <div>
                                                <img alt="Bathroom Cleaning" src={require("../assets/img/serviceIcons/cleaning1.jpeg")}/>
                                            </div>
                                            <div>
                                                <h6>Bathroom Deep Cleaning</h6>
                                            </div>
                                    </a>
                                    </div>
                                    <div className="serviceCell">
                                    <Link to="/cleaning/sofaCleaning">
                                            <div>
                                                <img alt="Sofa Cleaning" src={require("../assets/img/serviceIcons/cleaning2.jpg")}/>
                                            </div>
                                            <div>
                                                <h6>Sofa Cleaning</h6>
                                            </div>
                                    </Link>
                                    </div>
                                    <div className="serviceCell">
                                    <a href="https://www.youtube.com/">
                                            <div>
                                                <img alt="Kitchen Cleaning" src={require("../assets/img/serviceIcons/cleaning3.jpeg")}/>
                                            </div>
                                            <div>
                                                <h6>Kitchen Deep Cleaning</h6>
                                            </div>
                                    </a>
                                    </div>
                                    <div className="serviceCell">
                                    <a href="https://www.youtube.com/">
                                            <div>
                                                <img alt="Home Cleaning" src={require("../assets/img/serviceIcons/cleaning4.jpeg")}/>
                                            </div>
                                            <div>
                                                <h6>Home Deep Cleaning</h6>
                                            </div>
                                    </a>
                                    </div>
                                    <div className="serviceCell">
                                    <a href="https://www.youtube.com/">
                                            <div>
                                                <img alt="Carpet Cleaning" src={require("../assets/img/serviceIcons/cleaning5.jpg")}/>
                                            </div>
                                            <div>
                                                <h6>Carpet Cleaning</h6>
                                            </div>
                                    </a>
                                    </div>
                                    <div className="serviceCell">
                                    <a href="https://www.youtube.com/">
                                            <div>
                                                <img alt="Car Cleaning" src={require("../assets/img/serviceIcons/cleaning6.jpeg")}/>
                                            </div>
                                            <div>
                                                <h6>Car Cleaning</h6>
                                            </div>
                                    </a>
                                    </div>
                            </div>
                        </section>
                        <section id="Home-Service" className="service">
                        <h5>Home Service</h5>
                            <div className="serviceContent">
                                    <div className="serviceCell">
                                    <Link to="/homeservice/electrician">
                                            <div>
                                                <img alt="Electrician" src={require("../assets/img/serviceIcons/home1.jpg")}/>
                                            </div>
                                            <div>
                                                <h6>Electrician</h6>
                                            </div>
                                    </Link>
                                    </div>
                                    <div className="serviceCell">
                                    <Link to="/homeservice/plumber">
                                            <div>
                                                <img alt="Plumber" src={require("../assets/img/serviceIcons/home2.jpeg")}/>
                                            </div>
                                            <div>
                                                <h6>Plumber</h6>
                                            </div>
                                    </Link>
                                    </div>
                                    <div className="serviceCell">
                                    <Link to="/homeservice/carpenter">
                                            <div>
                                                <img alt="Carpenter" src={require("../assets/img/serviceIcons/home3.jpeg")}/>
                                            </div>
                                            <div>
                                                <h6>Carpenter</h6>
                                            </div>
                                    </Link>
                                    </div>
                            </div>
                        </section>
                        
                        <section id="Fitness" className="service">
                        <h5>Fitness</h5>
                            <div className="serviceContent">
                                    <div className="serviceCell">
                                    <a href="https://www.youtube.com/">
                                            <div>
                                                <img alt="Yoga" src={require("../assets/img/serviceIcons/fitness1.jpeg")}/>
                                            </div>
                                            <div>
                                                <h6>Yoga Trainer</h6>
                                            </div>
                                    </a>
                                    </div>
                                    <div className="serviceCell">
                                    <a href="https://www.youtube.com/">
                                            <div>
                                                <img alt="Fitness" src={require("../assets/img/serviceIcons/fitness2.jpg")}/>
                                            </div>
                                            <div>
                                                <h6>Fitness Trainer</h6>
                                            </div>
                                    </a>
                                    </div>
                                    <div className="serviceCell">
                                    <a href="https://www.youtube.com/">
                                            <div>
                                                <img alt="Nutrition" src={require("../assets/img/serviceIcons/fitness3.jpg")}/>
                                            </div>
                                            <div>
                                                <h6>Nutrition Expert</h6>
                                            </div>
                                    </a>
                                    </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
           
         
            )
    }
}
export default ServicesComponent;