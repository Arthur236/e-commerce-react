import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {Login, mapStateToProps} from '../Login';

describe('Test Cases For Login', () => {
    let wrapper = null;

    const props = {
        history: {},
        loading: false,
        loggedIn: false,
        login: () => {}
    };

    beforeEach(() => {
        wrapper = shallow(<Login {...props}/>);
    });

    it('renders correctly', () => {
        expect(wrapper.find('Container').length).toBe(1);
    });

    it('sets loading state on form correctly correctly', () => {
        wrapper.setProps({loading: true});
        expect(wrapper.find('LoginForm').dive().find('.loading').length).toBe(1);
    });

    it('correctly maps state to props', () => {
        const state = {
            auth: {
                loading: false,
                loggedIn: false
            }
        };
        const expected = {
            loading: false,
            loggedIn: false
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
