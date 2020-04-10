import React, { Component } from 'react';

class ServiceBarComponet extends Component{
    render(){
        return(
        <div>
            <ul className="serviceBar">
                <li className="serviceItem">
                    <span >
                        <img alt="salon" src={require("../assets/img/services/hair-dryer.png")} style={{width:"85px",height:"85px"}}/>
                    </span>
                    <h6>Salon at Home</h6>
                </li>
                <li className="serviceItem">
                    <span >
                        <img alt="appliance-electronic repair" src={require("../assets/img/services/air-conditioner.png")} style={{width:"85px",height:"85px"}}/>
                    </span>
                    <h6>Appliances &amp;<br></br>Electronic Repairs</h6>
                </li>
                <li className="serviceItem">
                    <span >
                        <img alt="salon" src={require("../assets/img/services/clean.png")} style={{width:"85px",height:"85px"}}/>
                    </span>
                    <h6>Cleaning</h6>
                </li>
                <li className="serviceItem">
                    <span >
                        <img alt="salon" src={require("../assets/img/services/spa.png")} style={{width:"85px",height:"85px"}}/>
                    </span>
                    <h6>Massage at Home</h6>
                </li>
                <li className="serviceItem">
                    <span >
                        <img alt="salon" src={require("../assets/img/services/repair.png")} style={{width:"85px",height:"85px"}}/>
                    </span>
                    <h6>Electrician, Plumber <br></br> &amp; Carpenter</h6>
                </li>
                <li className="serviceItem">
                    <span >
                        <img alt="salon" src={require("../assets/img/services/yoga-mat.png")} style={{width:"85px",height:"85px"}}/>
                    </span>
                    <h6>Yoga &amp; Fitness</h6>
                </li>
            </ul>
        </div>
        )
    }
}

export default ServiceBarComponet;