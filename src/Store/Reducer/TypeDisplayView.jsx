
import * as type  from '../Action/type'
const initialState = false

 const TypeDisplayView = (state = initialState, action) => {
    switch (action.type) {
        case type.CHANGE__VIEW:
            state = !state
            return state

        default:
            return state
    }
}
export default TypeDisplayView
