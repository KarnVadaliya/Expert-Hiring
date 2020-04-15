import { SET_CITY } from './types';


export const setCity = (city) =>{
    return(dispatch) => {
        console.log("Setting city: ",city);
        dispatch({
            type: SET_CITY,
            payload: city
        });
    }
}