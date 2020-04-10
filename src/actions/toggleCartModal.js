import { TOGGLE_CART_MODAL } from './types';

export const toggleCartModal = () =>{
    return(dispatch) => {
        console.log("Toggling the cart");
        dispatch({
            type: TOGGLE_CART_MODAL
        });
    }
}