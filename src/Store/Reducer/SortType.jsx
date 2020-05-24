import * as type from "../Action/type";
const initialState = "";

const sort = (state = initialState, action) => {
    switch (action.type) {
        case type.SORT:
            state = action.payload
            return state

        default:
            return state;
    }
};
export default sort;
