import React, { Component } from 'react';
import { setUser } from '../actions/setUser';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import {
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    UncontrolledDropdown,
    Nav
  } from "reactstrap";

class LoggedIn extends Component {

    logOutUser = (e) =>{
        e.preventDefault();
        sessionStorage.removeItem('user');
        // window.location.href('http://localhost:3000/');
        this.props.setUser({});
    }

    render() {

        return (
            <div className="ml-lg-auto">

                    <Nav navbar>
                        
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav>Hi, {this.props.user.name}</DropdownToggle>
                            <DropdownMenu
                                aria-labelledby="nav-inner-primary_dropdown_1"
                                left
                            >
                               
                                <DropdownItem>
                                <i className="ni ni-circle-08" />
                                My Profile
                                </DropdownItem>
                               
                                <Link to='/paymentHistory'>
                                    <DropdownItem>
                                    <i className="ni ni-archive-2" />
                                    My Orders
                                    </DropdownItem>
                                </Link>
                               
                               
                                <DropdownItem onClick={this.logOutUser}>
                                <i className="ni ni-button-power" />
                                Logout
                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    

                    
                    </Nav>
        


            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userState: state.userState
});

export default connect(mapStateToProps,{ setUser })(LoggedIn);
