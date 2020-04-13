import { ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, ADD_PRODUCT_DB } from "../actions/types";
import { TOGGLE_CART_MODAL } from '../actions/types';


const initialState = {
    cartNumbers: 0,
    showCart: false,
    cartCost: 0,
    products: {},
    productsInCart: {}
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
                },
                productsInCart:{
                    ...state.productsInCart,
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
            let temp = state.productsInCart;
            
            if(removeQuantity.quantity==0){
                delete temp[action.payload.toString()];
                return{
                    ...state,
                    cartNumbers: state.cartNumbers - 1,
                    cartCost: state.cartCost - state.products[action.payload].price,
                    products: {
                        ...state.products,
                        [action.payload]: removeQuantity
                    },
                    productsInCart: temp
                }
            }else{
                return{
                    ...state,
                    cartNumbers: state.cartNumbers - 1,
                    cartCost: state.cartCost - state.products[action.payload].price,
                    products: {
                        ...state.products,
                        [action.payload]: removeQuantity
                    },
                    productsInCart: {
                        ...state.productsInCart,
                        [action.payload]: removeQuantity
                    }
                }
            }
            
               

            
        case ADD_PRODUCT_DB:
            return{
                ...state,
                products: {
                    ...state.products,
                    [action.payload.id]: action.payload
                }
            }
        default:
            return state;
    }
}