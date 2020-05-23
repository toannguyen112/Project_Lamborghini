import * as type from "../Action/type";

const initialState = [];

const wish = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_TO_WISH: {
      let index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index === -1) {
        state.push(action.payload);
      }
      localStorage.setItem("wish", JSON.stringify(state));
      return [...state];
    }

    case type.DELETE_WISH: {
      let index = state.findIndex((product) => product.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem("wish", JSON.stringify(state));

      return [...state];
    }
    default:
      return state;
  }
};
export default wish;
