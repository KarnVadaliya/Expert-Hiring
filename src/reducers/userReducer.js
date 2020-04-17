import { SET_USER, SET_PAYMENT, SET_OK } from '../actions/types';

const initialState = {
    user : JSON.parse(sessionStorage.getItem('user')) == null ? {} : JSON.parse(sessionStorage.getItem('user'))
    

}

export default (state = initialState, action) => {

    switch(action.type){

        case SET_USER :
            console.log(action.payload.name);
            return{
                ...state,
                user: action.payload,
            }
        case SET_PAYMENT :
            console.log(action.payload);
            return{            
                user:{
                    ...state.user,
                    paymentHistory: {
                        ...state.user.paymentHistory,
                        [action.payload.id]: action.payload
                    }
                }
            }
        default:
            return state;

    }
}