import React, { Component } from 'react';
import '../index.css'
import '../Careers.css';
import  Axios  from "axios";


import {
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    Button,
    UncontrolledCarousel
  } from "reactstrap";


  const items = [
    {
      src: require("../assets/img/contact/picture1.jpg"),
      altText: '',
      caption: '',
      header: ''
    },
    {
      src: require("../assets/img/contact/picture2.jpg"),
      altText: '',
      caption: '',
      header: ''
    }
  ];

  

export default class ContactUs extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            fullName: '',
            phone: '',
            message: '',
            disabled: false,
            regExEmail : /^[^@]+@[^\.]+\..+$/,
            regExPhone : /^\d{10}$/,
            emailSent: null
        }
      }
    

      handleEmailError = e =>{
        if(!this.state.email.match(this.state.regExEmail)){
            this.setState({
                email:""
            })
        }
      }

      handlePhoneError = e =>{
        if(!this.state.phone.match(this.state.regExPhone)){
            this.setState({
              phone:""
            })
        }
      }



    handleOnChangeEmail = e =>{
        this.setState({
            email: e.target.value
        })
    }
    handleOnChangeName = e =>{
        this.setState({
            fullName: e.target.value
        })
    }
    handleOnChangePhone = e =>{
        this.setState({
            phone: e.target.value
        })
    }
    handleOnChangeComments= e =>{
        this.setState({
            message: e.target.value
        })
    }

    handleOnSubmit = e =>{
        e.preventDefault();
        // console.log(this.state);
        console.log(e.target);

        this.setState({
            disabled: true
        });

            Axios.post('http://localhost:5000/users/sendQuery', 
            this.state,
            {
                "headers": {
                  'Content-Type': 'application/json',
                }
              })
            .then(res => {
                this.setState({
                    disabled: false,
                    emailSent: true
                });
                
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })


            

            this.resetForm();
     }   

    resetForm = () => {
        this.setState({
            email: '',
            fullName: '',
            phone: '',
            message: ''
        })
    }



    render() {
        
        return (
            <section className = "my-5">
                <div className= "container" style={{marginTop:"-25px"}}>
                <UncontrolledCarousel items={items} />
                <br></br>
                    <div className = "well well-sm">
                        <h3><strong> </strong></h3>
                        <div className = "row">
                            <div className = "col-md-8">
                                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=11EooEpb5v7KrkAhDql4_ubHPeROiAkgO"  
                                    style = {{
                                     border: '0',
                                     width: '100%',
                                     height: '370px',
                                     frameborder: '0',
                                }}  allowFullScreen></iframe>
                            </div>
                            <div className = "col-md-4">
                                <h4> <strong> Write Us Your Query</strong></h4>
                                <Form id="myForm" onSubmit={this.handleOnSubmit}>

                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <Input
                                                    id="exampleFormControlInput1"
                                                    placeholder="name@example.com"
                                                    type="email"
                                                    required
                                                    value={this.state.email}
                                                    onFocus={()=>{
                                                        this.setState({
                                                            emailSent: null
                                                        })
                                                    }}
                                                    onBlur={this.handleEmailError}
                                                    onChange={this.handleOnChangeEmail}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <Input  
                                                    placeholder="Full Name" 
                                                    type="text" 
                                                    required
                                                    value={this.state.fullName}
                                                    onFocus={()=>{
                                                        this.setState({
                                                            emailSent: null
                                                        })
                                                    }}
                                                    onChange={this.handleOnChangeName}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
          
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <Input  
                                                    placeholder="Phone" 
                                                    type="text" 
                                                    required
                                                    value={this.state.phone}
                                                    onFocus={()=>{
                                                        this.setState({
                                                            emailSent: null
                                                        })
                                                    }}
                                                    onBlur={this.handlePhoneError}
                                                    onChange={this.handleOnChangePhone}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <Input
                                                    id="exampleFormControlTextarea1"
                                                    placeholder="Write your message here ..."
                                                    rows="3"
                                                    type="textarea"
                                                    required
                                                    value={this.state.message}
                                                    onFocus={()=>{
                                                        this.setState({
                                                            emailSent: null
                                                        })
                                                    }}
                                                    onChange={this.handleOnChangeComments}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
          
                                    <Button
                                        aria-pressed={true}
                                        className="d-inline-block"
                                        color="primary"
                                        // href="#pablo"
                                        type = "submit"
                                        role="button"
                                        size="md"
                                        disabled = {this.state.disabled}
                                        >
                                        <i className = "fa fa-paper-plane-o" aria-hidden = "true"></i>
                                        &nbsp;Send Request
                                    </Button>
                                </Form>
                                {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <h1 className= "text-center"><strong> Our Main Offices</strong></h1>
            <div className= "container" style={{marginBottom:"100px"}}> 
                <div className = "well well-sm">
                    <div className = "row">
                        <div className = "col-md-4">
                            <div id="box">
                                <div id="imgbox">
                                <img src= {require("../assets/img/careers/jobs.jpg")} />
                                </div>
                                <div id="careerDetails">
                                    <div id="content">
                                        <h3>Ahemdabad, India</h3>
                                        <p><strong>401, Indraprastha Business Park, Ahmedabad, Gujarat, India 380051</strong></p>
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
                                    <div id="content">
                                        <h3>Boston, US</h3>
                                        <p><strong>123, Northampton Street, Boston, MA, United States  02115</strong></p>
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
                                    <div id="content">
                                        <h3>New York, US</h3>
                                        <p><strong>C-32 A Cipet Road, Industrial Estate, SIDCO Industrial Estate, New York, United States </strong></p>
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
                                    <div id="content" >
                                        <h3>New Jersey, US</h3>
                                        <p><strong>Plot No:- 66, Phase-2, Industrial Area, New Jersey, United States </strong></p>
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
                                    <div id="content" >
                                        <h3>San Francisco, US</h3>
                                        <p><strong>Trendz Enclave, First Floor, Plot No. 44, San Francisco, United States </strong></p>
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
                                    <div id="content">
                                        <h3>Mumbai, India</h3>
                                        <p><strong>Unit - 1101 & 1102, Godrej Coliseum, Sion (East), Mumbai, India 400022 </strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
            

            
            
        )
    }
}
