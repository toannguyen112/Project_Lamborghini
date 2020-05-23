import * as type from "../Action/type";

const initialState = "";

const keyword = (state = initialState, action) => {
  switch (action.type) {
    case type.KEY_WORD:
      state = action.payload;
      return state;

    default:
      return state;
  }
};
export default keyword;
