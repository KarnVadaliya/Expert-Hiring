import React, { Component } from 'react';
import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Col
} from "reactstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationArrow, faSearch } from '@fortawesome/free-solid-svg-icons';


export default class Searchbar extends Component {

    state={
        currentCity:'Ahmedabad',
        cities: ['Boston','Bangalore','New Jersey', 'New York'],
        // cities: []
    }

    render() {
        const { cities } = this.state;
        const cityInformation = (cities.length) ? (
            cities.map(city=>{
                return(
                    <li>
                    <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                        {city}
                    </DropdownItem>
                    </li>
                )
            })
        ):(
            <li>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                No cities yet!! We will come soon!!
            </DropdownItem>
            </li>
        );


        return (
            <div className="header" style={{marginTop:""}}>
                <h1 className="display-1" style={{textAlign:"center", color:"white"}}>Your service expert in {this.state.currentCity}</h1>
                <br></br>
                <div id="wrapper" style={{display:"flex"}}>
                    <div style={{flex:"45%", textAlign:"right"}}>
                        <UncontrolledDropdown>
                        <DropdownToggle caret color="white">
                            {/* <FontAwesomeIcon icon={faLocationArrow} style={{paddingRight:"7px"}}></FontAwesomeIcon> */}
                            <i style={{paddingRight:"9px"}}className="fa fa-location-arrow" />
                            Ahmedabad
                        </DropdownToggle>
                        <DropdownMenu>
                            {cityInformation}
                        </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                    <div style={{flex:"55%", paddingLeft:"1%"}}> 
                        <Col md="5">
                        <FormGroup>
                            <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                <i className="fa fa-search" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Search for a service" type="text" />
                            </InputGroup>
                        </FormGroup>
                        </Col>                  
                    </div>
                </div>
            </div>
        )
    }
}
