import { SET_OK } from './types';


export const setOk = () =>{
    return(dispatch) => {
        console.log("Setting ok");
        dispatch({
            type: SET_OK
        });
    }
}