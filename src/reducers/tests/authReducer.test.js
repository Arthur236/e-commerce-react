import expect from "expect";
import * as types from "../../actions/actionTypes";
import reducer from "../authReducer";
import initialState from '../initialState';

let action = {
    "type": "",
    "response": {},
    "user": {}
};

const userPayload = {
    "id": 1,
    "username": "User 1",
    "email": "user1@gmail.com",
    "password": "password"
};

describe('Test Cases For Auth Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle REGISTER_REQUEST', () => {
        action.type = types.REGISTER_REQUEST;

        let state = reducer(initialState, action);

        expect(state.registered).toBe(false);
        expect(state.loading).toBe(true);
    });

    it('should handle REGISTER_SUCCESS', () => {
        action.type = types.REGISTER_SUCCESS;

        let state = reducer(initialState, action);

        expect(state.registered).toBe(true);
        expect(state.loading).toBe(false);
    });

    it('should handle REGISTER_FAIL', () => {
        action.type = types.REGISTER_FAIL;

        let state = reducer(initialState, action);

        expect(state.registered).toBe(false);
        expect(state.loading).toBe(false);
    });
});
