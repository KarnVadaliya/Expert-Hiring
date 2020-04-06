import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../assets/scss/argon-design-system-react.scss";
import LogModal from './LogModal';

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
    Col
  } from "reactstrap";


class NavbarComponent extends Component {

    render(){
        return(
          
            <Navbar
          className="navbar-horizontal navbar-dark bg-dark mt-4"
          expand="lg"
            >
          <Container>
          <Link to="/" style={{color:"white"}}>
            <NavbarBrand>
             BRAND NAME
            </NavbarBrand>
          </Link>
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
                            <Link to="/about">
                            <DropdownItem
                              // onClick={e => e.preventDefault()}
                            >
                              About Us
                            </DropdownItem>
                            </Link>
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
            
              
              <LogModal/>
            
            </UncontrolledCollapse>
          </Container>
        </Navbar>

         
           
        )
    }

    
}







export default NavbarComponent;