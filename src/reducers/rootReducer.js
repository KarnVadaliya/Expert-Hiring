import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import mainPageReducer from './mainPageReducer';

export default combineReducers({
    cartState: cartReducer,
    userState : userReducer,
    mainPageState: mainPageReducer
});
