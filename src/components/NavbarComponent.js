import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../assets/scss/argon-design-system-react.scss";

import {
    UncontrolledCollapse,
    Button,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col, 
    Modal,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup
  } from "reactstrap";


class NavbarComponent extends Component {


    state = {
      defaultModal: false
    };

    toggleModal = state => {
      this.setState({
        [state]: !this.state[state]
      });
    };

    render(){
        return(
          
            <Navbar
          className="navbar-horizontal navbar-dark bg-dark mt-4"
          expand="lg"
            >
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
             BRAND NAME
            </NavbarBrand>
            <button
              aria-controls="navbar-primary"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-primary"
              data-toggle="collapse"
              id="navbar-primary"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-primary">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    
                      <img
                        alt="..."
                        src={require("../assets/img/brand/blue.png")}
                      />
                    
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-primary"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-primary"
                      data-toggle="collapse"
                      id="navbar-primary"
                      type="button"
                      color="white"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-lg" navbar>
                
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav>Menu</DropdownToggle>
                        <DropdownMenu
                            aria-labelledby="nav-inner-primary_dropdown_1"
                            left
                          >
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              About Us
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Contact Us
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Careers
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Become A Professional
                  </NavLink>
                </NavItem>
                
              </Nav>
            
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
              toggle={() => this.toggleModal("signUpModal")}
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
                          <Input placeholder="Name" type="text" />
                        </InputGroup>
                      </FormGroup>
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
                        >
                          Create Account
                        </Button>
                      </div>
                    </Form>
                   
                  </CardBody>
                </Card>
              </div>
            </Modal>
            </UncontrolledCollapse>
          </Container>
        </Navbar>


         
           
        )
    }

    
}







export default NavbarComponent;