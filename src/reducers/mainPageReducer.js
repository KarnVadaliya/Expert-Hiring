import { SET_CITY, SET_SEARCH } from '../actions/types';

const initialState = {
    city : 'Ahmedabad',
    search : ''
}

export default (state = initialState, action) => {

    switch(action.type){

        case SET_CITY :            
            return{
                ...state,
                city: action.payload
            }
        case SET_SEARCH :           
            return{     
                ...state,       
                search: action.payload
            }
        default:
            return state
    }
}