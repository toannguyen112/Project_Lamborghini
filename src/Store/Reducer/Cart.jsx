import * as type from "../Action/type";
const data = JSON.parse(localStorage.getItem("cart"));
const initialState = data ? data : [];

const Cart = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_TO_CART: {
      let index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state[index].qty++;
      } else {
        state.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    }

    case type.DELETE_CART: {
      let index = state.findIndex((product) => product.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(state));

      return [...state];
    }

    case type.CLEAR_CART: {
      state = [];
      localStorage.setItem("cart", JSON.stringify(state))
      return [...state]
    }

    default:
      return state;
  }
};
export default Cart;
