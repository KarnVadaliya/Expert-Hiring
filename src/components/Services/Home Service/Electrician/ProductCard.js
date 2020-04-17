import React from 'react';
import { addProductToCart } from '../../../../actions/addProduct';
import { removeProductFromCart } from '../../../../actions/removeProduct';
import { connect } from 'react-redux';
import cleaningImage from './cleaning.jpg';
import {
    Card,
    CardBody,
    CardTitle, CardText, Row, Col, CardImg, Badge
  } from "reactstrap";
import { Button } from "reactstrap";

const ProductCard = (props) =>{
    // {console.log(props.product)}
    return(
        <>
        <Row style={{marginBottom:"20px"}}>
            <Col sm="6">
                <Card body outline color="default" className="text-center" style={{width:"fit-content"}}>
                <CardImg top width="100%" src={require("../../../../assets/img/electrician/"+props.product.image)} alt="Card image cap" />
                    <CardBody>
                        <CardTitle style={{fontWeight:"bold"}}>{props.product.name}</CardTitle>
                        <CardText>{props.product.description}</CardText>
                        <CardText>Price: ${props.product.price}</CardText>
                        <p>Added: {props.product.quantity}</p>
                        <Button color="success" onClick={() => props.addProductToCart(props.product)}>Add{" "}<i className="fa fa-plus"></i></Button>
                        { props.product.inCart && 
                        <Button color="danger" onClick={() => props.removeProductFromCart(props.product)}>Remove{" "}<i className="fa fa-minus"></i></Button>}
                    </CardBody>
                </Card>
            </Col>
        </Row>     
        </>
    );
}
const mapStateToProps = (state) => ({
    cartState: state.cartState
});
export default connect(mapStateToProps, { addProductToCart, removeProductFromCart })(ProductCard)

