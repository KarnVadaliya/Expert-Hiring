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


  

class ACRepairCart extends Component {
    constructor(props){
        super(props);
  
        this.state = {
          services: ['Servicing','Repairing','Installation'],
          products: []
        };
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/ApplianceRepair/ac')
            .then(res=>{
                console.log(res.data);
                let tempList = []
                res.data.map(product => tempList.push(product));
                this.setState({
                    products: tempList
                })
            })
            .catch(err=>{
                console.log(err)
            });
    }

    getList = (name) =>{
        switch (name) {
            case 'Repairing':
                return global.aRepairList;
            case 'Servicing':
                return global.aServiceList;
            case 'Installation':
                return global.aInstallList;
            default:
                break;
        }
    }

    

    render() {
        let tempList = [];
        this.state.products.map(product => tempList.push(product));
        tempList.map(product => {
            if(this.props.cartState.productsInCart[product.id] != null){
                product.quantity = this.props.cartState.productsInCart[product.id].quantity;
                product.inCart = this.props.cartState.productsInCart[product.id].inCart;
            }else{
                product.quantity = 0;
                product.inCart = false;
            }
        });
        console.log(this.state);
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

        
        const repairCategory = [];
        for(var product in this.state.products){
            if(this.state.products[product].category === 'Repairing')
                repairCategory.push(this.state.products[product])
        }
      

        const serviceCategory = [];
        for(var product in this.state.products){
            if(this.state.products[product].category === 'Servicing')
                serviceCategory.push(this.state.products[product])
        }
        

        const installCategory = [];
        for(var product in this.state.products){
            if(this.state.products[product].category === 'Installation')
                installCategory.push(this.state.products[product])
        }

        

        global.aRepairList = (repairCategory.length) ? (
            repairCategory.map(product => {
                return(                    
                    <ProductCard product={product}/>
                ) 
            })
        ) : (
            <LoadingCard />
        );

        global.aServiceList = (serviceCategory.length) ? (
            serviceCategory.map(product => {
                return(
                    <ProductCard product={product}/>
                ) 
            })
        ) : (
            <LoadingCard />
        );

        global.aInstallList = (installCategory.length) ? (
            installCategory.map(product => {
                return(
                   <ProductCard product={product}/>
                ) 
            })
        ) : (
            <LoadingCard />
        );

        const sectionList = this.state.services.map(service =>{
            return(
                <section id={service.replace(/\s/g,'')} className="service">
                    <h3 style={{fontWeight:"bold", paddingLeft:"10px"}}>{service}</h3>             
                    {this.getList(service)}                            
                </section>
            );
        });
        
        
        return (
            <>

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

                <Link id="back" to="/ApplianceRepair/acRepair"><i className="fa fa-chevron-left" style={{fontSize:"50px", marginLeft:"10%", position:"absolute", top:"9%"}}/></Link>

                <h1 style={{fontWeight:"bold", letterSpacing:"2px", textTransform:"uppercase", textAlign:"center"}}>Professional AC Repairing</h1>
                <br></br><br></br>
                <div className="servicesSection">
                    <div className="servicesNav">
                        <Scrollspy items={ trimmedServices } currentClassName="btn-is-current">
                                {servicesList}
                        </Scrollspy>
                    </div>

                    <div className="servicesDescription" style={{borderLeft:"1px solid gray", paddingLeft:"3%"}}>
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

export default connect(mapStateToProps,{ toggleCartModal, addProductFromDB })(ACRepairCart);