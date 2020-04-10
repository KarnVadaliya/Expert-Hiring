import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import { Button } from "reactstrap";
import {
    Card,
    CardBody,
    CardTitle, CardText, Row, Col, CardImg, Badge
  } from "reactstrap";
import "../../assets/vendor/font-awesome/css/font-awesome.min.css";
import { connect } from 'react-redux';
import { addProductToCart } from '../../actions/addProduct';
import { removeProductFromCart } from '../../actions/removeProduct';
import { toggleCartModal } from '../../actions/toggleCartModal';
import CartModal from '../CartModal';
import cleaningImage from './cleaning.jpg';



  

class SofaCleaning extends Component {
    constructor(props){
        super(props);
  
        this.state = {
          services: ['3 Sofa Seats','5 Sofa Seats','4 Sofa Seats','6 Sofa Seats','7 Sofa Seats','8 Sofa Seats','9 Sofa Seats']
        };
    }

    

    render() {
        console.log(this.props);
        const { services } = this.state;

        const trimmedServices = services.map(category => category.replace(/\s/g,''));

        const servicesList = (services.length) ? (
            services.map(category=>{
                return(
                    <li key={category}><a href={"#"+category.replace(/\s/g, '')}><Button color="default" outline type="button" style={{marginBottom:"6px",marginLeft:"5%"}}>{category}</Button></a></li>
                )
            })
        ):(
            <li><a href={"#fetching"}><Button color="default" outline type="button" style={{marginBottom:"6px"}}>Fetching...</Button></a></li>
        );

        // console.log(typeof(this.props.cartState.products));
        const threeSeatsCategory = [];
        for(var product in this.props.cartState.products){
            if(this.props.cartState.products[product].category === '3 Sofa Seat')
                threeSeatsCategory.push(this.props.cartState.products[product])
        }
        // console.log(threeSeatsCategory);

        const fiveSeatsCategory = [];
        for(var product in this.props.cartState.products){
            if(this.props.cartState.products[product].category === '5 Sofa Seat')
                fiveSeatsCategory.push(this.props.cartState.products[product])
        }
        // console.log(fiveSeatsCategory);

        const fourSeatsCategory = [];
        for(var product in this.props.cartState.products){
            if(this.props.cartState.products[product].category === '4 Sofa Seat')
                fourSeatsCategory.push(this.props.cartState.products[product])
        }
        // console.log(fourSeatsCategory);

        const threeList = (threeSeatsCategory.length) ? (
            threeSeatsCategory.map(product => {
                return(
                    <Row style={{marginBottom:"20px"}}>
                    <Col sm="6">
                        <Card body outline color="default" className="text-center" style={{width:"fit-content"}}>
                        <CardImg top width="100%" src={cleaningImage} alt="Card image cap" />
                            <CardBody>
                                <CardTitle style={{fontWeight:"bold"}}>{product.name}</CardTitle>
                                <CardText>{product.description}</CardText>
                                <CardText>Price: ${product.price}</CardText>
                                <p>Added: {product.quantity}</p>
                                <Button color="success" onClick={() => this.props.addProductToCart(product.id)}>Add{" "}<i className="fa fa-plus"></i></Button>
                                { product.inCart && 
                                <Button color="danger" onClick={() => this.props.removeProductFromCart(product.id)}>Remove{" "}<i className="fa fa-minus"></i></Button>}
                            </CardBody>
                        </Card>
                    </Col>
                    </Row>     
                ) 
            })
        ) : (
            <Row style={{marginBottom:"20px"}}>
                <Col sm="6">
                    <Card body outline color="default" className="text-center">
                        <CardBody>
                          <CardText>Loading...</CardText>               
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );


        const fiveList = (fiveSeatsCategory.length) ? (
            fiveSeatsCategory.map(product => {
                return(
                    <Row style={{marginBottom:"20px"}}>
                    <Col sm="6">
                        <Card body outline color="default" className="text-center" style={{width:"fit-content"}}>
                        <CardImg top width="100%" src={cleaningImage} alt="Card image cap" />
                            <CardBody>
                                <CardTitle style={{fontWeight:"bold"}}>{product.name}</CardTitle>
                                <CardText>{product.description}</CardText>
                                <CardText>Price: ${product.price}</CardText>
                                <p>Added: {product.quantity}</p>
                                <Button color="success" onClick={() => this.props.addProductToCart(product.id)}>Add{" "}<i className="fa fa-plus"></i></Button>
                                { product.inCart && 
                                <Button color="danger" onClick={() => this.props.removeProductFromCart(product.id)}>Remove{" "}<i className="fa fa-minus"></i></Button>}
                            </CardBody>
                        </Card>
                    </Col>
                    </Row>     
                ) 
            })
        ) : (
            <Row style={{marginBottom:"20px"}}>
                <Col sm="6">
                    <Card body outline color="default" className="text-center">
                        <CardBody>
                          <CardText>Loading...</CardText>               
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );


        const fourList = (fourSeatsCategory.length) ? (
            fourSeatsCategory.map(product => {
                return(
                    <Row style={{marginBottom:"20px"}}>
                    <Col sm="6">
                        <Card body outline color="default" className="text-center" style={{width:"fit-content"}}>
                        <CardImg top width="100%" src={cleaningImage} alt="Card image cap" />
                            <CardBody>
                                <CardTitle style={{fontWeight:"bold"}}>{product.name}</CardTitle>
                                <CardText>{product.description}</CardText>
                                <CardText>Price: ${product.price}</CardText>
                                <p>Added: {product.quantity}</p>
                                <Button color="success" onClick={() => this.props.addProductToCart(product.id)}>Add{" "}<i className="fa fa-plus"></i></Button>
                                { product.inCart && 
                                <Button color="danger" onClick={() => this.props.removeProductFromCart(product.id)}>Remove{" "}<i className="fa fa-minus"></i></Button>}
                            </CardBody>
                        </Card>
                    </Col>
                    </Row>     
                ) 
            })
        ) : (
            <Row style={{marginBottom:"20px"}}>
                <Col sm="6">
                    <Card body outline color="default" className="text-center">
                        <CardBody>
                          <CardText>Loading...</CardText>               
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );



        return (
            <div>
                <div className="cartAtBottom" style={{textAlign:"right"}}>
                    <Button onClick={this.props.toggleCartModal} style={{height:"50px", width:"400px", margin:"2px", backgroundImage:"linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7)"}}>
                    <Row>
                        <Col sm="6">
                            <h5 style={{textAlign:"left", color:"white"}}><Badge className="badge-white">{this.props.cartState.cartNumbers}</Badge>&nbsp;&nbsp;${this.props.cartState.cartCost}</h5> 
                        </Col>
                        <Col sm="6">
                            <h5 style={{textAlign:"right", color:"white"}}><i className="fa fa-chevron-up"></i></h5>                             
                        </Col>
                    </Row>
                    <CartModal/>
                    </Button>
                </div>
                
                <h1 style={{fontWeight:"bold", letterSpacing:"2px", textTransform:"uppercase", textAlign:"center"}}>Professional Sofa Cleaning</h1>
                <br></br><br></br>
                <div className="servicesSection">
                    <div className="servicesNav">
                        <Scrollspy items={ trimmedServices } currentClassName="btn-is-current">
                                {servicesList}
                        </Scrollspy>
                    </div>

                    <div className="servicesDescription" style={{borderLeft:"1px solid gray", paddingLeft:"3%"}}>

                        <section id="3SofaSeats" className="service">
                            <h3 style={{fontWeight:"bold", paddingLeft:"10px"}}>3 Sofa Seats</h3>             
                            {threeList}                            
                        </section>

                        <section id="5SofaSeats" className="service">
                            <h3 style={{fontWeight:"bold", paddingLeft:"10px"}}>5 Sofa Seats</h3>
                            {fiveList}
                        </section>


                        <section id="4SofaSeats" className="service">
                            <h3 style={{fontWeight:"bold", paddingLeft:"10px"}}>4 Sofa Seats</h3>
                            {fourList}
                        </section>

                        <section id="6SofaSeats" className="service">
                            <h3 style={{fontWeight:"bold", paddingLeft:"10px"}}>3 Sofa Seats</h3>
                            <Row>
                                <Col sm="6">
                                    <Card body outline color="default" className="text-center">
                                        {/* <CardHeader tag="h3">3 Sofa Seats</CardHeader> */}
                                        <CardBody>
                                            <CardTitle>3 Sofa Seats</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <p>Added: </p>
                                            <Button color="success" onClick={this.props.addProductToCart}>Add{" "}<i className="fa fa-plus"></i></Button>
                                            <Button color="danger">Remove{" "}<i className="fa fa-minus"></i></Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>     
                        </section>
                    </div>

                </div>

                
                    

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cartState: state.cartState
});

export default connect(mapStateToProps,{ addProductToCart, toggleCartModal, removeProductFromCart })(SofaCleaning);