import React, { Component } from 'react';
import '../index.css'
import  Axios, * as others  from "axios";


import {
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
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
            emailSent: null
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

            Axios.post('http://localhost:3030/', this.state)
            
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
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
        document.getElementById("myForm").reset();
    }



    render() {
        
        return (
            <section className = "my-5">
                <div className= "container">
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
                                     frameborder: '0'
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
                                                    value={this.state.email}
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
                                                    value={this.state.fullName}
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
                                                    value={this.state.phone}
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
                                                    value={this.state.message}
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

                                    {/* <Button
                                        aria-pressed={true}
                                        className="active"
                                        color="secondary"
                                        href="#pablo"
                                        onClick={this.resetForm}
                                        role="button"
                                        size="lg">
                                    <i class="fa fa-undo"></i>
                                    &nbsp;Reset
                                    </Button> */}
                                </Form>
                                {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

            
            
        )
    }
}
