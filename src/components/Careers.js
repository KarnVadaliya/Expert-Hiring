import React, {Component} from "react";
import axios, { post } from 'axios';
import '../Careers.css';


import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal
} from "reactstrap";

const errorStyle = {
    color:"red",
    fontSize: "small",
    paddingTop: "10px",
    marginBottom: "20px",
    fontWeight: "bold"
}

export default class Careers extends Component {
    constructor(props) {
        super(props);
        this.state ={
            defaultModal: false,
            phone:"",
            name: "",
            email: "",
            skills: "",
            position: "",
            location: "",
            regExName : /^[a-z ,.'-]+$/i,
            regExEmail : /([\w\.]+)@([\w\.]+)\.(\w+)/,
            regExPhone: /^[2-9]\d{2}-\d{3}-\d{4}$/,
            nameError: "",
            emailError: "",
            phoneError: ""
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
      }
    
    toggleModal = (state, JobPosition, Location) => {
        this.setState({
        [state]: !this.state[state],
        location: Location,
        position: JobPosition
        }); 
    };


    onFormSubmit  = e => {
        e.preventDefault(); 
        this.resetForm();

        axios.post('http://localhost:5000/application/add/',
        {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            skills: this.state.skills,
            location: this.state.location,
            position: this.state.position
        },{
            "headers": {
              'Content-Type': 'application/json',
            }
          })
          .then(res=>{
              console.log(res);                
          }) 
          .catch(err=>console.log(err));


          axios.post('http://localhost:5000/users/sendApp', 
            this.state,
            {
                "headers": {
                  'Content-Type': 'application/json',
                }
              })
            .then(res => {
              console.log(res);
                
            })
            .catch(err => {
                console.log(err);
            })
    }

    

    resetForm = () => { 
     document.getElementById("form").reset();
    }

    handleOnChangeName = e =>{
      this.setState({
          [e.target.name]: e.target.value
      })
    }
    handleNameError = (e) =>{
        if(!this.state.name.match(this.state.regExName)){
            this.setState({
                [e.target.name]: "",
                nameError: "Invalid input for your name."
            })
        }else{
            this.setState({
                nameError: ""
            })
        }
    }
    handleOnChangeEmail = e =>{
      this.setState({
          [e.target.name]: e.target.value
      })
    }
    handleEmailError = (e) => {
        if(!this.state.email.match(this.state.regExEmail)){
            this.setState({
                [e.target.name]: "",
                emailError: "Invalid input for your email id."
            })
        }else{
            this.setState({
                emailError: ""
            })
        }
    }

    handleOnChangePhone = e =>{
      this.setState({
          [e.target.name]: e.target.value
      })
    }
    handlePhoneError = (e) =>{
        if(!this.state.phone.match(this.state.regExPhone)){
            this.setState({
                [e.target.name]: "",
                phoneError: "Invalid input for your phonr."
            })
        }else{
            this.setState({
                phoneError: ""
            })
        }
    }

    handleOnChangeSkills = e =>{
      this.setState({
          [e.target.name]: e.target.value
      })
    }

  render() {
    return (
      <div style={{marginTop:"-25px"}}>
      <div className = "image_container">
      <img className = "fixed_img" src= {require("../assets/img/careers/banner.jpg")} />
      <h1 className= "text-center" style={{marginTop:"25px"}}><strong> Drive Your Career.</strong></h1>
      <p className= "text-center"><strong>Legion's track record of talented professionals working together startes early last century and we've built our leading global success on collaborative talents dedicated to being the best team in the business. Explore below to learn what motivates greatness.</strong></p>
      </div>
      <br></br>
      
      

      <section className="bg-light-gray why-bn">
      <br></br>
      <h1 className= "text-center"><strong> Why Legion</strong></h1>
      <br></br>
      <br></br>
      <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
					<div className="why-categories margin-left">
						<div className="space60 hidden-xs"></div>
						<div classNameName="why-icon">
							<img src={require("../assets/img/careers/competitive_salary.png")} alt="Competitive Salary &amp; Incentives" />
						</div>
						<h4>Competitive Salary &amp; Incentives</h4>
						<p><strong>Because we're all about the perks! Join us to know more.</strong></p>
					</div>
					
					<div className="why-categories">
						<div className="space20 hidden-xs"></div>
						<div className="why-icon">
							<img src={require("../assets/img/careers/unlimited_growth_opportunities.png")}  alt="Unlimited Growth Opportunities" />
						</div>
						<h4>Unlimited Growth Opportunities</h4>
						<p><strong>Whether you're a root or a shoot, your growth is important to us</strong></p>
					</div>
					
					<div className="why-categories margin-left">
						<div className="space20 hidden-xs"></div>
						<div className="why-icon">
							<img src= {require("../assets/img/careers/amazing_hackathons.png")} alt="Amazing Hackathons" />
						</div>
						<h4>Amazing Hackathons</h4>
						<p><strong>Solve world peace or plot world dominion, within Legion of course</strong></p>
					</div>
                </div>
				<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                    <div className="why-categories">
						<div className="why-icon">
							<img src= {require("../assets/img/careers/young_and_passionate_team.png" )} alt="Young &amp; Passionate Team" />
						</div>
						<h4>Young &amp; Passionate Team</h4>
						<p><strong>Bunch of dreamers &amp; realists changing the world, one happy customer at a time</strong></p>
					</div>
					<div className="why-categories ">
                    <div className="why-icon">
							<img src= {require("../assets/img/careers/why_bg.png" )} alt="Young &amp; Passionate Team" />
						</div>
					</div>
					<div className="why-categories">
						<div className="why-icon">
							<img src= {require("../assets/img/careers/fun_in_the_office.png" )} alt="Hustle your way forward" />
						</div>
						<h4>Hustle your way forward</h4>
						<p><strong>When dreaming big, ain’t no way but to do things fast</strong></p>
					</div>
                </div>
				<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                    <div className="why-categories margin-right2">
						<div className="space60 hidden-xs"></div>
						<div className="why-icon">
							<img src= {require("../assets/img/careers/rocking_medical_policy.png" )} alt="A Rocking Medical Policy" />
						</div>
						<h4>The Most Rocking Medical Policy</h4>
						<p><strong>Cuts, wounds &amp; bruises or something more serious, we cover them all!</strong></p>
					</div>
					<div className="why-categories">
						<div className="space20 hidden-xs"></div>
						<div className="why-icon">
							<img src= {require("../assets/img/careers/free_shuttle_service.png" )} alt="Free Shuttle Service" />
						</div>
						<h4>Enjoy the Free Shuttle Service</h4>
						<p><strong>We pick you up from a common pickup location to our office</strong></p>
					</div>
					<div className="why-categories margin-right2">
						<div className="space20 hidden-xs"></div>
						<div className="why-icon">
							<img src= {require("../assets/img/careers/lunch_and_dinner_on_the_house.png" )} alt="Lunch &amp; Dinner on the House" />
						</div>
						<h4>Lunch &amp; Dinner on the House</h4>
						<p><strong>Enjoy yummy food that is bound to leave you re-energized</strong></p>
					</div>
                </div>
				<div className="clearfix"></div>    
            </div>
            <br></br>
             <br></br>
		</div>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <h1 className= "text-center"><strong> Open Positions</strong></h1>
        <section className = "my-3" >
            <div className= "container" style={{marginBottom:"100px"}}> 
                <div className = "well well-sm">
                    <div className = "row">
                        <div className = "col-md-4">
                            <div id="box">
                                <div id="imgbox">
                                <img src= {require("../assets/img/careers/jobs.jpg")} />
                                </div>
                                <div id="careerDetails">
                                    <div id="content" onClick={() => this.toggleModal("formModal", "Admin Assistant", "Boston")}>
                                        <h3>Admin Assistant</h3>
                                        <p><strong>Legion</strong></p>
                                        <p><strong>Boston, MA, USA </strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4">
                            <div id="box">
                                <div id="imgbox">
                                <img src= {require("../assets/img/careers/jobs.jpg")} />
                                </div>
                                <div id="careerDetails">
                                    <div id="content" onClick={() => this.toggleModal("formModal", "Brand & PR Manager", "Ahmedabad")}>
                                        <h3>Brand & PR Manager</h3>
                                        <p><strong>Legion</strong></p>
                                        <p><strong>Ahemdabad, India </strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4">
                            <div id="box">
                                <div id="imgbox">
                                <img src= {require("../assets/img/careers/jobs.jpg")} />
                                </div>
                                <div id="careerDetails">
                                    <div id="content" onClick={() => this.toggleModal("formModal", "Business Analyst", "New York")}>
                                        <h3>Business Analyst</h3>
                                        <p><strong>Legion</strong></p>
                                        <p><strong>New York, USA </strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4">
                            <div id="box">
                                <div id="imgbox">
                                <img src= {require("../assets/img/careers/jobs.jpg")} />
                                </div>
                                <div id="careerDetails">
                                    <div id="content" onClick={() => this.toggleModal("formModal", "Product Engineer", "Sydney")}>
                                        <h3>Product Engineer</h3>
                                        <p><strong>Legion</strong></p>
                                        <p><strong>Sydney, AUS </strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4">
                            <div id="box">
                                <div id="imgbox">
                                <img src= {require("../assets/img/careers/jobs.jpg")} />
                                </div>
                                <div id="careerDetails">
                                    <div id="content" onClick={() => this.toggleModal("formModal", "Human Resource", "Lucknow")}>
                                        <h3>Human Resource</h3>
                                        <p><strong>Legion</strong></p>
                                        <p><strong>Lucknow, India </strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4">
                            <div id="box">
                                <div id="imgbox">
                                <img src= {require("../assets/img/careers/jobs.jpg")} />
                                </div>
                                <div id="careerDetails">
                                    <div id="content" onClick={() => this.toggleModal("formModal", "Customer Experience", "Dubai")}>
                                        <h3>Customer Experience</h3>
                                        <p><strong>Legion</strong></p>
                                        <p><strong>Dubai </strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4">
                            <div id="box">
                                <div id="imgbox">
                                <img src= {require("../assets/img/careers/jobs.jpg")} />
                                </div>
                                <div id="careerDetails">
                                    <div id="content" onClick={() => this.toggleModal("formModal", "Finance Analyst", "San Francisco")}>
                                        <h3>Finance Analyst</h3>
                                        <p><strong>Legion</strong></p>
                                        <p><strong>San Francisco </strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4">
                            <div id="box">
                                <div id="imgbox">
                                <img src= {require("../assets/img/careers/jobs.jpg")} />
                                </div>
                                <div id="careerDetails">
                                    <div id="content" onClick={() => this.toggleModal("formModal", "Product Design", "Portland")}>
                                        <h3>Product Design</h3>
                                        <p><strong>Legion</strong></p>
                                        <p><strong>Portland, Maine </strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-4">
                            <div id="box">
                                <div id="imgbox">
                                <img src= {require("../assets/img/careers/jobs.jpg")} />
                                </div>
                                <div id="careerDetails">
                                    <div id="content" onClick={() => this.toggleModal("formModal", "Software Engineer", "Seattle")}>
                                        <h3>Software Engineer</h3>
                                        <p><strong>Legion</strong></p>
                                        <p><strong>Seattle, WA, US </strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
            
            <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={this.state.formModal}
              toggle={() => this.toggleModal("formModal")}
            >
              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-transparent pb-4">
                    <div className=" text-center mt-2 mb-3">
                      <strong>Send us your details and we will get back to you</strong>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-3">
                    <Form id="form">
                    <FormGroup className="mb-4">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-circle-08" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Full Name" name= "name" type="text" required onBlur={this.handleNameError} onChange={this.handleOnChangeName}  autoComplete="off"/>
                        </InputGroup>
                        <div style={errorStyle}>{this.state.nameError}</div>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" name= "email" type="text" required onBlur={this.handleEmailError} onChange={this.handleOnChangeEmail} autoComplete="off"/>
                        </InputGroup>
                        <div style={errorStyle}>{this.state.emailError}</div>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-mobile-button" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="xxx-xxx-xxxx" name= "phone" type="text" required onBlur={this.handleEmailError} onChange={this.handleOnChangeEmail} autoComplete="off"/>
                        </InputGroup>
                        <div style={errorStyle}>{this.state.phoneError}</div>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-map-big" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Skills" name="skills" type="text" onChange={this.handleOnChangeSkills} autoComplete="off"/>
                        </InputGroup>
                      </FormGroup>
                      {/* <h5>Resume</h5>
                      <form action="/upload" method="POST" enctype="multipart/form-data">
                          <input type="file" name="uploadedFile" /> <br /> <br />
                          
                      </form> */}
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="submit"
                          onClick={this.onFormSubmit}
                          // onClick={() => this.toggleModal("defaultModal")}
                        >
                          Apply
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </Modal>
      </div>
    );
  }
}