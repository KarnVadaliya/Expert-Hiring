import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../../assets/vendor/nucleo/css/nucleo.css";
import "../../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../../assets/scss/argon-design-system-react.scss";
import Background from '../../assets/img/serviceBackgrounds/makeupBg.jpg'
import './services.css'
import Scrollspy from 'react-scrollspy'



class Makeup extends Component{
    render(){
        return(
            <div className="sevice" style={{backgroundColor:"#F5F5F5"}}>
                <div className="serviceBg" style={{backgroundImage: `url(${Background})`}}>
                    <h2>Makeup and Styling Service in ****** </h2>
                </div>
                <div className="info">

                <Scrollspy items={ ['How it Works', 'Professionals', 'Customer Reviews'] } currentClassName="is-current">
                             <li><a active href="#Works">How it Works</a></li>
                             <li><a href="#Professionals">Professionals</a></li>
                             <li><a href="#Reviews">Customer Reviews</a></li>
                </Scrollspy>
                    {/* <div className="infoCell">
                        <button><a href="#works">How it Works</a></button>
                    </div>
                    <div className="infoCell">
                    <button><a href="#professionals">Professionals</a></button>
                    </div>
                    <div className="infoCell">
                    <button><a href="#reviews">Customer Reviews</a></button>
                    </div> */}
                </div>
                <br></br>
                <div className="infoDescription">
                <section className="info works" id="Works" >
                    <h4>How it works</h4>
                    <hr></hr>
                    <ul>
                        <li>
                            <div>
                                    <img src={require("../../assets/img/serviceBackgrounds/icon1.png")}></img>
                                    <div className="verticalLine"></div>
                            </div> 
                            <p>&emsp;&emsp;</p>
                            <div>
                                <h5>Choose a Salon Service</h5>
                                <p>Choose from various salon packges and services</p>
                               
                            </div>
                            <hr ></hr>
                        </li>
                        <li>
                            <div>
                                    <img src={require("../../assets/img/serviceBackgrounds/icon3.png")}></img>
                                    <div className="verticalLine"></div>
                            </div>
                            <p>&emsp;&emsp;</p>
                            <div>
                                <h5>Choose your time-slot</h5>
                                <p>We service from 9am - 7pm</p>
                               
                            </div>
                            <hr ></hr>
                        </li>
                        <li>
                            <div>
                                    <img src={require("../../assets/img/serviceBackgrounds/icon4.png")}></img>
                            </div>
                            <p>&emsp;&emsp;</p>
                            <div>
                                <h5>Relax and enjoy salon service</h5>
                                <p>Our professionals will get in touch with you in an hour before the service</p>
                            </div>
                            <hr ></hr>
                        </li>
                    </ul>
                </section>
                <br></br>
                <section className="info professionals" id="Professionals">
                    <h4>Beauticians</h4>
                    <h6>200 Beauty Service Professionals in Boston</h6>
                    <hr></hr>
                    <div className="professionalsDetails">
                        <img src={require("../../assets/img/serviceBackgrounds/random.jpg")}></img>
                        <div style={{marginLeft:"120px"}}>
                            <span className="name">Deepak Lalwani</span>
                            <br></br>
                            <p>Karnavati Club, Ahmedabad, Gujarat, India</p>
                            <span style={{marginTop:"-2px"}} className="rating">&#9733; 5.0 <span style={{marginLeft:"2px", marginRight:"5px",color:"black"}}> (818 ratings) &emsp; &#x25cf; </span>  342 times rated 5 star</span>
                            <br></br>
                            <br></br>
                            <div style={{display:"flex",flexDirection:"row"}}>
                                <div className="initial">K</div>
                                <div className="review" style={{marginLeft:"20px"}}> 
                                    <span className="rname"> Karan </span>
                                    <br></br>
                                    <span className="rating"> &#9733; 5.0 </span>
                                    <p> Wonderful Service</p>
                                    <br></br>
                                </div>
                            </div>
                            <div style={{display:"flex",flexDirection:"row"}}>
                                <div className="initial">D</div>
                                <div className="review" style={{marginLeft:"20px"}}> 
                                <span className="rname"> Deep </span>
                                    <br></br>
                                    <span className="rating"> &#9733; 5.0 </span>
                                    <p> Amazing Service</p>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                        <div style={{textAlign:"center"}}>
                            <button><i className="fa fa-arrow-down"></i>&nbsp;&nbsp;Read more reviews</button>
                        </div>
                        
                    </div>

                    <hr></hr>

                    <div className="professionalsDetails">
                        <img src={require("../../assets/img/serviceBackgrounds/random.jpg")}></img>
                        <div style={{marginLeft:"120px"}}>
                            <span className="name">Deepak Lalwani</span>
                            <br></br>
                            <p>Karnavati Club, Ahmedabad, Gujarat, India</p>
                            <span style={{marginTop:"-2px"}} className="rating">&#9733; 5.0 <span style={{marginLeft:"2px", marginRight:"5px",color:"black"}}> (818 ratings) &emsp; &#x25cf; </span>  342 times rated 5 star</span>
                            <br></br>
                            <br></br>
                            <div style={{display:"flex",flexDirection:"row"}}>
                                <div className="initial">K</div>
                                <div className="review" style={{marginLeft:"20px"}}> 
                                    <span className="rname"> Karan </span>
                                    <br></br>
                                    <span className="rating"> &#9733; 5.0 </span>
                                    <p> Wonderful Service</p>
                                    <br></br>
                                </div>
                            </div>
                            <div style={{display:"flex",flexDirection:"row"}}>
                                <div className="initial">D</div>
                                <div className="review" style={{marginLeft:"20px"}}> 
                                <span className="rname"> Deep </span>
                                    <br></br>
                                    <span className="rating"> &#9733; 5.0 </span>
                                    <p> Amazing Service</p>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                        <div style={{textAlign:"center",padding:"20px"}}>
                            <button><i className="fa fa-arrow-down"></i>&nbsp;&nbsp;Read more reviews</button>
                        </div>
                        
                    </div>
                    <div >
                    </div>
                </section>
                <br></br>
                <section className="info reviews" id="Reviews">
                    <h4>Recent Customer Reviews</h4>
                    <h6>For Beauty Service Professionals in Boston</h6>
                    <div className="crating">
                        <span style={{fontSize:"38px", color:"#5300a5", fontWeight:"650"}}>&#9733; 4.7</span><span style={{fontSize:"20px", color:"#5300a5", fontWeight:"600"}}>/5</span> &nbsp;based on 1000 ratings
                    </div>
                    <hr></hr>
                    <div style={{marginLeft:"30px"}}>
                       <i className="fa fa-quote-left"></i> <br></br> 
                       &emsp; <span style={{fontSize:"20px", marginTop:"-30px"}}> Nice work</span>
                       <br></br>
                       <br></br>
                       <div className="reviewer">                     
                            <div className="initial">K</div>
                            <div className="rname">Karan</div>
                        </div>
                    </div>
                    <br></br>
                    <div style={{marginLeft:"30px"}}>
                       <i className="fa fa-quote-left"></i> <br></br> 
                       &emsp; <span style={{fontSize:"20px", marginTop:"-30px"}}> Nice work</span>
                       <br></br>
                       <br></br>
                       <div className="reviewer">                     
                            <div className="initial">K</div>
                            <div className="rname">Karan</div>
                        </div>
                    </div>
                    <br></br>

                    <div style={{textAlign:"center",padding:"20px"}}>
                        <button><i className="fa fa-arrow-down"></i>&nbsp;&nbsp;View more</button>
                    </div>
                </section>
                </div>
                <div className="serviceBox">
                    <div className="serviceBoxButtons">
                        <h4>Need a Beautician for :</h4>
                        <div className="serviceButtonGroup">
                            <button>Makeup<i className="fa fa-chevron-right"></i></button>
                            <button>Hair-Styling<i className="fa fa-chevron-right"></i></button>
                            <button>Grooming<i className="fa fa-chevron-right"></i></button>
                        </div>
                    </div>
                    <div className="serviceBoxRatings" >
                        <div className="ratings"> 
                            <span style={{fontSize:"26px", color:"#5300a5", fontWeight:"580"}}>&#9733; 4.7</span><span style={{fontSize:"20px", color:"#5300a5", fontWeight:"580"}}>/5</span>
                            <p>based on 1000 ratings</p>
                        </div>
                        
                       <div className="bookings">   
                           <span style={{fontSize:"25px", color:"black", fontWeight:"580"}}>7,483</span>
                           <p>Bookings done in past month</p>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Makeup;