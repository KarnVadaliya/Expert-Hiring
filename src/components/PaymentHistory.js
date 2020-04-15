import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row, Table } from 'reactstrap';
import { connect } from 'react-redux';
import Axios from 'axios';



class PaymentHistory extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            paymentDetails:[]
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/users/findByID/'+this.props.userState.user._id)
            .then(
                res=>{
                    // console.log((res.data.paymentHistory[0].transactions[0].item_list.items[0]));

                   
                    let paymentDetails=[]
                    
                    
                    // console.log(tempState.id);
                    res.data.paymentHistory.map(payment=>{
                        let tempState = {
                            id: '',
                            create_time:'',
                            name:'',
                            email:'',
                            items: [],
                            shipping_address: {},
                            custom: '',
                            bookDate: '',
                            bookTime:'',
                            total: '',
                            currency: ''
                        }
                        tempState.id = payment.id;
                        tempState.create_time = payment.create_time;
                        tempState.name = payment.payer.payer_info.first_name +' '+ payment.payer.payer_info.last_name;
                        tempState.email = payment.payer.payer_info.email;
                        tempState.shipping_address = payment.payer.payer_info.shipping_address;
                        payment.transactions.map(transaction=>{
                                tempState.custom = transaction.custom;
                                let x=transaction.description.split(" ");
                                tempState.bookDate=x[0];
                                tempState.bookTime=x[1];
                                tempState.total = transaction.amount.total;
                                tempState.currency = transaction.amount.currency;
                                // transaction
                                transaction.item_list.items.map(item=>tempState.items.push(item));
                        })
                        // console.log(tempState.id);
                        paymentDetails.push(tempState);
                        
                    });
                    
                    

                    this.setState({
                        paymentDetails:paymentDetails
                    })
                    
                    
                }
            )
    }

    render(){
        
        var count=0;
        const myorders=this.state.paymentDetails.map(p=>{
            const listitems=p.items.map(item=>{
                return(
                    <tr>
                    <td><strong>{item.name}</strong><br></br><p>{item.description}</p></td>
                    <td>{item.quantity}</td>
                    <td>$ {item.quantity*item.price}.00</td>
                  </tr> 
                    
                )
            });
            count++;
            return(
                <li>
                    <div className="allOrders">
                        <h5 style={{fontWeight:"700",fontSize:"25px",marginLeft:"-10px",color:"black"}}>Order id : {count}</h5>
                        <h5 style={{fontWeight:"700",fontSize:"22px",color:"black"}}>Order Details</h5>
                        <div>
                            <div>
                            <Table borderless style={{color:"black"}}>
                                <thead>
                                <tr>
                                    <th style={{fontSize:"18px"}}>Service Name</th>
                                    <th style={{fontSize:"18px"}}>Quantity</th>
                                    <th style={{fontSize:"18px"}}>Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                {listitems}
                                <tr style={{borderTop:"0.5px solid black"}}>
                                <th scope="row" style={{fontSize:"18px"}}>Total :</th>
                                <td></td>
                                <td>$ {p.total}</td>
                                </tr>
                                </tbody>
                            </Table>
                            </div>
                            <div className="paymentDetails">
                                <div style={{width:"30%"}}>
                                    <h5 style={{fontWeight:"700",fontSize:"22px",color:"black"}}>Booking Details</h5>
                                    <p><span style={{fontWeight:"bold"}}>Booking For:</span>&emsp; {p.custom}</p>
                                    <p><span style={{fontWeight:"bold"}}>Booking Total:</span>&emsp; {p.total} {p.currency}</p>
                                    <p><span style={{fontWeight:"bold"}}>Booking Date:</span>&emsp; {p.bookDate}</p>
                                    <p><span style={{fontWeight:"bold"}}>Booking Time Slot:</span>&emsp; {p.bookTime}</p>
                                    <p><span style={{fontWeight:"bold"}}>Booking Address</span>&emsp;</p>
                                    <p>{p.shipping_address.line1}<br></br>{p.shipping_address.postal_code}<br></br>{p.shipping_address.city}, {p.shipping_address.state}, {p.shipping_address.country_code}</p>
                                </div>
                                <div>
                                    <h5 style={{fontWeight:"700",fontSize:"22px",color:"black"}}>Payment Details</h5>
                                    <p><span style={{fontWeight:"bold"}}>Payment Method:</span>&emsp; Paypal</p>
                                    <p><span style={{fontWeight:"bold"}}>Payment_ID:</span>&emsp; {p.id}</p>
                                    <p><span style={{fontWeight:"bold"}}>Created On:</span>&emsp; {p.create_time}</p>
                                    <p><span style={{fontWeight:"bold"}}>Payment Account</span>&emsp;<br></br>Name:&emsp;{p.name} <br></br>Email:&emsp;{p.email}</p>
                                </div>
                            </div>
                            
                            
                         </div>  
                    </div>
                </li>
            )
        })


       
        
        
        return(
            <div>
                <h2>Order History</h2>
                <div>
                    <ul>
                        {myorders}
                    </ul>    
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    userState:state.userState
  });
export default connect(mapStateToProps)(PaymentHistory);