import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, UncontrolledAlert } from 'reactstrap';
import { connect } from 'react-redux';
import { toggleCartModal } from '../../../../actions/toggleCartModal';
import {
    Card,
    CardBody,
    CardTitle, CardText
  } from "reactstrap";
  import { removeProductFromCart } from '../../../../actions/removeProduct';
  import { addProductToCart } from '../../../../actions/addProduct';
  import { Link, Redirect } from 'react-router-dom';


 class CartModal extends React.Component {
        constructor(props){
            super(props);
            this.state = {                
                error: true               
            }
        }

        handleOnClick = (e) =>{
            
            if(Object.keys(this.props.userState.user).length === 0){
                alert("Please login to checkout");
            }else{
                this.props.toggleCartModal();
                this.setState({
                    error: false
                })
            }
        }
    
        render(){
            
            if(!this.state.error)
               return <Redirect to="/payment"/>
            console.log(this.props);

            const productsList = [];
            for(var product in this.props.cartState.productsInCart){
                productsList.push(this.props.cartState.productsInCart[product])
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
                                <Button color="success" onClick={() => this.props.addProductToCart(product)}>Add{" "}<i className="fa fa-plus"></i></Button>
                                <Button color="danger" onClick={()=>this.props.removeProductFromCart(product)}>Remove{" "}<i className="fa fa-minus"></i></Button>
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
                console.log(this.props.cartState.productsInCart)
            
              
       
            
        return(
            <div>
                <Modal isOpen={this.props.cartState.showCart} toggle={this.props.toggleCartModal} size="md">
                    <ModalBody>
                        <h3 style={{textAlign:"center", fontWeight:"bold"}}>Your Shopping Cart</h3>
                        {productsInCart}
                        <br></br>
                        <br></br>
                        <h5 style={{fontWeight:"bold", textAlign:"center"}}>TOTAL: $ {this.props.cartState.cartCost}</h5>
                    </ModalBody>
                    <ModalFooter>
                    {   this.props.cartState.cartCost!=0 && <Button color="primary" onClick={this.handleOnClick}>CHECKOUT</Button> }                        
                    <Button color="secondary" onClick={this.props.toggleCartModal}>Cancel</Button>                    
                    </ModalFooter>                   
                </Modal>
                
            </div>
        );
        }
        
 }

 const mapStateToProps = state =>({
    cartState: state.cartState,
    userState: state.userState
 });

 export default connect(mapStateToProps, { toggleCartModal, removeProductFromCart, addProductToCart })(CartModal);