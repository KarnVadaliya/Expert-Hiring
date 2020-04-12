import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ServiceBar from './ServiceBar';
import Services from './Services';

var name = "hello";

export default class Home extends Component {

    render() {
        return (
            <div>
                <Searchbar name={name}></Searchbar>
                <ServiceBar></ServiceBar>
                <Services></Services>
            </div>
        )
    }
}
