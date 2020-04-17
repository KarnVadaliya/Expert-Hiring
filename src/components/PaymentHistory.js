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
        Axios.get('http://localhost:5000/users/findByEmail/'+this.props.userState.user.username)
            .then(
                res=>{              
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
                                let x=transaction.custom.split(" ");
                                if(x.length === 4)
                                {
                                    tempState.custom = x[0]+" "+x[1];
                                    tempState.bookDate=x[2];
                                    tempState.bookTime=x[3];
                                }
                                else
                                {
                                    tempState.custom = x[0]+" "+x[1];
                                    tempState.bookDate=x[2];
                                }
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
                        <h5 style={{fontWeight:"700",fontSize:"25px",marginLeft:"-10px"}}>Order id : {count}</h5>
                        <h5 style={{fontWeight:"700",fontSize:"22px"}}>Order Details</h5>
                        <div>
                            <div>
                            <Table bordered>
                                <thead>
                                <tr>
                                    <th style={{fontSize:"18px"}}>Service Name</th>
                                    <th style={{fontSize:"18px"}}>Quantity</th>
                                    <th style={{fontSize:"18px"}}>Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                {listitems}
                                <tr>
                                <th scope="row" style={{fontSize:"18px"}}>Total :</th>
                                <td></td>
                                <td>$ {p.total}</td>
                                </tr>
                                </tbody>
                            </Table>
                            </div>
                            <div className="paymentDetails">
                                <div style={{width:"30%"}}>
                                    <h5 style={{fontWeight:"700",fontSize:"22px"}}>Booking Details</h5>
                                    <p><span style={{fontWeight:"bold"}}>Booking For:</span>&emsp; {p.custom}</p>
                                    <p><span style={{fontWeight:"bold"}}>Booking Total:</span>&emsp; {p.total} {p.currency}</p>
                                    <p><span style={{fontWeight:"bold"}}>Booking Date:</span>&emsp; {p.bookDate}</p>
                                    <p><span style={{fontWeight:"bold"}}>Booking Time Slot:</span>&emsp; {p.bookTime}</p>
                                    <p><span style={{fontWeight:"bold"}}>Booking Address</span>&emsp;</p>
                                    <p>{p.shipping_address.line1}<br></br>{p.shipping_address.line2}<br></br>{p.shipping_address.postal_code}<br></br>{p.shipping_address.city}, {p.shipping_address.state}, {p.shipping_address.country_code}</p>
                                </div>
                                <div>
                                    <h5 style={{fontWeight:"700",fontSize:"22px"}}>Payment Details</h5>
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
            <>
                <div style={{marginTop:"-100px", paddingTop:"120px", backgroundColor:"#f5f5f5", paddingBottom:"50px"}}>
                    <h2 >Order History</h2>
                </div>               
                <div>
                { this.state.paymentDetails.length === 0 ? 
                    <h3 style={{fontWeight:"bold",textAlign:"center",height:"400px"}}>No Orders</h3>
                :
                    <ul>
                        {myorders}
                    </ul>    
                }                 
                
                </div>
               
                
           
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    userState:state.userState
  });
export default connect(mapStateToProps)(PaymentHistory);