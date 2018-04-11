import expect from 'expect';
import moxios from 'moxios';
import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as authActions from '../authActions';
import * as types from '../actionTypes';
import {instance} from '../../utils/helpers';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});
const userPayload = {username: 'User 1', email: 'user1@gmail.com', password: 'password'};

const localStorageMock = {
    getItem: () => {
    },
    setItem: () => {
    },
    removeItem: () => {
    }
};

global.localStorage = localStorageMock;

describe('Tests For RegisterUser Actions', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('should register a user successfully', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 201,
                response: {
                    data: {
                        userPayload
                    }
                },
            });
        });

        const expectedActions = [
            {type: types.REGISTER_REQUEST, user: userPayload},
            {type: types.REGISTER_SUCCESS, response: userPayload},
        ];

        return store.dispatch(authActions.registerUser(userPayload)).then(() => {
            expect(store.getActions()).toContain(expectedActions);
        });
    });

    it('returns an object with the type of REGISTER_REQUEST', function () {
        expect(authActions.registerRequest(userPayload)).toEqual({
            type: types.REGISTER_REQUEST,
            user: userPayload
        });
    });

    it('returns an object with the type of REGISTER_SUCCESS', function () {
        expect(authActions.registerSuccess({})).toEqual({
            type: types.REGISTER_SUCCESS,
            response: {}
        });
    });

    it('returns an object with the type of REGISTER_FAIL', function () {
        expect(authActions.registerFail({})).toEqual({
            type: types.REGISTER_FAIL,
            response: {}
        });
    });
});

describe('Tests For RegisterMerchant Actions', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('should register successfully', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 201,
                response: {
                    data: {
                        userPayload
                    }
                },
            });

            const expectedActions = [
                {type: types.REGISTER_REQUEST, user: userPayload},
                {type: types.REGISTER_SUCCESS, user: userPayload},
            ];

            return store.dispatch(authActions.registerMerchant(userPayload)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
});

describe('Tests For Log In Actions', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    const payLoad = {
        "message": "You logged in successfully."
    };

    it('should log in successfully', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {
                    userPayload
                },
            });

            const expectedActions = [
                {type: types.LOGIN_REQUEST, user: userPayload},
                {type: types.LOGIN_SUCCESS, response: payLoad},
            ];

            return store.dispatch(authActions.login(userPayload)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });

    it('returns an object with the type of LOGIN_REQUEST', function () {
        expect(authActions.loginRequest(userPayload)).toEqual({
            type: types.LOGIN_REQUEST,
            user: userPayload
        });
    });

    it('returns an object with the type of LOGIN_SUCCESS', function () {
        expect(authActions.loginSuccess({})).toEqual({
            type: types.LOGIN_SUCCESS,
            response: {}
        });
    });

    it('returns an object with the type of LOGIN_FAIL', function () {
        expect(authActions.loginFail({})).toEqual({
            type: types.LOGIN_FAIL,
            response: {}
        });
    });
});

describe('Tests For Log Out Actions', () => {
    it('should log out successfully', () => {
        const expectedActions = [
            {type: types.LOGOUT_REQUEST}
        ];

        const store = mockStore({});

        store.dispatch(authActions.logout());
        expect(store.getActions()).toEqual(expectedActions);
        expect(localStorageMock.removeItem.toHaveBeenCalled);
    });

    it('returns an object with the type of LOGOUT_REQUEST', function () {
        expect(authActions.logoutRequest()).toEqual({
            type: types.LOGOUT_REQUEST
        });
    });
});
