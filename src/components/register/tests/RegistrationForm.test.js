import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import RegistrationForm from '../RegistrationForm';

describe('Test Cases For RegistrationForm', () => {
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
        wrapper = shallow(<RegistrationForm {...props}/>);
    });

    it('renders correctly', () => {
        expect(wrapper.find('Form').length).toBe(1);
    });
});
