import * as type from "../Action/type";
import data from "../../Data/data.json";
const initialState = data ? data : null;

const products = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PRODUCT:
      return state;

    default:
      return state;
  }
};
export default products;
