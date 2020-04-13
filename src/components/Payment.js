import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';
import PaypalCheckoutButton from './PayPalCheckoutButton';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';

class Payment extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            name:"",
            number:"",
            zip:"",
            city:"",
            address1:"",
            address2:"",
            date:"",
            time:"",
            mystate:"none",
            regExName : /^[a-zA-Z][a-zA-Z ]*[a-zA-Z]$/,
            regExPhone : /\d{3}-?\d{3}-\d{4}$/,
            regExZipCode : /^\d{5}$/,
            regExAddress: /^[a-zA-Z0-9][-,a-zA-Z0-9 ]*[a-zA-Z0-9]$/,
            nameError:"",
            numberError:"",
            zipError:"",
            cityError:"",
            address1Error:"",
            mystateError:"",
            zipError:"",
            dateError:""
        }
    }


    handleOnChangeTextBox = e => {
      this.setState({
          [e.target.name]: e.target.value
      })
     }

     handleSelectList = e => {
      this.setState({
          mystate: e.target.value
      })
    }
    
    

    handleError = e =>{
      const x=e.target.name + "Error";
      if(e.target.value==="" || e.target.value==="none"){
          this.setState({
              [x]:"is-invalid"
          })
      }else{
          this.setState({
              [x]: ""
          })
      }
    }

    handleAddressError = e =>{
      if(!this.state.address1.match(this.state.regExAddress)){
          this.setState({
              address1: "",
              address1Error:"is-invalid"
          })
      }else{
          this.setState({
            address1Error: ""
          })
      }
    }

    handleCityError = e =>{
      if(!this.state.city.match(this.state.regExName)){
          this.setState({
              city: "",
              cityError:"is-invalid"
          })
      }else{
          this.setState({
              cityError: ""
          })
      }
    }

    handleNameError = e =>{
      if(!this.state.name.match(this.state.regExName)){
          this.setState({
              name: "",
              nameError:"is-invalid"
          })
      }else{
          this.setState({
              nameError: ""
          })
      }
    }



    handlePhoneError = e =>{
      if(!this.state.number.match(this.state.regExPhone)){
          this.setState({
              number: "",
              numberError:"is-invalid"
          })
      }else{
          this.setState({
              numberError: ""
          })
      }
    }

  handleZipCodeError = e =>{
    if(!this.state.zip.match(this.state.regExZipCode)){
        this.setState({
            zip: "",
            zipError:"is-invalid"
        })
    }else{
        this.setState({
            zipError: ""
        })
      }
    }


    



    render(){
    
      const order = {
        customer: 'FenilShah',
        total: '100.00',
        items: [
          {
            name: 'Oneplus',
            description: 'Amazing Phone',
            price: '60.00',
            quantity: 1,
            currency: 'USD'
          },
          {
            name: 'Oneplus cable',
            description: 'Fast charging Cable',
            price: '20.00',
            quantity: 2,
            currency: 'USD'
          },
        ],
      };

    return(
    <div style={{width:"70%", marginLeft:"15%"}}>
    <h3>Your Order</h3>

    <h3>Enter Details</h3>
    <br></br>
      <Form>
        <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleName">Name*</Label>
            <Input className={this.state.nameError} type="text" name="name" required id="exampleName" placeholder="Your Name" value={this.state.name} onBlur={this.handleNameError} onChange={this.handleOnChangeTextBox} />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleNumber">Number*</Label>
            <Input className={this.state.numberError} type="text" name="number" required id="exampleNumber" placeholder="XXX-XXX-XXXX" value={this.state.number} onBlur={this.handlePhoneError} onChange={this.handleOnChangeTextBox} />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
            <FormGroup>
            <Label for="exampleDate">Date*</Label>
            <Input
              className={this.state.dateError}
              type="date"
              name="date"
              id="exampleDate"
              placeholder="Select Date"
              value={this.state.date}
              onBlur={this.handleError}
              onChange={this.handleOnChangeTextBox}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
            <FormGroup>
            <Label for="exampleTime">Time</Label>
            <Input
              type="time"
              name="time"
              id="exampleTime"
              placeholder="Select Time"
              value={this.state.time}
              onChange={this.handleOnChangeTextBox}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address*</Label>
        <Input className={this.state.address1Error} type="text" name="address1" required id="exampleAddress" placeholder="1234 Main St" value={this.state.address1} onBlur={this.handleAddressError} onChange={this.handleOnChangeTextBox}/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
        <Input type="text" name="address2" id="exampleAddress2"  placeholder="Apartment, studio, or floor" value={this.state.address2} onChange={this.handleOnChangeTextBox} />
      </FormGroup>
      <Row form>

        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City*</Label>
            <Input className={this.state.cityError} type="text" name="city" required id="exampleCity" value={this.state.city} onBlur={this.handleCityError} onChange={this.handleOnChangeTextBox}/>
          </FormGroup>
        </Col>
        
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State*</Label>
            <Input className={this.state.mystateError} type="select" name="mystate" required id="exampleSelect" value={this.state.mystate} onBlur={this.handleError} onChange={this.handleSelectList}  >
              <option value="none" > --Select-- </option>
              <option value="NY">NY</option>
              <option value="MA">MA</option>
              <option value="CA">CA</option>
              <option value="TX">TX</option>
          </Input>
          </FormGroup>
        </Col>
       
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip*</Label>
            <Input className={this.state.zipError} type="text" name="zip" placeholder="XXXXX" required id="exampleZip" value={this.state.zip} onBlur={this.handleZipCodeError} onChange={this.handleOnChangeTextBox} />
          </FormGroup>  
        </Col>

      </Row>
      {/* <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" required check>Check me out</Label>
      </FormGroup>
      <Button>Sign in</Button> */}
    </Form>
      <br></br>
        <PaypalCheckoutButton order={order} />
   

      


    </div>


    )
    }
}

export default Payment;