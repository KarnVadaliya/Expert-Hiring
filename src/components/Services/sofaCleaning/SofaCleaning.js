import React, { Component } from 'react';
import "../../../assets/vendor/nucleo/css/nucleo.css";
import "../../../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../../../assets/scss/argon-design-system-react.scss";
import Background from '../../../assets/img/serviceBackgrounds/makeupBg.jpg'
import '../make-up/makeup.css'
import Scrollspy from 'react-scrollspy'
import Axios from 'axios'


class SofaCleaning extends Component{

    state = {
        professionals: [],
        userReviews: [],
        seeMore: false
    }

    componentDidMount(){
        Axios.post('http://localhost:5000/professionals/category',
        {
            category: "Sofa Cleaning"
        },{
            "headers": {
              'Content-Type': 'application/json',
            }
          })
          .then(res=>{
            //   const userReviews = this.sortReviews(res.data);
              const reviews = [];
              res.data.map(professional=>professional.reviews.map(review=>reviews.push(review)));
              this.setState({
                  professionals: res.data,
                  userReviews: reviews
              })
          })
          .catch(err=>{
              console.log(err)
          })
    }

    averageUserRatings = () =>{
        let totalSum = 0;
        this.state.userReviews.map(review => totalSum+=parseFloat(review.starsGiven));
        let average = totalSum/this.state.userReviews.length;
        return average.toFixed(1);
    }

    sortReviews = (userReviews) =>{
        const reviewList = [];
        userReviews.map(review => reviewList.push(review));
        reviewList.sort((a,b)=>new Date(b.date) - new Date(a.date));        
        return reviewList.slice(0,2);
    }

    getElements = (array) => array.slice(0,2);

    seeMoreOnClick = (e) => {
        this.setState({
            seeMore: true
        })
    }

    render(){
        console.log(this.averageUserRatings());
        console.log(this.state);
        const { professionals } = this.state;
        const tempProfessionals = this.state.seeMore ? professionals : professionals.slice(0,2);
        console.log(tempProfessionals);
        const professionalsList = tempProfessionals.length ? (
            tempProfessionals.map(professional => {
                return(
                    <React.Fragment key={professional._id}>
                        <img src={require("../../../assets/img/serviceBackgrounds/random.jpg")}></img>
                        <div style={{marginLeft:"120px"}}>
                            <span>{professional.name}</span><br></br><br></br>
                            <p>{professional.address}</p>
                            <p>&#9733; {professional.ratings} ({professional.numberOfRatings}&nbsp;ratings)  {professional.rated5Stars} rated 5 star</p>
                            <br></br>        
                            {this.getElements(professional.reviews).map(review=>{
                                return(
                                    <div key={review.name} style={{display:"flex",flexDirection:"row"}}>
                                        <div className="initial">{review.name.charAt(0)}</div>
                                        <div style={{marginLeft:"20px"}}> 
                                            <span> {review.name} </span>
                                            <p> <br></br>&#9733; {review.starsGiven} </p>
                                            <p> {review.comments} </p>
                                            <br></br>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </React.Fragment>
                );
            })
        ):(
            <p>Loading...</p>
        );


        const reviewsList = this.state.userReviews.length ? (
            this.sortReviews(this.state.userReviews).map(review=>{
                return(
                    <React.Fragment key={review.date}>
                        <div style={{marginLeft:"30px"}}>
                        <i className="fa fa-quote-left"></i> <p>{review.comment}</p>
                        <div className="reviewer">                     
                                <div className="initial">{review.name.charAt(0)}</div>
                                <div className="rname">{review.name}</div>
                            </div>
                        </div>
                        <br></br>
                    </React.Fragment>
                );
            })
        ):(
            <p>Loading...</p>
        );

        return(
            <div className="service" style={{backgroundColor:"#F5F5F5"}}>
                <div className="serviceBg" style={{backgroundImage: `url(${Background})`}}>
                    <h2>Sofa Cleaning Service in ****** </h2>
                </div>

                <div className="info">
                    <Scrollspy items={ ['How it Works', 'Professionals', 'Customer Reviews'] } currentClassName="is-current">
                                <li><a active href="#Works">How it Works</a></li>
                                <li><a href="#Professionals">Professionals</a></li>
                                <li><a href="#Reviews">Customer Reviews</a></li>
                    </Scrollspy>
                </div>

                <br></br>
                <div className="infoDescription">
                <section className="info works" id="Works" >
                    <h4>How it works</h4>
                    <hr></hr>
                    <ul>
                        <li>
                            <div>
                                    <img src={require("../../../assets/img/serviceBackgrounds/icon1.png")}></img>
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
                                    <img src={require("../../../assets/img/serviceBackgrounds/icon3.png")}></img>
                                    <div className="verticalLine"></div>
                            </div>
                            <p>&emsp;&emsp;</p>
                            <div>
                                <h5>Choose your time-slot</h5>
                                <p>Hello There</p>
                               
                            </div>
                            <hr ></hr>
                        </li>
                        <li>
                            <div>
                                    <img src={require("../../../assets/img/serviceBackgrounds/icon2.png")}></img>
                            </div>
                            <p>&emsp;&emsp;</p>
                            <div>
                                <h5>Pay</h5>
                                <p>Hello There</p>
                            </div>
                            <hr ></hr>
                        </li>
                    </ul>
                </section>
                <br></br>
                <section className="info professionals" id="Professionals">
                    <h4>Cleaning Professionals</h4>
                    <h6>{this.state.professionals.length} cleaning professionals in Ahmedabad</h6>
                    <hr></hr>
                    <div className="professionalsDetails">
                        
                        {professionalsList}
                       
                        { !this.state.seeMore &&
                            <div style={{textAlign:"center",padding:"20px"}}>
                                <button onClick={this.seeMoreOnClick}><i className="fa fa-arrow-down"></i>&nbsp;&nbsp;See more</button>
                            </div>
                        }
                        
                    </div>
                    <div >
                    </div>
                </section>
                <br></br>
                <section className="info reviews" id="Reviews">
                    <h4>Recent Customer Reviews</h4>
                    <h6>For Makeup and Hair stylists in Boston</h6>
                    <p><span style={{fontSize:"30px"}}>&#9733; {this.averageUserRatings()}</span>/5 &nbsp;based on {this.state.userReviews.length} ratings</p>
                    <hr></hr>
                    {reviewsList}                    
                </section>
                </div>
                <div className="serviceBox">
                    <div className="serviceBoxButtons">
                        <h4>Need a Cleaning Professional for :</h4>
                        <div className="serviceButtonGroup">
                         
                            <button onClick={() => this.props.history.push('/cleaning/sofaCleaning/shop/#3SofaSeats')}>
                                3 Sofa Seats <i style={{textAlign:"right"}} className="fa fa-chevron-right" />
                            </button> 
                       
                            <button onClick={() => this.props.history.push('/cleaning/sofaCleaning/shop/#4SofaSeats')}>
                                4 Sofa Seats<i className="fa fa-chevron-right"></i>
                            </button>

                            <button onClick={() => this.props.history.push('/cleaning/sofaCleaning/shop/#5SofaSeats')}>
                                5 Sofa Seats<i className="fa fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="serviceBoxRatings" >
                        <div className="ratings"> 
                            <span style={{fontSize:"26px", color:"#5300a5", fontWeight:"580"}}>&#9733; {this.averageUserRatings()}</span><span style={{fontSize:"20px", color:"#5300a5", fontWeight:"580"}}>/5</span>
                            <p>based on {this.state.userReviews.length} ratings</p>
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
export default SofaCleaning;