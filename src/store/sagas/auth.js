import { put } from 'redux-saga/effects';
import axios from '../../axios';
import * as actions from '../actions/index';

export function* loginSaga(action) {
    try {
        const data = {
            email: action.email,
            password: action.password
        }
        
        const res = yield axios.post('/user/login', data);
  
        if (res.data.success) {
            yield localStorage.setItem('user_email', res.data.user.email);
            yield put(actions.loginSuccess(res.data.user));
        }
        else {
            yield put(actions.loginFail(res.data.message));
        }
    }
    catch(err) {

    }
}