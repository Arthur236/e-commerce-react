import expect from 'expect';
import React from 'react';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import * as authActions from '../authActions';
import * as types from '../actionTypes';
import * as helpers from '../../utils/helpers';

const middleware = [thunk];
const mockAxios = new MockAdapter(helpers.instance);
const mockStore = configureMockStore(middleware);
const userPayload = {username: 'User 1', email: 'user1@gmail.com', password: 'password'};
const emptyResponse = {};

describe('Tests For RegisterUser Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should register successfully', () => {
        mockAxios.onPost('/auth/register').reply(201, userPayload);

        const expectedActions = [
            {type: types.REGISTER_REQUEST},
            {type: types.REGISTER_SUCCESS, user: userPayload},
        ];

        const store = mockStore({user: {}});

        return store.dispatch(authActions.registerUser(userPayload)).then(() => {

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {});
    });

    it('returns an object with the type of REGISTER_REQUEST', function () {
        expect(authActions.registerRequest(userPayload)).toEqual({
            type: types.REGISTER_REQUEST,
            user: userPayload
        });
    });

    it('returns an object with the type of REGISTER_SUCCESS', function () {
        expect(authActions.registerSuccess(emptyResponse)).toEqual({
            type: types.REGISTER_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of REGISTER_FAIL', function () {
        expect(authActions.registerFail(emptyResponse)).toEqual({
            type: types.REGISTER_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For RegisterMerchant Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should register successfully', () => {
        mockAxios.onPost('/auth/merchant-register').reply(201, userPayload);

        const expectedActions = [
            {type: types.REGISTER_REQUEST},
            {type: types.REGISTER_SUCCESS, user: userPayload},
        ];

        const store = mockStore({user: {}});

        return store.dispatch(authActions.registerMerchant(userPayload)).then(() => {

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {
        });
    });
});
