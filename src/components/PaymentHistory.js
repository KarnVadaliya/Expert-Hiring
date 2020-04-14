import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row, Table } from 'reactstrap';
import { connect } from 'react-redux';



class PaymentHistory extends Component{
    render(){
        console.log(this.props.userState)
        return(
            <React.Fragment>
            <p>hello</p>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    userState:state.userState
  });
export default connect(mapStateToProps)(PaymentHistory);