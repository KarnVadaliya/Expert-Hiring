import { ADD_PRODUCT_DB } from '../types';

export const addProductFromDB = (product) =>{
    return(dispatch) => {
        console.log("Adding to cart");
        console.log("Product: ",product);
        dispatch({
            type: ADD_PRODUCT_DB,
            payload: product
        });
    }
}