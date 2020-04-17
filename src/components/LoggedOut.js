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
import GoogleBtn from './GoogleBtn';

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
        passwordState: '',
        emailError:'',
        nameError:'',
        passwordError:'',
        loginEmailState:'',
        loginEmailError:'',
        loginPasswordState: '',
        loginPasswordError: ''
      };
    }

   

    toggleModal = state => {
        this.setState({
          [state]: !this.state[state],
          name: '',
          username: '',
          password: '',
          nameState: '',
          emailState: '',
          passwordState: '',
          emailError:'',
          nameError:'',
          passwordError:'',
          loginEmailState:'',
          loginEmailError:'',
          loginPasswordState: '',
          loginPasswordError: ''
        });
      };

      
    handleOnChangeLogin = (e, stateName) => {

      let newState = this.state;

      if(stateName === "email"){

        const regexEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;

        var validateEmail = e.target.value.match(regexEmail);
        

        if (!validateEmail) {
          newState["loginEmailState"] = "invalid";
          newState["loginEmailError"] = "Please enter valid Email Address";
        } else {
          newState["loginEmailState"] = "valid";
        }

      }

      if(stateName === "password"){

        if (newState.password === "") {
          newState["loginPasswordState"] = "invalid";
          newState["loginPasswordError"] = "Password cannot be blank";
        } else {
          newState["loginPasswordState"] = "valid";
        }

      }
      

      const isCheckbox = e.target.type === "checkbox";
      this.setState({
        [e.target.name]: isCheckbox ? e.target.checked : e.target.value
      });

    }

    handleOnChange = (e, stateName) =>{

      let newState = this.state;

      if(stateName === "name"){

        const regexName = /^[A-Za-z][A-Za-z\'\-]+([\A-Za-z][A-Za-z\'\-]+)*/;

        var validateName = e.target.value.match(regexName);

        if (!validateName) {
          newState[stateName + "State"] = "invalid";
          newState[stateName + "Error"] = "Name should have more than 2 Letters";
        } else {
          newState[stateName + "State"] = "valid";
        }

      }


      if(stateName === "email"){

        const regexEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;

        var validateEmail = e.target.value.match(regexEmail);

        

        if (!validateEmail) {
          newState[stateName + "State"] = "invalid";
          newState[stateName + "Error"] = "Please enter valid Email Address";
        } 
        
        else {
          newState[stateName + "State"] = "valid";
        }

       

      }

      if(stateName === "password"){

        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&]{8,}$/;

        var validatePassword = e.target.value.match(regexPassword);

        if (!validatePassword) {
          newState[stateName + "State"] = "invalid";
          newState[stateName + "Error"] = "Password must contain atleast 1 Uppercase Letter, 1 Lowercase Letter, 1 Special Character and 1 Number ";
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

      let newState = this.state;

      if (newState.username === "") {
        newState["loginEmailState"] = "invalid";
        newState["loginEmailError"] = "Email cannot be blank"
      } else {
        newState["loginEmailState"] = "valid";
      }

      if (newState.password === "") {
        newState["loginPasswordState"] = "invalid";
        newState["loginPasswordError"] = "Password cannot be blank";
      }

      this.setState({
        loginPasswordState: newState["loginPasswordState"],
        loginEmailState: newState["loginEmailState"],
        loginEmailError: newState["loginEmailError"],
        loginPasswordError: newState["loginPasswordError"]
      })

      if(newState["loginEmailState"] == "invalid" || newState["loginPasswordState"] == "invalid")
      return;

   

      axios.get('http://localhost:5000/users/findByEmail/'+newState.username)
        .then(res=>{
          if(Object.keys(res.data).length === 0){

            newState["loginEmailState"] = "invalid";
            newState["loginEmailError"] = "User doesnot exists!" 

            this.setState({            
              loginEmailState:  newState["loginEmailState"],
              loginEmailError: newState["loginEmailError"]             
            })
           
          } else {

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
                sessionStorage.setItem('user',JSON.stringify(res.data));
                this.props.setUser(res.data); 
                console.log(this.props)
              })
              .catch(err=>{

                newState["loginPasswordState"] = "invalid";
                newState["loginPasswordError"] = "Password is Incorrect" 

            this.setState({            
              loginPasswordState: newState["loginPasswordState"],
              loginPasswordError: newState["loginPasswordError"]             
            })


              });
      
              console.log(user);

          }  
             
        })
        .catch(err=>console.log(err));

    }


    handleSubmit = e =>{
      e.preventDefault();

      

      const regexName = /^[A-Za-z][A-Za-z\'\-]+([\A-Za-z][A-Za-z\'\-]+)*/;
      var validateName = this.state.name.match(regexName);

      const regexEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;
      var validateEmail = this.state.username.match(regexEmail);

      const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&]{8,}$/;
      var validatePassword = this.state.password.match(regexPassword);

      let newState = this.state;

      if (newState.username === "") {
        newState["emailState"] = "invalid";
        newState["emailError"] = "Email cannot be blank"
      } else if (!validateEmail) {
          newState["emailState"] = "invalid";
          newState["emailError"] = "Please enter valid Email Address"
        } else {
        newState["emailState"] = "valid";
      }

      if (newState.password === "") {
        newState["passwordState"] = "invalid";
        newState["passwordError"] = "Password cannot be blank";
      } else if (!validatePassword) {
        newState["passwordState"] = "invalid";
        newState["passwordError"] = "Password must contain atleast 1 Uppercase Letter, 1 Lowercase Letter, 1 Special Character and 1 Number ";
      } else {
        newState["passwordState"] = "valid";
      }

      if (newState.name === "") {
        newState["nameState"] = "invalid";
        newState["nameError"] = "Name cannot be blank";
      } else if (!validateName) {
        newState["nameState"] = "invalid";
        newState["nameError"] = "Name should have more than 2 Letters";
      } else {
        newState["nameState"] = "valid";
      }

      this.setState({
        nameState: newState["nameState"],
        passwordState:  newState["passwordState"],
        emailState:  newState["emailState"],
        emailError: newState["emailError"],
        nameError: newState["nameError"],
        passwordError: newState["passwordError"]
      })

      if(newState["nameState"] == "invalid" || newState["emailState"] == "invalid" || newState["passwordState"] == "invalid")
      return;


      axios.get('http://localhost:5000/users/findByEmail/'+this.state.username)
        .then(res=>{
          if(Object.keys(res.data).length !== 0){

            
            console.log("User Exists")
            newState["emailState"] = "invalid";
            newState["emailError"] = "User already exists!" 
      
            this.setState({            
              emailState:  newState["emailState"],
              emailError: newState["emailError"]             
            })
      

          } else {
            
            const user = {
              name: this.state.name,
              username: this.state.username,
              password: this.state.password
            };
          
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
              password: '',
              emailError: '',
              passwordError: '',
              nameError: ''
      
            })
      
            this.toggleModal("signUpModal");
            this.toggleModal("loginSignUpModal");
      
          }
             
        })
        .catch(err=>console.log(err));
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
                      <GoogleBtn/>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Or login with credentials</small>
                    </div>
                    <Form role="form">
                      <FormGroup className={classnames(
                          "mb-3",
                          { focused: this.state.focusedEmail },
                          { "has-danger": this.state.loginEmailState === "invalid" },
                          { "has-success": this.state.loginEmailState === "valid" }
                        )}>
                        <InputGroup className={classnames("input-group-merge input-group-alternative", {
                            "is-invalid": this.state.loginEmailState === "invalid"
                          })}>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText >
                            <i className={classnames(
                                  "ni ni-email-83",
                                  { "text-danger": this.state.loginEmailState === "invalid" },
                                  { "text-success": this.state.loginEmailState === "valid" }
                                )}/>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="email" name="username"
                          className={classnames(
                            { "text-danger": this.state.loginEmailState === "invalid" },
                            { "text-success": this.state.loginEmailState === "valid" }
                          )}
                          onFocus={() => this.setState({ focusedEmail: true })}s
                          onBlur={() => this.setState({ focusedEmail: false })}
                          onChange={e => this.handleOnChangeLogin(e, "email")} />
                        </InputGroup>
                        <div className="invalid-feedback">{this.state.loginEmailError}</div>
                      </FormGroup>
                      <FormGroup className={classnames(
                          "mb-3",
                          { focused: this.state.focusedPassword },
                          { "has-danger": this.state.loginPasswordState === "invalid" },
                          { "has-success": this.state.loginPasswordState === "valid" }
                        )}>
                        <InputGroup className={classnames("input-group-merge input-group-alternative", {
                            "is-invalid": this.state.loginPasswordState === "invalid"
                          })}>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className={classnames(
                                  "ni ni-lock-circle-open",
                                  { "text-danger": this.state.loginPasswordState === "invalid" },
                                  { "text-success": this.state.loginPasswordState === "valid" }
                                )} />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Password" type="password" name="password"
                            className={classnames(
                            { "text-danger": this.state.loginPasswordState === "invalid" },
                            { "text-success": this.state.loginPasswordState === "valid" }
                          )}
                          onFocus={() => this.setState({ focusedPassword: true })}
                          onBlur={() => this.setState({ focusedPassword: false })}
                          onChange={e => this.handleOnChangeLogin(e, "password")}
                          />
                        </InputGroup>
                         <div className="invalid-feedback">{this.state.loginPasswordError}</div>
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
                    <GoogleBtn/>
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
                        <div className="invalid-feedback">{this.state.nameError}</div>
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
                                  onFocus={() => this.setState({ focusedEmail: true })}s
                                  onBlur={() => this.setState({ focusedEmail: false })}
                                  onChange={e => this.handleOnChange(e, "email")} 
                                  value={this.state.username} required/>
                        </InputGroup>
                        <div className="invalid-feedback">{this.state.emailError}</div>
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
                        <div className="invalid-feedback">{this.state.passwordError}</div>
                      </FormGroup>

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
