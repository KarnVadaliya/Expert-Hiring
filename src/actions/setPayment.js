import { SET_PAYMENT } from './types';

export const setPayment = (payment) =>{
    return(dispatch) => {
        console.log("Setting payment");
        console.log("Payment Object: ",payment);
        dispatch({
            type: SET_PAYMENT,
            payload: payment
        });
    }
}