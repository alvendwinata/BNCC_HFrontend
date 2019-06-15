import * as actionTypes from '../actions/actionTypes';

export const login = (email, password) => {
    return {
        type: actionTypes.LOGIN,
        email: email,
        password: password
    }
}

export const loginSuccess = (user) => {
    return {    
        type: actionTypes.LOGIN_SUCCESS,
        user: user
    }
}

export const loginFail = (err) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        err: err
    }
}