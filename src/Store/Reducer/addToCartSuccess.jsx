import * as type from "../Action/type";

const initialState = false;

const addToCartSuccess = (state = initialState, action) => {
    switch (action.type) {
        case type.ADD_TO_CART_SUCCESS:
            state = !state

        default:
            return state;
    }
};
export default addToCartSuccess;
