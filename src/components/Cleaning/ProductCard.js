import React from 'react';
import { addProductToCart } from '../../actions/addProduct';
import { removeProductFromCart } from '../../actions/removeProduct';
import { connect } from 'react-redux';
import cleaningImage from './cleaning.jpg';
import {
    Card,
    CardBody,
    CardTitle, CardText, Row, Col, CardImg, Badge
  } from "reactstrap";
import { Button } from "reactstrap";

const ProductCard = (props) =>{
    return(
        <>
        <Row style={{marginBottom:"20px"}}>
            <Col sm="6">
                <Card body outline color="default" className="text-center" style={{width:"fit-content"}}>
                <CardImg top width="100%" src={cleaningImage} alt="Card image cap" />
                    <CardBody>
                        <CardTitle style={{fontWeight:"bold"}}>{props.product.name}</CardTitle>
                        <CardText>{props.product.description}</CardText>
                        <CardText>Price: ${props.product.price}</CardText>
                        <p>Added: {props.product.quantity}</p>
                        <Button color="success" onClick={() => props.addProductToCart(props.product.id)}>Add{" "}<i className="fa fa-plus"></i></Button>
                        { props.product.inCart && 
                        <Button color="danger" onClick={() => props.removeProductFromCart(props.product.id)}>Remove{" "}<i className="fa fa-minus"></i></Button>}
                    </CardBody>
                </Card>
            </Col>
        </Row>     
        </>
    );
}

export default connect(null, { addProductToCart, removeProductFromCart })(ProductCard)

