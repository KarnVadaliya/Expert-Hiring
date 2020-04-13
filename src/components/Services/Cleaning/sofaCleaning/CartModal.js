import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { toggleCartModal } from '../../../../actions/toggleCartModal';
import {
    Card,
    CardBody,
    CardTitle, CardText
  } from "reactstrap";
  import { removeProductFromCart } from '../../../../actions/removeProduct';
  import { addProductToCart } from '../../../../actions/addProduct';
  import { Link } from 'react-router-dom';


 const CartModal = (props) => {
    
        console.log(props);
        const productsList = [];
        for(var product in props.cartState.productsInCart){
            productsList.push(props.cartState.productsInCart[product])
        }
        console.log(productsList);

        const productsInCart = productsList.length ? (
            productsList.map(product=>{
                return (
                    <Card key={product.id} body outline color="default" className="text-center" style={{marginTop:"20px"}}>
                        <CardBody>
                            <CardTitle style={{fontWeight:"bold"}}>{product.name}</CardTitle>
                            <CardText>{product.description}</CardText>
                            <CardText>Price: ${product.price}</CardText>
                            <p>Added: {product.quantity}</p>
                            <Button color="success" onClick={() => props.addProductToCart(product)}>Add{" "}<i className="fa fa-plus"></i></Button>
                            <Button color="danger" onClick={()=>props.removeProductFromCart(product)}>Remove{" "}<i className="fa fa-minus"></i></Button>
                        </CardBody>
                    </Card>
                );
            })
        ):(
            <Card body outline color="default" className="text-center" style={{marginTop:"40px"}}>
                <CardBody>                       
                    <CardText>Your Cart is Empty!</CardText>
                </CardBody>
            </Card>
        );
            console.log(props.cartState.productsInCart)
     return(
         <div>
            <Modal isOpen={props.cartState.showCart} toggle={props.toggleCartModal} size="md">
                <ModalBody>
                    <h3 style={{textAlign:"center", fontWeight:"bold"}}>Your Shopping Cart</h3>
                    {productsInCart}
                    <br></br>
                    <br></br>
                    <h5 style={{fontWeight:"bold", textAlign:"center"}}>TOTAL: $ {props.cartState.cartCost}</h5>
                </ModalBody>
                <ModalFooter>
                {   props.cartState.cartCost!=0 &&
                    <Link to={{ pathname: "/payment"}} ><Button color="primary" >CHECKOUT</Button></Link>}{' '}
                <Button color="secondary" onClick={props.toggleCartModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
         </div>
     );
 }

 const mapStateToProps = state =>({
    cartState: state.cartState
 });

 export default connect(mapStateToProps, { toggleCartModal, removeProductFromCart, addProductToCart })(CartModal);