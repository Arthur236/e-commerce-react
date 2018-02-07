import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import LoginForm from '../LoginForm';

describe('Test Cases For LoginForm', () => {
    let wrapper = null;

    const props = {
        loading: "",
        user: {},
        onChange: () => {
        },
        onSave: () => {
        },
        errors: {},
    };

    beforeEach(() => {
        wrapper = shallow(<LoginForm {...props}/>);
    });

    it('renders correctly', () => {
        expect(wrapper.find('Form').length).toBe(1);
    });
});
