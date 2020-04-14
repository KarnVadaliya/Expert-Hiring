import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row, Table } from 'reactstrap';
import { connect } from 'react-redux';
import Axios from 'axios';



class PaymentHistory extends Component{
    constructor(props)
    {
        super(props)
        this.state = [
            {
            id: '',
            create_time:'',
            name:'',
            email:'',
            items: [],
            shipping_address: {},
            custom: '',
            total: '',
            currency: ''

        }
    ]
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/users/findByID/'+this.props.userState.user._id)
            .then(
                res=>{
                    // console.log((res.data.paymentHistory[0].transactions[0].item_list.items[0]));

                    console.log(res.data)
                    // let paymentDetails=[]
                    // let tempState = {
                    //     id: '',
                    //     create_time:'',
                    //     name:'',
                    //     email:'',
                    //     items: [],
                    //     shipping_address: {},
                    //     custom: '',
                    //     total: '',
                    //     currency: ''
                    // }
                    // // res.data.paymentHistory[0].transactions[0].item_list.items.map(item=>tempState.items.push(item));
                    // // for(var transaction in res.data.paymentHistory[0].transactions)

                    // res.data.paymentHistory.map(payment=>{
                    //     tempState.id = payment.id;
                    //     tempState.create_time = payment.create_time;
                    //     tempState.name = payment.payer.payer_info.first_name +' '+ payment.payer.payer_info.last_name;
                    //     tempState.email = payment.payer.payer_info.email;
                    //     tempState.shipping_address = payment.payer.payer_info.shipping_address;
                    //     payment.transactions.map(transaction=>{
                    //             tempState.custom = transaction.custom;
                    //             tempState.total = transaction.amount.total;
                    //             tempState.currency = transaction.amount.currency;
                    //             // transaction
                    //             transaction.item_list.items.map(item=>tempState.items.push(item));
                    //     })
                    // });


                    // this.setState({
                    //     // id: tempState.id,
                    //     // create_time:tempState.create_time,
                    //     // name: tempState.name,
                    //     // email:tempState.email,
                    //     // items: tempState.items,
                    //     // shipping_address: tempState.shipping_address,
                    //     // custom: tempState.custom,
                    //     // total: tempState.total,
                    //     // currency: tempState.currency

                    // })
                }
            )
    }

    render(){

        // const { data } = this.state;
        // for(var p in paymentHistory[0]){
        //     console.log(p);
        // }
        // const myOrders = paymentHistory.map(payment=>{
        //    console.log(payment);
        // })
        // console.log(typeof(this.state.data.paymentHistory[0]));
        // const myOrders= paymentHistory[0].map(payment=>{
        //     payment.transactions[0].map(transaction=>{
        //         transaction.item_list.items.map(item=>{
        //                 return(
        //                     <div key={item.name}>
        //                         <p>{item.name}</p>
        //                         <p>{item.price}</p>
        //                         <p>{item.quantity}</p>
        //                         <p>{item.description}</p>
        //                         <p>{item.currency}</p>
        //                     </div>
        //                 )
        //         })
        //         return(
        //             <div key={transaction.custom}>
        //                 {/* {items} */}
        //                 <p>{transaction.custom}</p>
        //                 <p>{transaction.amount.total}</p>
        //                 <p>{transaction.amount.currency}</p>
        //             </div>
        //         )
        //     })
        //     return(
        //         <div key={payment.id}>
        //             <p>{payment.id}</p>
        //             <p>{payment.create_time}</p>
        //             <p>{payment.payer.payer_info.first_name}</p>
        //             <p>{payment.payer.payer_info.last_name}</p>
        //             <p>{payment.payer.payer_info.email}</p>
        //             <p>{payment.payer.payer_info.shipping_address.line1}</p>
        //             <p>{payment.payer.payer_info.shipping_address.city}</p>
        //             <p>{payment.payer.payer_info.shipping_address.state}</p>
        //             <p>{payment.payer.payer_info.shipping_address.postal_code}</p>
        //             <p>{payment.payer.payer_info.shipping_address.country_code}</p>
        //             {/* {transactions} */}
        //         </div>
        //     )
        // })

        console.log(this.state);
        return(
            // { myOrders}
            // <>
            // </>
           null
        )
    }
}
const mapStateToProps = (state) => ({
    userState:state.userState
  });
export default connect(mapStateToProps)(PaymentHistory);