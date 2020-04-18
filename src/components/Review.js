import React, { Component } from 'react'
import Axios from 'axios';
import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";
import {
    Button, Accordion, Card, Image
} from 'react-bootstrap';
import Ratings from 'react-ratings-declarative';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'; 


class Review extends Component {
    constructor(props){
        super(props);
        this.state = {
            professionals : [],
            cities: [],
            // category: ['Sofa Cleaning', 'Hair Stylist', 'Microwave Repair', 'Makeup', 'TV Repair', 'Water Purifier Repair', 'Washing Machine Repair','Refrigerator Repair','Electrician','Carpenter','Salon At Home','Haircut','Plumber'],
            category: [],
            categorySelect: '',
            citySelect: '',
            rating: 0,
            comment: '',
            ok: false
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/professionals/')
            .then(res=>{
                if(Object.keys(res.data).length === 0){
                    console.log("Couldnt fetch data!");
                    return;
                }
                let tempCategory = []
                res.data.map(professional => {
                    if(tempCategory.indexOf(professional.category) === -1) tempCategory.push(professional.category)
                });
                
                let tempCities = []
                res.data.map(professional => {
                    if(tempCities.indexOf(professional.serviceInCity) === -1) tempCities.push(professional.serviceInCity)
                });

                this.setState({
                    professionals: res.data,
                    category: tempCategory,
                    cities: tempCities
                })
            })
    }

    changeRating = (newRating) => {        
        this.setState({
            rating: newRating
        })
    }

    handleOnChange = (e) =>{
        this.setState({
            comment: e.target.value
        })
    }

    handleCitySelect = (e) =>{
        // this.setState({
        //     citySelect: e.target.innerHTML
        // })
        var cityFromDropdown = e.target.innerHTML;
        
        Axios.post('http://localhost:5000/professionals/city',
        {
            city: cityFromDropdown
        },{
            "headers": {
              'Content-Type': 'application/json',
            }
          })
            .then(res=>{
                if(Object.keys(res.data).length === 0){
                    console.log("Couldnt fetch data!");
                    return;
                }
                let tempCategory = []
                res.data.map(professional => {
                    if(tempCategory.indexOf(professional.category) === -1) tempCategory.push(professional.category)
                });
                
                this.setState({
                    professionals: res.data,
                    category: tempCategory,
                    categorySelect: '',
                    citySelect: cityFromDropdown
                })
            })
    }

    handleCategorySelect = (e) =>{
        var categoryFromDropdown = e.target.innerHTML;
        
        Axios.post('http://localhost:5000/professionals/category',
        {
            category: categoryFromDropdown,
            city: this.state.citySelect
        },{
            "headers": {
              'Content-Type': 'application/json',
            }
          })
            .then(res=>{
                if(Object.keys(res.data).length === 0){
                    console.log("Couldnt fetch data!");
                    return;
                }
                this.setState({
                    professionals: res.data,
                    categorySelect: categoryFromDropdown
                })
            })
    }

    handleOnSubmit = professionalID => e =>{
        e.preventDefault();
        if(this.state.rating===0){            
            return;
        }
        
        console.log(professionalID);
        
        Axios.post('http://localhost:5000/professionals/review/'+professionalID,
        {
            name: this.props.userState.user.name,
            starsGiven: this.state.rating,
            comment: this.state.comment
        },{
            "headers": {
              'Content-Type': 'application/json',
            }
          })
          .then(res=>{
              console.log(res);
              alert('Your review is appreciated! Thank you!');
              this.setState({
                  ok: true
              })               
                           
          })
          .catch(err=>console.log(err));


    }

    render() {
        if(this.state.ok)
            return <Redirect to="/"/>

        console.log(this.state);
        const professionalsList = this.state.professionals.length ? (
            this.state.professionals.map(professional=>{
                return(
                    <Card>
                        <Card.Header>
                        <Image roundedCircle src={require("../assets/img/serviceBackgrounds/random.jpg")} style={{width:"10%"}}/>
                        <Accordion.Toggle as={Button} variant="link" eventKey={professional._id}>
                            {professional.name}                           
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={professional._id}>
                        <Card.Body>
                        <p style={{display:"inline"}}>Ratings: &nbsp;&nbsp;</p>
                        <Ratings
                            rating={this.state.rating}
                            widgetRatedColors="rgb(255, 149, 41)"
                            widgetDimensions= '25px'
                            changeRating={this.changeRating}
                        >
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />                            
                        </Ratings>
                        { this.state.rating === 0 &&
                            <p style={{color:"Red",fontSize:"small"}}><i>Please give a rating!</i></p>
                        }
                        <Form onSubmit={this.handleOnSubmit(professional._id)}>
                            <FormGroup>
                                <Label for="exampleText"><p>Comment:</p></Label>
                                <Input type="textarea" name="text" id="exampleText" required onChange={this.handleOnChange} value={this.state.comment}/>
                            </FormGroup> 
                            <div style={{textAlign:"center"}}><Button type="submit">Submit</Button></div>                           
                        </Form>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )
            })
        ):(
            <p>No data</p>
        );
        const categoryInformation = (this.state.category.length) ? (
            this.state.category.sort().map(category=>{
                return(
                    <li>
                    <DropdownItem onClick={this.handleCategorySelect}>
                        {category}
                    </DropdownItem>
                    </li>
                )
            })
        ):(
            <li>
            <DropdownItem onClick={e => e.preventDefault()}>
                No categories yet!! We will come soon!!
            </DropdownItem>
            </li>
        );

        const cityInformation = (this.state.cities.length) ? (
            this.state.cities.sort().map(city=>{
                return(
                    <li>
                    <DropdownItem onClick={this.handleCitySelect}>
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
            <>
                <div style={{marginTop:"-100px", paddingTop:"120px", backgroundColor:"#f5f5f5"}}>
                    <h1 style={{fontWeight:"bold", letterSpacing:"2px", textAlign:"center"}}>REVIEW US</h1><br></br><br></br>
                </div>
                <div style={{marginBottom:"50px", paddingTop:"50px"}}>

                <div style={{textAlign:"center"}}>
                    <h4 style={{display:"inline"}}>Choose a city : &nbsp;&nbsp;</h4><span>{' '}</span>
                    <UncontrolledDropdown>
                        <DropdownToggle caret color="white">                                
                            <i style={{paddingRight:"9px"}}className="fa fa-location-arrow" />
                        {this.state.citySelect === '' ? (<i>---Not selected---</i>):(this.state.citySelect)}
                        </DropdownToggle>
                        <DropdownMenu>
                            {cityInformation}
                        </DropdownMenu>
                    </UncontrolledDropdown>     
                </div>
                    <br></br><br></br><br></br>
                    
                   {    this.state.citySelect !== '' &&
                       <div style={{textAlign:"center"}}>
                        <h4 style={{display:"inline"}}>Please select a category : &nbsp;&nbsp;</h4><span>{' '}</span>
                        <UncontrolledDropdown>
                            <DropdownToggle caret color="white">                                
                                <i style={{paddingRight:"9px"}}className="fa fa-list" />
                            {this.state.categorySelect === '' ? (<i>---Not selected---</i>):(this.state.categorySelect)}
                            </DropdownToggle>
                            <DropdownMenu>
                                {categoryInformation}
                            </DropdownMenu>
                        </UncontrolledDropdown>     
                    </div>      }
                    <br>                    
                    </br>
                    <br>                    
                    </br>
                    {   this.state.categorySelect !== '' &&
                        <div className="container">
                            <Accordion>
                                {professionalsList}
                            </Accordion> 
                        </div>
                    }
                                
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    userState: state.userState
});

export default connect(mapStateToProps)(Review);
