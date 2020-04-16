import React, { Component } from 'react';
import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Form,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Col
} from "reactstrap";
import { connect } from 'react-redux';
import { setSearch } from '../actions/setSearch'
import { setCity } from '../actions/setCity'

class Searchbar extends Component {

    state={
        currentCity:'Ahmedabad',
        cities: ['Ahmedabad','Boston','New Jersey', 'New York', 'San Fransico', 'Mumbai'],
        search: ''
    }

    handleOnChange = (e) =>{
        if(e.target.value === "")
            this.props.setSearch("");
        else
            this.props.setSearch(this.state.search);
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state.search);
        this.props.setSearch(this.state.search);
    }

    render() {
        console.log(this.props);
        const { cities } = this.state;
        let filtered = cities.filter(city=> city !== this.props.mainPageState.city);
        const cityInformation = (filtered.length) ? (
            filtered.map(city=>{
                return(
                    <li>
                    <DropdownItem onClick={() => this.props.setCity(city)}>
                        {city}
                    </DropdownItem>
                    </li>
                )
            })
        ):(
            <li>
            <DropdownItem onClick={e => e.preventDefault()}>
                No cities yet!! We will come soon!!
            </DropdownItem>
            </li>
        );


        return (
            <div className="header" style={{marginTop:""}}>
                <h1 className="display-1" style={{textAlign:"center", color:"white"}}>Your service expert in {this.props.mainPageState.city}</h1>
                <br></br>                
                <div id="wrapper" style={{display:"flex"}}>
                    <div style={{flex:"45%", textAlign:"right"}}>
                        <UncontrolledDropdown>
                        <DropdownToggle caret color="white">                           
                            <i style={{paddingRight:"9px"}}className="fa fa-location-arrow" />
                            {this.props.mainPageState.city}
                        </DropdownToggle>
                        <DropdownMenu>
                            {cityInformation}
                        </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                    <div style={{flex:"55%", paddingLeft:"1%"}}> 
                        <Col md="5">
                        <Form onSubmit={this.handleSubmit}>
                            <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                <i className="fa fa-search" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Search for a service" type="text" onChange={this.handleOnChange}/>
                            </InputGroup>
                        </Form>
                        </Col>                  
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    mainPageState: state.mainPageState
});

export default connect(mapStateToProps,{ setSearch, setCity })(Searchbar)