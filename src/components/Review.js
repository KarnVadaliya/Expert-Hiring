import React, { Component } from 'react'
import Axios from 'axios';

export default class Review extends Component {
    constructor(props){
        super(props);
        this.state = {
            professionals : []
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/professionals')
            .then(res=>{
                if(Object.keys(res.data).length === 0){
                    console.log("Couldnt fetch data!");
                    return;
                }
                this.setState({
                    professionals: res.data
                })
            })
    }

    render() {
        console.log(this.state.professionals);
        return (
            <div>
                <p>Hello</p>
            </div>
        )
    }
}
