import { SET_SEARCH } from './types';


export const setSearch = (search) =>{
    return(dispatch) => {
        console.log("Setting search: ",search);
        dispatch({
            type: SET_SEARCH,
            payload: search
        });
    }
}