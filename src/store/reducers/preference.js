import * as actionTypes from "../actions/actionTypes";

const initialState = {
    current: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_CURR_PREF:
            return {
                ...state,
                current: state.current + 1
            };
        default:
            return state;
    }
};

export default reducer;
