import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../assets/scss/argon-design-system-react.scss";
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';
import { connect } from 'react-redux';

import {
    UncontrolledCollapse,
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

            const user = this.props.userState.User;

            let display = <LoggedOut/>;

             if (user.username != null) {
              display = <LoggedIn user={this.props.userState.User}/>;
            } else {
              display = <LoggedOut/>;
            }



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
                            <DropdownItem>
                              About Us
                            </DropdownItem>
                            </Link>
                            <Link to="/contact">
                            <DropdownItem>
                              Contact Us
                            </DropdownItem>
                            </Link>
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
            
              {display}
             
            
            </UncontrolledCollapse>
          </Container>
        </Navbar>

         
           
        )
    }

    
}





const mapStateToProps = (state) => ({
  userState: state.userState
});

export default connect(mapStateToProps)(NavbarComponent);