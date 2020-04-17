import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';
import PaypalCheckoutButton from './PayPalCheckoutButton';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row, Table } from 'reactstrap';
import { connect } from 'react-redux';


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
    

      const productsList = [];
        for(var product in this.props.cartState.productsInCart){
            productsList.push(this.props.cartState.productsInCart[product])
        }
       
      var count=0;
      var itemlist=[]
      const products=productsList.map(product=>{
        itemlist.push({
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            currency: 'USD'
        },)
        count++;
        return (
              <tr>
                <th scope="row">{count}</th>
                <td><strong>{product.name}</strong><br></br><p>{product.description}</p></td>
                <td>{product.quantity}</td>
                <td>$ {product.quantity*product.price}</td>
              </tr> 
        )
      });


      const order = {
        customer: this.state.name,
        total: this.props.cartState.cartCost,
        items: itemlist,
        bookDate:this.state.date,
        bookTime:this.state.time,
        address: {
          line1: this.state.address1,
          line2: this.state.address2,
          city:this.state.city,
          country_code: "US",
          postal_code: this.state.zip,
          state:this.state.mystate,
        },
      };
      
      const myArr=["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID",
      "IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT",
      "NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI",
      "SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"]
      const usaStates= myArr.map(x=>{
        return(
          <option value={x}>{x}</option>
        )
      })

    return(
    <div style={{width:"70%", marginLeft:"15%"}}>
    <h3 style={{fontWeight:"550"}} >Your Order</h3>
         <Table responsive>
            <thead>
              <tr>
                <th style={{fontSize:"20px"}}>No.</th>
                <th style={{fontSize:"20px"}}>Service Name</th>
                <th style={{fontSize:"20px"}}>Quantity</th>
                <th style={{fontSize:"20px"}}>Price</th>
              </tr>
            </thead>
            <tbody>
            {products}
            <tr style={{borderTop:"1px solid gray"}}>
              <th scope="row" style={{fontSize:"20px"}}>Total :</th>
              <td></td>
              <td></td>
              <td>$ {this.props.cartState.cartCost}</td>
            </tr>
          </tbody>
        </Table>
   
    <h3 style={{fontWeight:"550"}}>Enter Details</h3>
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
              required
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
              {usaStates}
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
    </Form>
      <br></br>
     
        { this.state.name!=="" && this.state.number!=="" && this.state.city!=="" && this.state.address1!=="" && this.state.date!="" && this.state.zip!=="" && this.state.mystate!=="none" &&
          <PaypalCheckoutButton  order={order} />}

    </div>


    )
    }
}

const mapStateToProps = (state) => ({
  cartState: state.cartState,
  userState:state.userState
});
export default connect(mapStateToProps)(Payment);