import React, { Component } from 'react';
import { Link } from "react-router-dom";



class ServiceBarComponet extends Component{
    render(){
        return(
        <div>
            <ul className="serviceBar">
                <li className="serviceItem">
                    <span >
                        <img alt="salon" src={require("../assets/img/services/salon.png")} style={{width:"100px",height:"100px"}}/>
                    </span>
                </li>
                <li className="serviceItem">
                    <span >
                        <img alt="salon" src={require("../assets/img/services/salon.png")} style={{width:"100px",height:"100px"}}/>
                    </span>
                </li>
                <li className="serviceItem">
                    <span >
                        <img alt="salon" src={require("../assets/img/services/salon.png")} style={{width:"100px",height:"100px"}}/>
                    </span>
                </li>
            </ul>
        </div>
        )
    }
}

export default ServiceBarComponet;