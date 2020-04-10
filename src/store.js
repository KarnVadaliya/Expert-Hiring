import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const intialState = {};
const middleware = [thunk];
const store = createStore(rootReducer, intialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
