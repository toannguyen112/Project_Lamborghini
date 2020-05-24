import { combineReducers } from "redux";

import TypeDisplayView from './TypeDisplayView'
import Cart from './Cart'
import Products from './Products'
import Wish from './Wish'
import keyword from './KeyWord'
import Sort from './SortType'





const rootReducer = combineReducers({
    TypeDisplayView,
    Cart,
    Products,
    Wish,
    keyword,
    Sort
  
});

export default rootReducer;
