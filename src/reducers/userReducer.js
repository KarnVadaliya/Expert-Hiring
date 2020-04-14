import { SET_USER } from '../actions/types';

const initialState = {
    User : {}
}

export default (state = initialState, action) => {

    switch(action.type){

        case SET_USER :
            return{
                ...state,
                User: action.payload
            }

            default:
                return state;


    }
}