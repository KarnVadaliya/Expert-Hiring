import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../assets/scss/argon-design-system-react.scss";
import Background from '../assets/img/serviceBackgrounds/makeupBg.jpg'


class Makeup extends Component{
    render(){
        return(
            <div>
                <div className="serviceBg" style={{backgroundImage: `url(${Background})`}}>
                    <h2 style={{left:"0px"}}> Best Makeup and Styling Service in ****** </h2>
                </div>
                <div className="info">
                    <div className="infoCell">
                        <a href="#works">How it works</a>
                    </div>
                    <div className="infoCell">
                        <a href="#professionals">Professionals</a>
                    </div>
                    <div className="infoCell">
                        <a href="#reviews">Customer Reviews</a>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="info works" id="works" >
                    <h4>How it works</h4>
                    <hr></hr>
                    <ul>
                        <li>
                            <div>
                                    <img src={require("../assets/img/serviceBackgrounds/icon1.png")}></img>
                                    <div className="verticalLine"></div>
                            </div> 
                            <p>&emsp;&emsp;</p>
                            <div>
                                <h5>Hello There</h5>
                                <p>Hello There</p>
                               
                            </div>
                            <hr ></hr>
                        </li>
                        <li>
                            <div>
                                    <img src={require("../assets/img/serviceBackgrounds/icon2.png")}></img>
                                    <div className="verticalLine"></div>
                            </div>
                            <p>&emsp;&emsp;</p>
                            <div>
                                <h5>Hello There</h5>
                                <p>Hello There</p>
                               
                            </div>
                            <hr ></hr>
                        </li>
                        <li>
                            <div>
                                    <img src={require("../assets/img/serviceBackgrounds/icon3.png")}></img>
                            </div>
                            <p>&emsp;&emsp;</p>
                            <div>
                                <h5>Hello There</h5>
                                <p>Hello There</p>
                            </div>
                            <hr ></hr>
                        </li>
                    </ul>
                </div>
                <br></br>
                <div className="info professionals" id="professionals">
                    <h4>Beauticians</h4>
                    <h6>200 makeup artists in boston</h6>
                    <hr></hr>
                    <div className="professionalsDetails">
                        <img src={require("../assets/img/serviceBackgrounds/random.jpg")}></img>
                        <div style={{marginLeft:"120px"}}>
                            <span>Deepak Lalwani</span><br></br>
                            <p>SWAMINARAYAN NAGAR, Hatkeshwar - C.T.M Road, Kailash Nagar, C.T.M, Amraiwadi, Ahmedabad, Gujarat, India</p>
                            <p>&#9733; 5.0 (818 ratings)  342 rated 5 star</p>
                            <br></br>
                            <div style={{display:"flex",flexDirection:"row"}}>
                                <div className="initial">K</div>
                                <div style={{marginLeft:"20px"}}> 
                                    <span> Karan </span>
                                    <p> &#9733; 5.0 </p>
                                    <p> Wonderful Service</p>
                                    <br></br>
                                </div>
                            </div>
                            <div style={{display:"flex",flexDirection:"row"}}>
                                <div className="initial">D</div>
                                <div style={{marginLeft:"20px"}}> 
                                    <span> Deep </span>
                                    <p> &#9733; 5.0 </p>
                                    <p> Amazing Service</p>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                        <div style={{textAlign:"center",padding:"20px"}}>
                            <button><i className="fa fa-arrow-down"></i>&nbsp;&nbsp;See more</button>
                        </div>
                        
                    </div>
                    <div >
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="info reviews" id="reviews">
                    <h4>Recent Customer Reviews</h4>
                    <h6>For Makeup and Hair stylists in Boston</h6>
                    <p><span style={{fontSize:"30px"}}>&#9733; 4.7</span>/5 &nbsp;based on 1000 ratings</p>
                    <hr></hr>
                    <div style={{marginLeft:"30px"}}>
                       <i className="fa fa-quote-left"></i> <p> Nice work</p>
                       <div className="reviewer">                     
                            <div className="initial">K</div>
                            <div className="rname">Karan</div>
                        </div>
                    </div>
                    <br></br>
                    <div style={{marginLeft:"30px"}}>
                       <i className="fa fa-quote-left"></i> <p> Nice work</p>
                       <div className="reviewer">                     
                            <div className="initial">K</div>
                            <div className="rname">Karan</div>
                        </div>
                    </div>
                    <br></br>
                </div>
                <div className="serviceBox">
                    <div className="serviceBoxButtons">
                        <p>Need a Beautician for :</p>
                        <div className="serviceButtonGroup">
                            <button><span>Makeup</span><i className="fa fa-chevron-right"></i></button>
                            <button>Hair-Styling<i className="fa fa-chevron-right"></i></button>
                            <button>Grooming<i className="fa fa-chevron-right"></i></button>
                        </div>
                    </div>
                    <div className="serviceBoxRatings" >
                        <div>
                            <span style={{fontSize:"30px"}}>&#9733; 4.7</span>/5
                            <p>based on 1000 ratings</p>
                        </div>
                        <div>&emsp;</div>
                       <div>
                           <span style={{fontSize:"30px"}}>7483</span>
                           <p>Bookings done in past month</p>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Makeup;