import { createStore ,applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import FavReducer from './reducers/FavReducer'
import thunk from 'redux-thunk'
import combineReducers from './combine';
// const store = createStore(combineReducers,composeWithDevTools(applyMiddleware(thunk)))
const store = createStore(FavReducer,composeWithDevTools())
    
export default store;