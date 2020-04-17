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
      console.log(this.props);
      console.log((sessionStorage.getItem('user')));
            const user = this.props.userState.user;

            let display = <LoggedOut/>;

             if (Object.keys(user).length !== 0) {
              display = <LoggedIn user={this.props.userState.user}/>;
            } else {
              display = <LoggedOut/>;
            }

            console.log(this.props);

        return(
            <Navbar
          className="navbar-horizontal navbar-dark bg-dark mt-4"
          expand="lg"
            >
          <Container>
          <Link to="/" style={{color:"white"}}>
            <NavbarBrand>
            <img id="logo" src={require('../logo.png')} style={{width:"170px", height:"170px"}}></img>
            <h3 id="smallLogo">LEGION</h3>
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
                        src={require("../logo.png")}
                        style={{width:"120px", height:"120px", marginTop:"-47px"}}
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
                            <Link to="/careers">
                            <DropdownItem>
                              Careers
                            </DropdownItem>
                            </Link>
                            
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
