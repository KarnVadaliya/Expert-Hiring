import React, { Component } from 'react'
import '../AboutUs.css'

export default class AboutUs extends Component {
    render() {
        return (
            <div id="DIV_1">
                <div id="DIV_3">
                  
                    <section id="SECTION_6">
                        <img className="about-us-header-image" src={require("../assets/img/about/yoganew.png")} />
                        <div id="DIV_7">
                          
                            <div id="DIV_9">
                                <h1 id="H1_10">
                                    Helping millions grow better.
									</h1>
                            </div>
                           


                        </div>
                        <div id="DIV_11">
                            <svg viewBox="0 0 500 50" preserveAspectRatio="xMinYMin meet">
                                <path d="M0,50 L0,4 C95,-23 285,115 500,2 L500,50 L0,50 Z" style={{ stroke: "none", fill: "#FFF" }}></path>
                            </svg>
                        </div>
                    </section>
                 
                </div>


                


                <div id="DIV_14">
                    <div id="DIV_15">
                        <div id="DIV_16">
                            <div id="DIV_17">
                                <div id="DIV_18">
                                    <div id="DIV_19">
                                        <div id="DIV_20">
                                            <h2 id="H2_21">
                                                Our Mission
								</h2>
                                            <p id="P_22">
                                                There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why our Mission is to empower millions of service professionals by delivering services at-home in a way that has never been experienced before.
								</p>
                                        </div>
                                        <div id="DIV_23">
                                            <div id="DIV_24">
                                                <img src={require("../assets/img/about/mission.png")} alt="brian halligan and dharmesh shah" id="IMG_25" /><img src="https://www.hubspot.com/hubfs/assets/hubspot.com/about_2019/blobs/Blop-Gray@2x.png" alt="brian halligan signature blob" id="IMG_26" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <div id="DIV_25">
                    <h2 class="OurStory">
                        Our Story
             </h2>
                    <div id="DIV_26">
                        <p>18 cities in India: Ahmedabad, Bangalore, Chennai, Delhi, Chandigarh Tricity, Jaipur, Hyderabad, Kolkata, Mumbai, Pune, Nagpur, Ludhiana, Visakhapatnam, Vadodara, Lucknow, Bhubaneswar, Surat, Indore</p>
                    </div>
                    <div id="DIV_27">
                        <img src={require("../assets/img/about/india.png")} />
                    </div>
                </div>
                <br></br>
                <br></br>


                <div id="DIV_28">
                    <h2>Services we offer</h2>
                </div>

                <div id="DIV_29">
                    <p>
                        We provide a platform that allows skilled and experienced professionals to connect with users looking for specific services. All the professionals, though experienced and skilled, undergo intensive training modules before being allowed to list their services on the platform. Once on the platform, our match-making algorithm identifies professionals who are closest to the users’ requirements and available at the requested time and date.
                </p>
                </div>


                <div id="#DIV_28">
                    <h2>Our Leadership Team</h2>
                </div>

                <div style={{height:"500px"}}>
                <div className="superbox">
                    <div className="box">
                        <img className="person" src={require("../assets/img/about/profile1.jpeg")}></img>
                        <br></br>
                        <p className="leaderName">Deep Gamit<a href="https://www.linkedin.com/in/deepgamit2105/" target="_blank"><img className="linkedin" src={require("../assets/img/about/ic.png")} style={{width:"30px",height:"20px"}} /></a></p>
                        <p>Marketing Head<br></br>Boston, USA.</p>
                        <br></br>
                    </div>
                    <div className="box">
                        <img className="person" src={require("../assets/img/about/profile2.jpeg")}></img>
                        <br></br>
                        <p className="leaderName">Karn Vadaliya<a href="https://www.linkedin.com/in/karn-vadaliya/" target="_blank"><img className="linkedin" src={require("../assets/img/about/ic.png")} style={{width:"30px",height:"20px"}} /></a></p>
                        <p>Operations Head<br></br>Boston, USA.</p>
                        <br></br>
                    </div>
                    <div className="box">
                        <img className="person" src={require("../assets/img/about/profile3.jpeg")}></img>
                        <br></br>
                        <p className="leaderName">Priyam Suthar<a href="https://www.linkedin.com/in/pdsuthar10/" target="_blank"><img className="linkedin" src={require("../assets/img/about/ic.png")} style={{width:"30px",height:"20px"}} /></a></p>
                        <p>Technology Head<br></br>Boston, USA.</p>
                        <br></br>
                    </div>
                    <br></br>
                    <div className="box">
                        <img className="person" src={require("../assets/img/about/profile.jpg")}></img>
                        <br></br>
                        <p className="leaderName">Aishwarya Mane<a href="https://www.linkedin.com/in/aishwaryamane/" target="_blank"><img className="linkedin" src={require("../assets/img/about/ic.png")} style={{width:"30px",height:"20px"}} /></a></p>
                        <p>Sales Head<br></br>Boston, USA.</p>
                        <br></br>
                    </div>
                    <div className="box">
                        <img className="person" src={require("../assets/img/about/profile4.jpeg")}></img>
                        <br></br>
                        <p className="leaderName">Aayush Vijayant<a href="https://www.linkedin.com/in/aayush-vijayant/" target="_blank"><img className="linkedin" src={require("../assets/img/about/ic.png")} style={{width:"30px",height:"20px"}} /></a></p>
                        <p>Human Resource Head<br></br>Boston, USA.</p>
                        <br></br>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
