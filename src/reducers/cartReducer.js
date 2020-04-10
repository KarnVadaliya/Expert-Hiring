import { ADD_PRODUCT_CART, REMOVE_PRODUCT_CART } from "../actions/types";
import { TOGGLE_CART_MODAL } from '../actions/types';

const initialState = {
    cartNumbers: 0,
    showCart: false,
    cartCost: 0,
    products: {
        threeSofaSeats:{
            name: "3 Sofa Seats",
            description: " Lorem Ipsum Otsum jumba",
            price: 20.00,
            quantity: 0,
            inCart: false,
            category: '3 Sofa Seat',
            id: 'threeSofaSeats'
        },
        threeSofa3Cushions:{
            name: "3 Sofa Seats + 3 Cushions",
            description: " Lorem Ipsum Otsum jumba",
            price: 40.00,
            quantity: 0,
            inCart: false,
            category: '3 Sofa Seat',
            id: 'threeSofa3Cushions'
        },
        threeSofa2Fans:{
            name: "3 Sofa + 2 Fans",
            description: " Lorem Ipsum Otsum jumba",
            price: 80.00,
            quantity: 0,
            inCart: false,
            category: '3 Sofa Seat',
            id: 'threeSofa2Fans'
        },
        fiveSofaSeats:{
            name: "5 Sofa Seats",
            description: " Lorem Ipsum Otsum jumba",
            price: 50.00,
            quantity: 0,
            inCart: false,
            category: '5 Sofa Seat',
            id: 'fiveSofaSeats'
        },
        fiveSofa5Cushions:{
            name: "5 Sofa + 5 cushions",
            description: " Lorem Ipsum Otsum jumba",
            price: 100.00,
            quantity: 0,
            inCart: false,
            category: '5 Sofa Seat',
            id: 'fiveSofa5Cushions'
        },
        fiveSofa3Fans:{
            name: "5 Sofa + 3 Fans",
            description: " Lorem Ipsum Otsum jumba",
            price: 120.00,
            quantity: 0,
            inCart: false,
            category: '5 Sofa Seat',
            id: 'fiveSofa3Fans'
        },
        fourSofa3Fans:{
            name: "4 Sofa + 3 Fans",
            description: " Lorem Ipsum Otsum jumba",
            price: 100.00,
            quantity: 0,
            inCart: false,
            category: '4 Sofa Seat',
            id: 'fourSofa3Fans'
        }
    }
    // categories: ['3 Sofa Seats', '5 Sofa Seats', '4 Sofa Seats']
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_CART:
            let addQuantity = {...state.products[action.payload]};
            addQuantity.quantity += 1;
            addQuantity.inCart = true;
            console.log(addQuantity);
            return {
                ...state,
                cartNumbers: state.cartNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: addQuantity
                }
            }
        case TOGGLE_CART_MODAL:
            return{
                ...state,
                showCart: !state.showCart
            }
        case REMOVE_PRODUCT_CART:
            let removeQuantity = {...state.products[action.payload]};
            removeQuantity.quantity -= 1;
            if(removeQuantity.quantity < 0 ) removeQuantity.quantity = 0;
            if(removeQuantity.quantity == 0)
                removeQuantity.inCart = false;
            else
                removeQuantity.inCart = true;
            return{
                ...state,
                cartNumbers: state.cartNumbers - 1,
                cartCost: state.cartCost - state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: removeQuantity
                }
            }
        default:
            return state;
    }
}