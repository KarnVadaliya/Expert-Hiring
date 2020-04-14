import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';
import PaymentHistory from './PaymentHistory';
import { connect } from 'react-redux';
import { setPayment } from '../actions/setPayment';
import { emptyCart } from '../actions/emptyCart';
import nodemailer from 'nodemailer';
import Axios from 'axios';

class PayPalCheckoutButton extends React.Component {

    render(){
          const order  = this.props.order;
          // console.log(this.props);
          const paypalConf = {
            currency: 'USD',
            env: 'sandbox',
            client: {
              sandbox: 'Aa-gcAbCVGfyOR4wSu6T2FBqEt8Qt4U0xBdgUK9bKAHJk_Dy8Q1HuVQg61mxmIIlJflpxP0m658Z3qmE',
              production: '--',
            },
            style: {
              layout:'vertical',
              label: 'pay',
              size: 'medium', // small | medium | large | responsive
              shape: 'rect',   // pill | rect
              color: 'gold',  // gold | blue | silver | black
            },
          };
        
          const PayPalButton = paypal.Button.driver('react', { React, ReactDOM });
        
          const payment = (data, actions) => {
            const payment = {
              transactions: [
                {
                  amount: {
                    total: order.total,
                    currency: paypalConf.currency,
                  },
                  description: 'My Test App',
                  custom: order.customer || '',
                  item_list: {
                    items: order.items,
                    shipping_address:order.address
                  },
                },
              ],
              note_to_payer:'Thank You For Your Purchase',
              redirect_urls:{
                return_url:"https://www.youtube.com/",
                cancel_url:"https://www.google.com/"
              }
            };
        
            // console.log(payment);
            return actions.payment.create({
              payment,
            });
          };
          

          
          const onAuthorize = (data, actions) => {
            return actions.payment.execute()
              .then(response => {
                console.log(response);
                this.props.emptyCart();
                Axios.post('http://localhost:5000/users/addPayment',
                {
                    username: this.props.userState.user.username,
                    payment: response
                },{
                    "headers": {
                      'Content-Type': 'application/json',
                    }
                  })
                  .then(res=>{console.log(res)})
                  .catch(err=>{console.log(err)})


                this.props.setPayment(response);
                console.log(this.props.userState);
                // alert(`The payment was processed correctly, ID: ${response.id}`)


                var transporter = nodemailer.createTransport({
                  service: 'gmail',
                  auth: {
                    user: 'webdesign.legion.16@gmail.com',
                    pass: 'Legion@16'
                  }
                });
      
                var mailOptions = {
                  from: 'webdesign.legion.16@gmail.com',
                  to: 'karn.vadaliya@gmail.com',
                  subject: 'Kantalo aave che',
                  html: `<p>Payment done ${response.id}</p>`
                };
                
                transporter.sendMail(mailOptions, function(error, info){
                  if (error) {
                    console.log(error);
                  } else {
                    console.log('Email sent: ' + info.response);
                  }
                });

              })
              .catch(error => {
                console.log(error);
                  alert('Something went wrong while processing the payment');
              });
          };
        
          const onError = (error) => {
            alert ('Error in Payment' );
          };
        
          const onCancel = (data, actions) => {
            alert( 'Payment cancelled by the user' );
          };
          // console.log(order);
          // console.log(this.props);
        
          return (
            <div style={{textAlign:"left"}}>
                <PayPalButton
              env={paypalConf.env}
              client={paypalConf.client}
              payment={(data, actions) => payment(data, actions)}
              onAuthorize={(data, actions) => onAuthorize(data, actions)}
              onCancel={(data, actions) => onCancel(data, actions)}
              onError={(error) => onError(error)}
              style={paypalConf.style}
              commit
              locale="en_US"
            />
            </div>
          
        
          );
        }

    }

  const mapStateToProps = (state) => ({
    userState: state.userState
});
  
  export default connect(mapStateToProps, { setPayment, emptyCart })(PayPalCheckoutButton);  

