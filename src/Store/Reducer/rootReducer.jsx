import { combineReducers } from "redux";

import TypeDisplayView from './TypeDisplayView'
import Cart from './Cart'
import Products from './Products'
import Wish from './Wish'
import keyword from './KeyWord'




const rootReducer = combineReducers({
    TypeDisplayView,
    Cart,
    Products,
    Wish,
    keyword
  
});

export default rootReducer;
