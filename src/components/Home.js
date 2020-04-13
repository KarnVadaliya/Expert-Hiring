import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ServiceBar from './ServiceBar';
import Services from './Services';
import PaypalCheckoutButton from './PayPalCheckoutButton';
import Payment from './Payment';

export default class Home extends Component {
    render() {
        const order = {
            customer: 'FenilShah',
            total: '100.00',
            items: [
              {
                name: 'Oneplus',
                price: '60.00',
                quantity: 1,
                currency: 'USD'
              },
              {
                name: 'Oneplus cable',
                price: '20.00',
                quantity: 2,
                currency: 'USD'
              },
            ],
          };
        return (
            <div>
                <Searchbar></Searchbar>
                <ServiceBar></ServiceBar>
                <Services></Services>
                {/* <PaypalCheckoutButton order={order} /> */}
            </div>
        )
    }
}
