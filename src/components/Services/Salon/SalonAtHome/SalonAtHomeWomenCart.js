import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import { Button } from "reactstrap";
import { Row, Col, Badge } from "reactstrap";
import "../../../../assets/vendor/font-awesome/css/font-awesome.min.css";
import { connect } from 'react-redux';
import { toggleCartModal } from '../../../../actions/toggleCartModal';
import CartModal from '../../Cleaning/SofaCleaning/CartModal';
import { addProductFromDB } from '../../../../actions/addInputs/addProductFromDB';
import Axios from 'axios';
import ProductCard from './ProductCard';
import LoadingCard from './LoadingCard';
import { Link } from "react-router-dom";




class SalonAtHomeWomenCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            services: ['Honey Waxing', 'Rica Waxing', 'Threading', 'Fruit Facials', 'Gold and Detan Facials', 'Manicure', 'Pedicure',],
            products: []
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/salon/salonSpa/')
            .then(res => {
                console.log(res.data);
                let tempList = [];
                res.data.map(product => tempList.push(product));
                this.setState({
                    products: tempList
                })
            })
            .catch(err => {
                console.log(err)
            });
    }

    getList = (name) => {
        switch (name) {
            case 'Honey Waxing':
                return global.honeyWaxingList;
            case 'Rica Waxing':
                return global.ricaWaxingList;
            case 'Threading':
                return global.threadingList;
            case 'Fruit Facials':
                return global.fruitFacialList;
            case 'Gold and Detan Facials':
                return global.goldDetanFacialList;
            case 'Manicure':
                return global.manicureList;
            case 'Pedicure':
                return global.pedicureList;

            default:
                break;
        }
    }



    render() {
        let tempList = [];
        this.state.products.map(product => tempList.push(product));
        tempList.map(product => {
            if (this.props.cartState.productsInCart[product.id] != null) {
                product.quantity = this.props.cartState.productsInCart[product.id].quantity;
                product.inCart = this.props.cartState.productsInCart[product.id].inCart;
            } else {
                product.quantity = 0;
                product.inCart = false;
            }
        });

        console.log(this.state);
        const { services } = this.state;

        const trimmedServices = services.map(category => category.replace(/\s/g, ''));

        const servicesList = (services.length) ? (
            services.map(category => {
                return (
                    <li key={category}><a href={"#" + category.replace(/\s/g, '')}><Button color="default" outline type="button" style={{ marginBottom: "6px", marginLeft: "5%" }}>{category}</Button></a></li>
                )
            })
        ) : (
                <li><a href={"#fetching"}><Button color="default" outline type="button" style={{ marginBottom: "6px" }}>Fetching...</Button></a></li>
            );


        const honeyWaxingCategory = [];
        tempList.map(product => {
            if (product.category === 'Honey Waxing')
                honeyWaxingCategory.push(product);
        });


        const ricaWaxingCategory = [];
        tempList.map(product => {
            if (product.category === 'Rica Waxing')
                ricaWaxingCategory.push(product);
        });


        const threadingCategory = [];
        tempList.map(product => {
            if (product.category === 'Threading')
                threadingCategory.push(product);
        });

        const fruitFacialCategory = [];
        tempList.map(product => {
            if (product.category === 'Fruit Facial')
                fruitFacialCategory.push(product);
        });


        const goldDetanFacialCategory = [];
        tempList.map(product => {
            if (product.category === 'Fruit Facial')
                goldDetanFacialCategory.push(product);
        });

        const manicureCategory = [];
        tempList.map(product => {
            if (product.category === 'Fruit Facial')
                manicureCategory.push(product);
        });

        const pedicureCategory = [];
        tempList.map(product => {
            if (product.category === 'Fruit Facial')
                pedicureCategory.push(product);
        });

        global.honeyWaxingList = (honeyWaxingCategory.length) ? (
            honeyWaxingCategory.map(product => {
                return (
                    <ProductCard product={product} />
                )
            })
        ) : (
                <LoadingCard />
            );

        global.ricaWaxingList = (ricaWaxingCategory.length) ? (
            ricaWaxingCategory.map(product => {
                return (
                    <ProductCard product={product} />
                )
            })
        ) : (
                <LoadingCard />
            );

        global.threadingList = (threadingCategory.length) ? (
            threadingCategory.map(product => {
                return (
                    <ProductCard product={product} />
                )
            })
        ) : (
                <LoadingCard />
            );
        global.fruitFacialList = (fruitFacialCategory.length) ? (
            fruitFacialCategory.map(product => {
                return (
                    <ProductCard product={product} />
                )
            })
        ) : (
                <LoadingCard />
            );



        global.goldDetanFacialList = (goldDetanFacialCategory.length) ? (
            goldDetanFacialCategory.map(product => {
                return (
                    <ProductCard product={product} />
                )
            })
        ) : (
                <LoadingCard />
            );
        global.manicureList = (manicureCategory.length) ? (
            manicureCategory.map(product => {
                return (
                    <ProductCard product={product} />
                )
            })
        ) : (
                <LoadingCard />
            );
        global.pedicureList = (pedicureCategory.length) ? (
            pedicureCategory.map(product => {
                return (
                    <ProductCard product={product} />
                )
            })
        ) : (
                <LoadingCard />
            );
        const sectionList = this.state.services.map(service => {
            return (
                <section id={service.replace(/\s/g, '')} className="service">
                    <h3 style={{ fontWeight: "bold", paddingLeft: "10px" }}>{service}</h3>
                    {this.getList(service)}
                </section>
            );
        });


        return (
            <>

                <div className="cartAtBottom" style={{ textAlign: "right" }}>
                    <Button onClick={this.props.toggleCartModal} style={{ height: "50px", width: "400px", margin: "2px", backgroundImage: "linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7)" }}>
                        <Row>
                            <Col sm="6">
                                <h5 style={{ textAlign: "left", color: "white" }}><Badge className="badge-white">{this.props.cartState.cartNumbers}</Badge>&nbsp;&nbsp;${this.props.cartState.cartCost}</h5>
                            </Col>
                            <Col sm="6">
                                <h5 style={{ textAlign: "right", color: "white" }}><i className="fa fa-chevron-up"></i></h5>
                            </Col>
                        </Row>
                        <CartModal />
                    </Button>
                </div>

                <Link id="back" to="/Salon/salonAtHomeWomen"><i className="fa fa-chevron-left" style={{ fontSize: "50px", marginLeft: "10%", position: "absolute", top: "9%" }} /></Link>

                <h1 style={{ fontWeight: "bold", letterSpacing: "2px", textTransform: "uppercase", textAlign: "center" }}>Salon at Home (Women)</h1>
                <br></br><br></br>
                <div className="servicesSection">
                    <div className="servicesNav">
                        <Scrollspy items={trimmedServices} currentClassName="btn-is-current">
                            {servicesList}
                        </Scrollspy>
                    </div>

                    <div className="servicesDescription" style={{ borderLeft: "1px solid gray", paddingLeft: "3%" }}>
                        {sectionList}
                    </div>

                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    cartState: state.cartState
});

export default connect(mapStateToProps, { toggleCartModal, addProductFromDB })(SalonAtHomeWomenCart);