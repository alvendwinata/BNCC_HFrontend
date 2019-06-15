import * as actionTypes from "../actions/actionTypes";

const initialState = {
    user: null,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user
            };
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
};

export default reducer;