import { takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { loginSaga } from '../sagas/auth';

export function* watchAuth() {
    yield takeLatest(actionTypes.LOGIN, loginSaga);
}