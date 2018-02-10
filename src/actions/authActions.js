import {instance, setAuthorizationToken} from "../utils/helpers";
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';

// Register a new user
export function registerUser(values) {
    return function (dispatch) {
        dispatch(registerRequest(values));

        return instance.post(
            "/auth/register/",
            values
        ).then(response => {
            dispatch(registerSuccess(response));
        }).catch(error => {
            dispatch(registerFail(error));
            errorHandling.catchError(error);
        });
    };
}

// Register a merchant
export function registerMerchant(values) {
    return function (dispatch) {
        dispatch(registerRequest(values));

        return instance.post(
            "/auth/merchant-register/",
            values
        ).then(response => {
            dispatch(registerSuccess(response));
        }).catch(error => {
            dispatch(registerFail(error));
            errorHandling.catchError(error);
        });
    };
}

// Initiate a register request
export function registerRequest(user) {
    return {
        type: actionTypes.REGISTER_REQUEST,
        user
    };
}

// Handle successful registration
export function registerSuccess(response) {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        response
    };
}

// Handle registration failure
export function registerFail(response) {
    return {
        type: actionTypes.REGISTER_FAIL,
        response
    };
}

// Log in a user
export function login(values) {
    return function (dispatch) {
        dispatch(loginRequest(values));

        return instance.post(
            "/auth/login/",
            values
        ).then(response => {
            localStorage.setItem('token', response.data.token);
            setAuthorizationToken(response.data.token);

            dispatch(loginSuccess(response));
        }).catch(error => {
            dispatch(loginFail(error));
            errorHandling.catchError(error);
        });
    };
}

// Initiate login request
export function loginRequest(user) {
    return {
        type: actionTypes.LOGIN_REQUEST,
        user
    };
}

// Handle login success
export function loginSuccess(response) {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        response
    };
}

// Handle login failure
export function loginFail(response) {
    return {
        type: actionTypes.LOGIN_FAIL,
        response
    };
}

// Log out a user
export function logout() {
    return function (dispatch) {
        localStorage.removeItem("token");
        setAuthorizationToken(false);
        dispatch(logoutRequest());
    };
}

// Handle log out request
export function logoutRequest() {
    return {
        type: actionTypes.LOGOUT_REQUEST
    };
}
