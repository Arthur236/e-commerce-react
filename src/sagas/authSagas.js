import {call, put, takeLatest} from "redux-saga/effects";
import * as actions from "../actions/actionTypes";
import * as authActions from '../actions/authActions';
import {notify} from "react-notify-toast";
import {catchError} from "../utils/errorHandling";

// Register user worker saga
export function* registerUserFlow(action) {
    try {
        const response = yield call(authActions.registerUser, action.user);

        notify.show('You were registered successfully.', 'success');

        yield put(authActions.registerUserSuccess(response));
    } catch (error) {
        yield put(authActions.registerUserFail(error));

        catchError(error);
    }
}

// Register merchant worker saga
export function* registerMerchantFlow(action) {
    try {
        const response = yield call(authActions.registerMerchant, action.user);

        notify.show('You were registered successfully.', 'success');

        yield put(authActions.registerMerchantSuccess(response));
    } catch (error) {
        yield put(authActions.registerMerchantFail(error));

        catchError(error);
    }
}

// Login worker saga
export function* loginFlow(action) {
    try {
        const response = yield call(authActions.login, action.user);

        localStorage.setItem('token', response.data.token);

        notify.show('You were logged in successfully.', 'success');

        yield put(authActions.loginSuccess(response));
    } catch (error) {
        yield put(authActions.loginFail(error));

        catchError(error);
    }
}

// Register user watcher saga.
// Spawn a new task on each action
export function* registerUserWatcher() {
    yield takeLatest(actions.REGISTER_USER_REQUEST, registerUserFlow);
}

// Register merchant watcher saga.
export function* registerMerchantWatcher() {
    yield takeLatest(actions.REGISTER_MERCHANT_REQUEST, registerMerchantFlow);
}

// Login watcher saga.
export function* loginWatcher() {
    yield takeLatest(actions.LOGIN_REQUEST, loginFlow);
}
