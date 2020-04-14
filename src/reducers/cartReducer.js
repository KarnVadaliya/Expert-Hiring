import { ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, EMPTY_CART} from "../actions/types";
import { TOGGLE_CART_MODAL } from '../actions/types';

const initialState = {
    cartNumbers: 0,
    showCart: false,
    cartCost: 0,
    productsInCart: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_CART:
            let addQuantity = {...state.productsInCart[action.payload]};
            console.log(Object.keys(addQuantity).length===0);
            if(Object.keys(addQuantity).length === 0){
                addQuantity = action.payload
            }
            addQuantity.quantity += 1;
            addQuantity.inCart = true;
 
            return {
                ...state,
                cartNumbers: state.cartNumbers + 1,
                cartCost: state.cartCost + addQuantity.price,
                productsInCart:{
                    ...state.productsInCart,
                    [action.payload.id]: addQuantity
                }
            }
        case TOGGLE_CART_MODAL:
            return{
                ...state,
                showCart: !state.showCart
            }
        case REMOVE_PRODUCT_CART:
            // let removeQuantity = {...state.productsInCart[action.payload]};
            let removeQuantity = action.payload;
            removeQuantity.quantity -= 1;
            if(removeQuantity.quantity < 0 ) {
                removeQuantity.quantity = 0;
            }
            if(removeQuantity.quantity == 0)
                removeQuantity.inCart = false;
            else
                removeQuantity.inCart = true;
            let temp = state.productsInCart;
            if(removeQuantity.quantity===0){
                delete temp[action.payload.id.toString()];
                // console.log(temp);
                return{
                    ...state,
                    cartNumbers: state.cartNumbers - 1,
                    cartCost: state.cartCost - removeQuantity.price,
                    productsInCart: temp
                }
            }else{
                return{
                    ...state,
                    cartNumbers: state.cartNumbers - 1,
                    cartCost: state.cartCost - removeQuantity.price,
                    productsInCart: {
                        ...state.productsInCart,
                        [action.payload.id]: removeQuantity
                    }
                }
            }
        case EMPTY_CART:
            return{
                cartNumbers: 0,
                showCart: false,
                cartCost: 0,
                productsInCart: {}
            }
        default:
            return state;
    }
}