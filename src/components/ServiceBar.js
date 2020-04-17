import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
  Button,
  Modal,
} from "reactstrap";





class ServiceBarComponet extends Component{
    state = {
        exampleModal: false,
        activeModal:""
      };
      toggleModal = (exampleModal,activeModal) => {
        const temp=activeModal;
        this.setState({
          exampleModal: !this.state[exampleModal],
          activeModal:activeModal 
        });
      };

      toggleDisplay=c=>{
          console.log(this.state.activeModal);
          document.getElementById(this.state.activeModal).style.display="none";
          document.getElementById(c).style.display="block";
          this.setState({
            activeModal:c
          });
      }
    
    render(){
      
        var input;
        return(
        <div>
            <ul className="serviceBar">
                <li className="serviceItem">
                    <span >
                        <img alt="salon" src={require("../assets/img/services/hair-dryer.png")} style={{width:"85px",height:"85px"}}  onClick={() => this.toggleModal("exampleModal","salonModal")} />
                    </span>
                    <h6>Salon at Home</h6>
                </li>
                <li className="serviceItem">
                    <span >
                        <img alt="appliance-electronic repair" src={require("../assets/img/services/air-conditioner.png")} style={{width:"85px",height:"85px"}}  onClick={() => this.toggleModal("exampleModal","applianceModal")}/>
                    </span>
                    <h6>Appliances &amp;<br></br>Electronic Repairs</h6>
                </li>
                <li className="serviceItem">
                    <span >
                        <img alt="clean" src={require("../assets/img/services/clean.png")} style={{width:"85px",height:"85px"}}  onClick={() => this.toggleModal("exampleModal","cleanModal")}/>
                    </span>
                    <h6>Cleaning</h6>
                </li>
                <li className="serviceItem">
                    <span >
                        <img alt="massage" src={require("../assets/img/services/spa.png")} style={{width:"85px",height:"85px"}}  onClick={() => this.toggleModal("exampleModal","massageModal")}/>
                    </span>
                    <h6>Massage at Home</h6>
                </li>
                <li className="serviceItem">
                    <span >
                        <img alt="epc" src={require("../assets/img/services/repair.png")} style={{width:"85px",height:"85px"}}  onClick={() => this.toggleModal("exampleModal","epcModal")}/>
                    </span>
                    <h6>Electrician, Plumber <br></br> &amp; Carpenter</h6>
                </li>
                <li className="serviceItem">
                    <span >
                        <img alt="fitness" src={require("../assets/img/services/yoga-mat.png")} style={{width:"85px",height:"85px"}}  onClick={() => this.toggleModal("exampleModal","fitnessModal")}/>
                    </span>
                    <h6>Yoga &amp; Fitness</h6>
                </li>
            </ul>
            

        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.exampleModal}
          toggle={() => this.toggleModal("exampleModal")}
        >
          <div className="modal-body">
              <div className="serviceModal">
                  <div className="serviceModalLeft">
                    <ul>
                        <li>
                            <div >
                                <span >
                                     <img alt="salon" src={require("../assets/img/services/hair-dryer.png")} style={{width:"50px",height:"50px"}} onClick={() => this.toggleDisplay("salonModal")}/>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span >
                                    <img alt="appliance-electronic repair" src={require("../assets/img/services/air-conditioner.png")} style={{width:"50px",height:"50px"}} onClick={() => this.toggleDisplay("applianceModal")}/>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span >
                                    <img alt="clean" src={require("../assets/img/services/clean.png")} style={{width:"50px",height:"50px"}} onClick={() => this.toggleDisplay("cleanModal")}/>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span >
                                    <img alt="massage" src={require("../assets/img/services/spa.png")} style={{width:"50px",height:"50px"}} onClick={() => this.toggleDisplay("massageModal")}/>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span >
                                    <img alt="epc" src={require("../assets/img/services/repair.png")} style={{width:"50px",height:"50px"}} onClick={() => this.toggleDisplay("epcModal")}/>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span >
                                    <img alt="fitness" src={require("../assets/img/services/yoga-mat.png")} style={{width:"50px",height:"50px"}} onClick={() => this.toggleDisplay("fitnessModal")}/>
                                </span>
                            </div>
                        </li>
                    </ul>
                  </div>
                  <div>&emsp;&emsp;</div>
                  <div className="serviceModalRight">
                    <div id="salonModal" style={{display:(this.state.activeModal === "salonModal")? ("block") : ("none")}} >
                    
                        <Link to="/Salon/makeup">
                            <p>Make up &amp; Hair styling </p>
                        </Link>
                       
                        <Link to="/Salon/salonAtHomeWomen">
                            <p>Salon at Home (Women)</p>
                        </Link>

                        <Link to="/Salon/haircut">
                            <p>Hair cut</p>
                        </Link>
                    </div>
                    <div id="applianceModal" style={{display:(this.state.activeModal === "applianceModal")? ("block") : ("none")}}>
                        <Link to="/ApplianceRepair/acRepair">
                            <p>AC Service &amp; Repair</p>
                        </Link>
                        <Link to="/ApplianceRepair/washingMachineRepair">
                            <p>Washing Machine Service &amp; Repair</p>
                        </Link>
                        <Link to="/ApplianceRepair/fridgeRepair">
                            <p>Refrigerator Repair</p>
                        </Link>
                        <Link to="/ElectronicRepair/waterRepair">
                            <p>Water Purifier Repair</p>
                        </Link>
                        <Link to="/ElectronicRepair/microwaveRepair">
                            <p>Microwave &amp; Oven Repair</p>
                        </Link>
                        <Link to="/ElectronicRepair/tvRepair">
                            <p>TV Repair &amp; Installation</p>
                        </Link>
     
                    </div>
                    <div id="cleanModal" style={{display:(this.state.activeModal === "cleanModal")? ("block") : ("none")}}>
                        <Link to="/Cleaning/bathroomCleaning">
                            <p>Bathroom Deep Cleaning</p>
                        </Link>
                        <Link to="/Cleaning/sofaCleaning">
                            <p>Sofa Cleaning</p>
                        </Link>
                        <Link to="/Cleaning/kitchenCleaning">
                            <p>Kitchen Deep Cleaning</p>
                        </Link>
                    </div>
                    <div id="massageModal" style={{display:(this.state.activeModal === "massageModal")? ("block") : ("none")}}>
                        <Link to="/Massage/bodyMassage">
                        <p>Massaage</p>
                        </Link>
                    </div>
                    <div id="epcModal" style={{display:(this.state.activeModal === "epcModal")? ("block") : ("none")}}>
                        <Link to="/Homeservice/electrician">
                            <p>Electrician</p>
                        </Link>
                        <Link to="/Homeservice/plumber">
                            <p>Plumber</p>
                        </Link>
                        <Link to="/Homeservice/carpenter">
                            <p>Carpenter</p>
                        </Link>
                    </div>
                    <div id="fitnessModal" style={{display:(this.state.activeModal === "fitnessModal")? ("block") : ("none")}}>
                        <p>Yoga Trainer</p>
                        <p>Fitness Trainer</p>
                        <p>Nutrition Expert</p>
                    </div>
                  </div>
              </div>
          </div>
        </Modal>
        </div>

        
        )
    }
}

export default ServiceBarComponet;