import React, { Component } from 'react'
import {
    Modal,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Button,
    Nav
} from "reactstrap";
import axios from 'axios';

export default class LogModal extends Component {

    constructor(props){
      super(props);

      this.state = {
        defaultModal: false,
        service : '',
        city: '',
        email: '',
        name: '',
        password: ''
      };
    }

  
    toggleModal = state => {
        this.setState({
          [state]: !this.state[state]
        });
      };

    handleOnChange = e =>{
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    handleSubmit = e =>{
      e.preventDefault();

      

      const user = {
        email: this.state.email,
        name: this.state.name,
        password: this.state.password
      };

      axios.post('http://localhost:5000/users/add',
      {
        email: this.state.email,
        name: this.state.name,
        password: this.state.password
      },{
        "headers": {
          'Content-Type': 'application/json',
        }
      })
        .then(res=>{
          console.log(res.data);
          
        })
        .catch(err=>console.log(err));

      console.log(user);

      this.setState({
        defaultModal: false,
        service : '',
        city: '',
        email: '',
        name: '',
        password: ''
      })

      window.location = '/';
      
    }

    render() {
    
        return (
            <div>
            <Nav className="ml-lg-auto" navbar>
                <Button color="white" outline 
                        type="button"
                        size="sm" 
                        onClick={() => this.toggleModal("loginSignUpModal")}>
                        Login / Sign Up
                </Button>
             </Nav>
            <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={this.state.loginSignUpModal}
              toggle={() => this.toggleModal("loginSignUpModal")}
            >
              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-transparent pb-5">
                    <div className="text-muted text-center mt-2 mb-3">
                      Login with
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
                            src={require("../assets/img/icons/common/google.svg")}
                          />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Or login with credentials</small>
                    </div>
                    <Form role="form">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="email" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Password" type="password" />
                        </InputGroup>
                      </FormGroup>
                      
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="default"
                          type="button"
                        >
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3 row">
                      <div className="col-6">

                        <a
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        className ="text-default"
                        >
                        <small>Forgot Password?</small> 
                        </a>

                      </div>

                      <div className="text-right col-6">

                        <a
                        href="#pablo"
                        onClick={() => this.toggleModal("signUpModal")}
                       
                        >
                        <small>Create New Account</small>
                        </a>

                      </div>

                    </div>
                   
                  </CardBody>
                </Card>
              </div>
            </Modal>

            <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={this.state.signUpModal}
              toggle={() => {this.toggleModal("signUpModal");
              this.toggleModal("loginSignUpModal");
              }}
            >
              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-transparent pb-5">
                    <div className="text-muted text-center mt-2 mb-3">
                      Sign Up with
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
                            src={require("../assets/img/icons/common/google.svg")}
                          />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Or sign up with credentials</small>
                    </div>
                    <Form role="form">
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-circle-08" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Name" type="text" name="name" onChange={this.handleOnChange} required value={this.state.name}/>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="email" name="email" onChange={this.handleOnChange} required value={this.state.email}/>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Password" type="password" name="password" onChange={this.handleOnChange} required value={this.state.password}/>
                        </InputGroup>
                      </FormGroup>

                      <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="customCheckRegister"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheckRegister"
                          >
                            <span>
                              I agree with the{" "}
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Privacy Policy
                              </a>
                            </span>
                          </label>
                        </div>
                      
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="default"
                          type="button"
                          onClick={this.handleSubmit}
                        >
                          Create Account
                        </Button>
                      </div>
                    </Form>
                   
                  </CardBody>
                </Card>
              </div>
            </Modal>
            </div>

        )
    }
}
