import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ServiceBar from './ServiceBar';
import Services from './Services';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Searchbar></Searchbar>
                <ServiceBar></ServiceBar>
                <Services></Services>
            </div>
        )
    }
}
