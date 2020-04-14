import React, { Component } from 'react';

import {
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    UncontrolledDropdown,
    Nav
  } from "reactstrap";

class LoggedIn extends Component {
    render() {

        return (
            <div className="ml-lg-auto">

                    <Nav navbar>
                        
                        <UncontrolledDropdown nav inNavbar>
                            {/* <DropdownToggle nav>Hi, {this.props.user.name}</DropdownToggle> */}
                            <DropdownMenu
                                aria-labelledby="nav-inner-primary_dropdown_1"
                                left
                            >
                               
                                <DropdownItem>
                                <i className="ni ni-circle-08" />
                                My Profile
                                </DropdownItem>
                               
                                
                                <DropdownItem>
                                <i className="ni ni-archive-2" />
                                Orders
                                </DropdownItem>
                               
                                <DropdownItem>
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

export default LoggedIn;