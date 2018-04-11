import {instance} from "../utils/helpers";
import * as actionTypes from './actionTypes';

// Register a new user
export const registerUser = user => {
    return instance.post(
        "/auth/register/",
        user
    );
};

// Initiate a register request
export const registerUserRequest = user => {
    return {
        type: actionTypes.REGISTER_USER_REQUEST,
        user
    };
};

// Handle successful registration
export const registerUserSuccess = response => {
    return {
        type: actionTypes.REGISTER_USER_SUCCESS,
        response
    };
};

// Handle registration failure
export const registerUserFail = errors => {
    return {
        type: actionTypes.REGISTER_USER_FAIL,
        errors
    };
};

// Register a merchant
export const registerMerchant = user => {
    return instance.post(
        "/auth/merchant-register/",
        user
    );
};

// Initiate a register request
export const registerMerchantRequest = user => {
    return {
        type: actionTypes.REGISTER_MERCHANT_REQUEST,
        user
    };
};

// Handle successful registration
export const registerMerchantSuccess = response => {
    return {
        type: actionTypes.REGISTER_MERCHANT_SUCCESS,
        response
    };
};

// Handle registration failure
export const registerMerchantFail = errors => {
    return {
        type: actionTypes.REGISTER_MERCHANT_FAIL,
        errors
    };
};

export const login = user => {
    return instance.post(
        "/auth/login/",
        user
    );
};

// Initiate login request
export const loginRequest = user => {
    return {
        type: actionTypes.LOGIN_REQUEST,
        user
    };
};

// Handle login success
export const loginSuccess = response => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        response
    };
};

// Handle login failure
export const loginFail = errors => {
    return {
        type: actionTypes.LOGIN_FAIL,
        errors
    };
};

// Log out a user
export const logout = () => dispatch => {
    localStorage.removeItem("token");
    dispatch(logoutRequest());
};

// Handle log out request
export const logoutRequest = () => {
    return {
        type: actionTypes.LOGOUT_REQUEST
    };
};
