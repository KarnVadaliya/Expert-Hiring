import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ServiceBar from './ServiceBarComponent';
import Footer from './Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Searchbar></Searchbar>
                {/* {console.log(this.state.service)} */}
                <ServiceBar></ServiceBar>
                <Footer/>
            </div>
        )
    }
}
