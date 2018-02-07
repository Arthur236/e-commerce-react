import expect from 'expect';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import React from 'react';
import {RegisterUser, mapStateToProps} from '../RegisterUser';

describe('Test Cases For RegisterUser', () => {
    let wrapper = null;

    const props = {
        history: {},
        loading: false,
        registered: false,
        registerMerchant: () => {}
    };

    beforeEach(() => {
        wrapper = shallow(<RegisterUser {...props}/>);
    });

    it('renders correctly', () => {
        expect(wrapper.find('Container').length).toBe(1);
    });

    it('sets loading state on form correctly correctly', () => {
        wrapper.setProps({loading: true});
        expect(wrapper.find('RegistrationForm').dive().find('.loading').length).toBe(1);
    });

    it('correctly maps state to props', () => {
        const state = {
            auth: {
                loading: false,
                registered: false
            }
        };
        const expected = {
            loading: false,
            registered: false
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
