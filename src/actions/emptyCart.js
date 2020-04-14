import { EMPTY_CART } from './types';

export const emptyCart = () =>{
    return(dispatch) => {
        console.log("Emptying the cart");
        dispatch({
            type: EMPTY_CART
        });
    }
}