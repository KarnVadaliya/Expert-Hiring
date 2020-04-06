import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ServiceBar from './ServiceBarComponent';
import Footer from './Footer';
import Services from './ServicesComponent';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Searchbar></Searchbar>
                <ServiceBar></ServiceBar>
                <Services></Services>
                <Footer/>
            </div>
        )
    }
}
