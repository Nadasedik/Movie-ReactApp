import { combineReducers } from "redux";
import FavReducer from './reducers/FavReducer'
import MovieReducer from './reducers/movie'


export default combineReducers(
  {  
    Fav:FavReducer,
    movie:MovieReducer
})