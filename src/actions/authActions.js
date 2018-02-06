import * as helpers from '../utils/helpers';
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';

// Register a new user
export function registerUser(values) {
    return function (dispatch) {
        dispatch(registerRequest(values));

        return helpers.instance.post(
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

        return helpers.instance.post(
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
