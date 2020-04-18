import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Scrollspy from 'react-scrollspy';
import { connect } from 'react-redux';
import { setSearch } from '../actions/setSearch'

class ServicesComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            services: [

                {
                    name: "Home Services",
                    subServices: [
                        {
                            name: "Electrician",
                            link: "/HomeService/electrician",                            
                            image: "home1.jpg",
                            category: "Home Services"
                        },
                        {
                            name: "Plumber",
                            link: "/HomeService/plumber",
                            image: "home2.jpeg",
                            category: "Home Services"   
                        },
                        {
                            name: "Carpenter",
                            link: "/HomeService/carpenter",
                            image: "home3.jpeg",
                            category: "Home Services"   
                        }
                    ]
                },
                
                {
                    name: "Appliance Repair",
                    subServices: [
                        {
                            name: "AC Service & Repair",
                            link: "/ApplianceRepair/acRepair",                            
                            image: "appliance1.jpg",
                            category: "Appliance Repair"
                        },
                        {
                            name: "Washing Machine Service & Repair",
                            link: "/ApplianceRepair/washingMachineRepair",
                            image: "appliance2.png",
                            category: "Appliance Repair"   
                        },
                        {
                            name: "Refrigerator Repair",
                            link: "/ApplianceRepair/fridgeRepair",
                            image: "appliance3.png",
                            category: "Appliance Repair"   
                        }
                    ]
                },
                {
                    name: "Electronic Repair",
                    subServices: [
                        {
                            name: "Water Purifier Repair",
                            link: "/ElectronicRepair/waterRepair",                            
                            image: "electronic1.jpg",
                            category: "Electronic Repair"
                        },
                        {
                            name: "TV Repair & Installation",
                            link: "/ElectronicRepair/tvRepair",
                            image: "electronic3.jpg",
                            category: "Electronic Repair"   
                        },
                        {
                            name: "Microwave and Oven Repair",
                            link: "/ElectronicRepair/microwaveRepair",
                            image: "electronic2.jpg",
                            category: "Electronic Repair"   
                        }
                    ]
                },
                {
                    name: "Salon",
                    subServices: [
                        {
                            name: "Makeup and Hairstyling",
                            link: "/Salon/makeup",                            
                            image: "salon2.jpg",
                            category: "Salon"
                        },
                        {
                            name: "Salon at Home (Women)",
                            link: "/Salon/salonAtHomeWomen",
                            image: "salon1.jpg",
                            category: "Salon"                             
                        },
                        {
                            name: "Hair-Cut",
                            link: "/Salon/haircut",
                            image: "salon3.jpg", 
                            category: "Salon"  
                        }
                    ]
                },
                {
                    name: "Massage",
                    subServices: [
                        {
                            name: "Body Massage",
                            link: "/Massage/bodyMassage",                            
                            image: "salon1.jpeg",
                            category: "Massage"
                        }               
                    ]
                },
                
                {
                    name: "Cleaning",
                    subServices: [
                        {
                            name: "Bathroom Deep Cleaning",
                            link: "/Cleaning/bathroomCleaning",                            
                            image: "cleaning1.jpeg",
                            category: "Cleaning"
                        },
                        {
                            name: "Sofa Cleaning",
                            link: "/Cleaning/sofaCleaning",
                            image: "cleaning2.jpg",
                            category: "Cleaning"   
                        },
                        {
                            name: "Kitchen Deep Cleaning",
                            link: "/Cleaning/kitchenCleaning",
                            image: "cleaning3.jpeg",
                            category: "Cleaning"   
                        }
                    ]
                },
                
                {
                    name: "Fitness",
                    subServices: [
                        {
                            name: "Yoga Trainer",
                            link: "#notGiven",                            
                            image: "fitness1.jpeg",
                            category: "Fitness"
                        },
                        {
                            name: "Fitness Trainer",
                            link: "#notGiven",
                            image: "fitness2.jpg",
                            category: "Fitness"   
                        },
                        {
                            name: "Nutrition Expert",
                            link: "#notGiven",
                            image: "fitness3.jpg",
                            category: "Fitness"   
                        }
                    ]
                }              
            ]
        }
    }
    componentDidMount(){
        this.props.setSearch("");
    }
    render(){
        
        var found = false;
        var notFound = "";
        const displayList = this.state.services.map(service=>{
            return(
                <section id={service.name.replace(/\s/g,'')} className="service">
                    <h5>{service.name}</h5>
                    <div className="serviceContent">
                        {service.subServices.map(subService=>{
                            return(
                                <div className="serviceCell">
                                    <Link to={subService.link}>
                                        <div>
                                            <img alt={subService.name} src={require("../assets/img/serviceIcons/"+subService.image)}/>
                                        </div>
                                        <div>
                                            <h6>{subService.name}</h6>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </section>

            );
        })

        let finalList = {};
        let searchResult = {};
        if(this.props.mainPageState.search !== ""){
            console.log("not empty");
            searchResult = (
                <>
                    <h1>Search Results:</h1>
                    {this.state.services.map(service=>{
                        return(
                            <div className="serviceContent">
                                {service.subServices.map(subService=>{
                                    let subServiceName = subService.name.toLowerCase();
                                    let category = subService.category.toLowerCase();
                                    let searchString = this.props.mainPageState.search.toLowerCase();

                                    if(subServiceName.search(searchString) !== -1 || category.search(searchString)!== -1){
                                        found = true;
                                        return(
                                            <div className="serviceCell">
                                                <Link to={subService.link}>
                                                    <div>
                                                        <img alt={subService.name} src={require("../assets/img/serviceIcons/"+subService.image)}/>
                                                    </div>
                                                    <div>
                                                        <h6>{subService.name}</h6>
                                                    </div>
                                                </Link>
                                            </div>
                                        );
                                    }
                                    else{
                                        return null;
                                    }
                                })}
                            </div>
                        );
                    })}
                </>
            );
           
            if(found)
                finalList = searchResult;
            else{
            
             finalList = (
                 <>
                    <h1>Search Results:</h1>
                    <br></br>
                    <br></br>
                    <p style={{paddingLeft:"28%" ,fontWeight:"bold", fontSize:"30px"}}>No Results Found!</p>
                </>
             );
            }
            notFound = "notFound";
        }else{
            finalList = displayList;
        }

        
        return(
            <div>
                <div className="servicesSection">
                {console.log(found)}
                    {   notFound !== "notFound" &&
                        <div className="servicesNav">
                        <h3 style={{fontWeight:"600",color:"black",letterSpacing:"0.8px"}}>All Categories</h3>
                        <Scrollspy items={ ['HomeServices','ApplianceRepair','ElectronicRepair', 'Salon', 'Massage', 'Cleaning','Fitness'] } currentClassName="is-current">
                           
                            <li><a href="#HomeServices">Home Services</a></li>
                            <li><a href="#ApplianceRepair">Appliance Repair</a></li>
                            <li><a href="#ElectronicRepair">Electronic Repair</a></li>
                            <li><a href="#Salon">Salon</a></li>
                            <li><a href="#Massage">Massage</a></li>
                            <li><a href="#Cleaning">Cleaning</a></li>
                            <li><a href="#Fitness">Fitness</a></li>

                        </Scrollspy>
                    </div>}
                    
                    <div className="servicesDescription">
                        {finalList}                
                    </div>
                </div>
            </div>
           
         
            )
    }
}

const mapStateToProps = (state) => ({
    mainPageState: state.mainPageState
});
export default connect(mapStateToProps, { setSearch })(ServicesComponent);