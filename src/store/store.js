import { createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import FavReducer from './reducers/FavReducer'


const store = createStore(FavReducer,composeWithDevTools())
    
export default store;