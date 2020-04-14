import React, { Component } from 'react';
import { setUser } from '../actions/setUser';
import { connect } from 'react-redux';
import classnames from "classnames";
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

class LoggedOut extends Component {

    constructor(props){
      super(props);

      this.state = {
        defaultModal: false,
        name: '',
        username: '',
        password: '',
        nameState: '',
        emailState: '',
        passwordState: ''
      };
    }

   

    toggleModal = state => {
        this.setState({
          [state]: !this.state[state]
        });
      };

    

    handleOnChange = (e, stateName) =>{


      let newState = this.state;

      if(stateName === "name"){

        

        const regexName = /^[A-Za-z][A-Za-z\'\-]+([\A-Za-z][A-Za-z\'\-]+)*/;

        var validateName = e.target.value.match(regexName);

        if (!validateName) {
          newState[stateName + "State"] = "invalid";
        } else {
          newState[stateName + "State"] = "valid";
        }

      }


      if(stateName === "email"){

        const regexEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;

        var validateEmail = e.target.value.match(regexEmail);

        if (!validateEmail) {
          newState[stateName + "State"] = "invalid";
        } else {
          newState[stateName + "State"] = "valid";
        }

      }

      if(stateName === "password"){

        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&]{8,}$/;

        var validatePassword = e.target.value.match(regexPassword);

        if (!validatePassword) {
          newState[stateName + "State"] = "invalid";
        } else {
          newState[stateName + "State"] = "valid";
        }

      }
      
      const isCheckbox = e.target.type === "checkbox";
      this.setState({
        [e.target.name]: isCheckbox ? e.target.checked : e.target.value
      });
    }


    handleLoginSubmit = e =>{
      e.preventDefault();
      
      const user = {
        username: this.state.username,
        password: this.state.password
      };

      axios.post('http://localhost:5000/users/login',
      {
        username: this.state.username,
        password: this.state.password
      },{
        "headers": {
          'Content-Type': 'application/json',
        }
      })
        .then(res => {
          // console.log(res.data.name);
          // console.log(JSON.parse(JSON.stringify(res.data)));
          sessionStorage.setItem('user',JSON.stringify(res.data));
          this.props.setUser(res.data); 
        })
        .catch(err=>console.log(err));

        console.log(user);
        
    }


    handleSubmit = e =>{
      e.preventDefault();

      const user = {
        name: this.state.name,
        username: this.state.username,
        password: this.state.password
      };

      let newState = this.state;

      if (newState.username === "") {
        newState["emailState"] = "invalid";
        console.log(newState);
      } else {
        newState["emailState"] = "valid";
      }

      if (newState.password === "") {
        newState["passwordState"] = "invalid";
      } else {
        newState["passwordState"] = "valid";
      }

      if (newState.name === "") {
        newState["nameState"] = "invalid";
      } else {
        newState["emailState"] = "valid";
      }

      

      axios.post('http://localhost:5000/users/add',
      {
        name: this.state.name,
        username: this.state.username,
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
        nameState: '',
        emailState: '',
        passwordState: '',
        username: '',
        name: '',
        password: ''
      })

      this.toggleModal("signUpModal");
      this.toggleModal("loginSignUpModal");

    }


    render() {
    
        return (
            <div className="ml-lg-auto">
            <Nav navbar>
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
                          <Input placeholder="Email" type="email" name="username" onChange={this.handleOnChange} />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Password" type="password" name="password" onChange={this.handleOnChange} />
                        </InputGroup>
                      </FormGroup>
                      
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="default"
                          type="button"
                          onClick={this.handleLoginSubmit}
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
                      <FormGroup className={classnames(
                          "mb-3",
                          { focused: this.state.focusedName },
                          { "has-danger": this.state.nameState === "invalid" },
                          { "has-success": this.state.nameState === "valid" }
                        )}>
                        <InputGroup className={classnames("input-group-merge input-group-alternative", {
                            "is-invalid": this.state.nameState === "invalid"
                          })}>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className={classnames(
                                  "ni ni-circle-08",
                                  { "text-danger": this.state.nameState === "invalid" },
                                  { "text-success": this.state.nameState === "valid" }
                                )}  />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Name" type="text" name="name"
                          className={classnames(
                            { "text-danger": this.state.nameState === "invalid" },
                            { "text-success": this.state.nameState === "valid" }
                          )}
                          onFocus={() => this.setState({ focusedName: true })}
                          onBlur={() => this.setState({ focusedName: false })}
                          onChange={e => this.handleOnChange(e, "name")} 
                          value={this.state.name} required
                          />
                        </InputGroup>
                        <div className="invalid-feedback">Name should have more than 2 Letters</div>
                      </FormGroup>
                      <FormGroup className={classnames(
                          "mb-3",
                          { focused: this.state.focusedEmail },
                          { "has-danger": this.state.emailState === "invalid" },
                          { "has-success": this.state.emailState === "valid" }
                        )}>
                        <InputGroup className={classnames("input-group-merge input-group-alternative", {
                            "is-invalid": this.state.emailState === "invalid"
                          })}>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className={classnames(
                                  "ni ni-email-83",
                                  { "text-danger": this.state.emailState === "invalid" },
                                  { "text-success": this.state.emailState === "valid" }
                                )} />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="email" name="username"
                                  className={classnames(
                                    { "text-danger": this.state.emailState === "invalid" },
                                    { "text-success": this.state.emailState === "valid" }
                                  )}
                                  onFocus={() => this.setState({ focusedEmail: true })}
                                  onBlur={() => this.setState({ focusedEmail: false })}
                                  onChange={e => this.handleOnChange(e, "email")} 
                                  value={this.state.username} required/>
                        </InputGroup>
                        <div className="invalid-feedback">Please enter Valid Email Address</div>
                      </FormGroup>
                      <FormGroup className={classnames(
                          "mb-3",
                          { focused: this.state.focusedPassword },
                          { "has-danger": this.state.passwordState === "invalid" },
                          { "has-success": this.state.passwordState === "valid" }
                        )}>
                        <InputGroup className={classnames("input-group-merge input-group-alternative", {
                            "is-invalid": this.state.passwordState === "invalid"
                          })}>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className={classnames(
                                  "ni ni-lock-circle-open",
                                  { "text-danger": this.state.passwordState === "invalid" },
                                  { "text-success": this.state.passwordState === "valid" }
                                )} />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Password" type="password" name="password" 
                                   className={classnames(
                                    { "text-danger": this.state.passwordState === "invalid" },
                                    { "text-success": this.state.passwordState === "valid" }
                                  )}
                                  onFocus={() => this.setState({ focusedPassword: true })}
                                  onBlur={() => this.setState({ focusedPassword: false })}
                                  onChange={e => this.handleOnChange(e, "password")} 
                                  required value={this.state.password}/>
                        </InputGroup>
                        <div className="invalid-feedback">Password must contain atleast <br/> 1 Uppercase Letter, 1 Lowercase Letter, 1 Special Character and 1 Number </div>
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

                    <div className="mt-3" style={{textAlign:"center"}}>
                      <div>

                        <small>Already a Member? </small> 
                        <a
                        href="#pablo"
                        onClick={() => this.toggleModal("signUpModal")}
                        className ="text-default"
                        >
                        <small> Login Here!</small> 
                        </a>

                      </div>

                    </div>
                   
                  </CardBody>
                </Card>
              </div>
            </Modal>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    userState: state.userState
});

export default connect(mapStateToProps,{ setUser })(LoggedOut);
