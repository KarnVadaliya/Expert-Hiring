import { REMOVE_PRODUCT_CART } from './types';

export const removeProductFromCart = (productName) =>{
    return(dispatch) => {
        console.log("Deleting from cart");
        console.log("Product: ",productName);
        dispatch({
            type: REMOVE_PRODUCT_CART,
            payload: productName
        });
    }
}