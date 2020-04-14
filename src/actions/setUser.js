import { SET_USER } from './types';


export const setUser = (user) =>{
    return(dispatch) => {
        console.log("Setting user: ",user);
        dispatch({
            type: SET_USER,
            payload: user
        });
    }
}