import { takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { loginSaga, registerSaga } from "../sagas/auth";

export function* watchAuth() {
    yield takeLatest(actionTypes.LOGIN, loginSaga);
    yield takeLatest(actionTypes.REGISTER, registerSaga);
}
