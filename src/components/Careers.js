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
  Modal,
  Alert,
  Row,
  Col
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
            file: null,
            name: "",
            email: "",
            regExName : /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            regExEmail : /([\w\.]+)@([\w\.]+)\.(\w+)/,
            nameError: "",
            emailError: ""
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
      }
    
    toggleModal = state => {
        this.setState({
        [state]: !this.state[state]
        });
    };


    onFormSubmit(e){
        e.preventDefault(); 
        if(this.state.nameError === "" && this.state.emailError === ""){
            this.fileUpload(this.state.file);
            this.resetForm();
        }
        
    }
    

    onChange(e) {

        this.setState({file:e.target.files[0]})

    }


    fileUpload(file){
        const url = 'http://example.com/file-upload';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config)
    }

    resetForm = () => { 
     document.getElementById("form").reset();
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
    handleEmailError = (e) => {
        if(!this.state.email.match(this.state.regExEmail)){
            this.setState({
                email: "",
                emailError: "Invalid input for your email id."
            })
        }else{
            this.setState({
                emailError: ""
            })
        }
    }

  render() {
    return (
      <>
      <div className = "image_container">
      <img className = "fixed_img" alt="banner" src= {require("../assets/img/careers/banner.jpg")} />
      <h1 className= "text-center"><strong> Drive Your Career.</strong></h1>
      <p className= "text-center"><strong>Legion's track record of talented professionals working together startes early last century and we've built our leading global success on collaborative talents dedicated to being the best team in the business. Explore below to learn what motivates greatness.</strong></p>
      </div>
      <br></br>
      <br></br>
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
        <section className = "my-3">
            <div className= "container"> 
                <div className = "well well-sm">
                    <div className = "row">
                        <div className = "col-md-4">
                            <div id="box">
                                <div id="imgbox">
                                <img src= {require("../assets/img/careers/jobs.jpg")} />
                                </div>
                                <div id="careerDetails">
                                    <div id="content" onClick={() => this.toggleModal("formModal")}>
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
                                    <div id="content" onClick={() => this.toggleModal("formModal")}>
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
                                    <div id="content" onClick={() => this.toggleModal("formModal")}>
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
                                    <div id="content" onClick={() => this.toggleModal("formModal")}>
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
                                    <div id="content" onClick={() => this.toggleModal("formModal")}>
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
                                    <div id="content" onClick={() => this.toggleModal("formModal")}>
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
                                    <div id="content" onClick={() => this.toggleModal("formModal")}>
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
                                    <div id="content" onClick={() => this.toggleModal("formModal")}>
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
                                    <div id="content" onClick={() => this.toggleModal("formModal")}>
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
                    <div className="text-muted text-center mt-2 mb-3">
                      <small><strong>Apply with</strong></small>
                    </div>
                    <div className="btn-wrapper text-center">
                      <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <span className="btn-inner--icon">
                          <img
                            alt="..."
                            src={require("../assets/img/careers/linkedin.svg")}
                          />
                        </span>
                        <span className="btn-inner--text">LinkedIn</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-3">
                    <div className="text-center text-muted mb-4">
                      <small><strong>Or fill in the details</strong></small>
                    </div>
                    <Form id="form">
                    <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-circle-08" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Full Name" name= "name" type="text" required onBlur={this.handleNameError} />
                        </InputGroup>
                        <div style={errorStyle}>{this.state.nameError}</div>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" name= "email" type="email" required onBlur={this.handleEmailError}/>
                        </InputGroup>
                        <div style={errorStyle}>{this.state.emailError}</div>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-map-big" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Skills" type="skills" />
                        </InputGroup>
                      </FormGroup>
                      <h5>Resume</h5>
                      <input type="file" onChange={this.onChange} />
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="submit"
                          onClick={this.onFormSubmit}
                          onClick={() => this.toggleModal("defaultModal")}
                        >
                          Apply
                        </Button>
                        {/* <Alert color="success" >
                            <strong>Success!</strong> This is a success alert—check it out!
                        </Alert> */}
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </Modal>
      </>
    );
  }
}