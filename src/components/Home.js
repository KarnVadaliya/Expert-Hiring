import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ServiceBar from './ServiceBar';
import Services from './Services';
import PaypalCheckoutButton from './PayPalCheckoutButton';
import Payment from './Payment';

var name = "hello";

export default class Home extends Component {

    render() {
        return (
            <div>
                <Searchbar name={name}></Searchbar>
                <ServiceBar></ServiceBar>
                <Services></Services>
                {/* <PaypalCheckoutButton order={order} /> */}
            </div>
        )
    }
}
