import { SET_USER } from '../actions/types';

const initialState = {
    user : {}

}

export default (state = initialState, action) => {

    switch(action.type){

        case SET_USER :
            console.log(action.payload.name);
            return{
                ...state,
                user: action.payload
            }
        default:
            return state;

    }
}