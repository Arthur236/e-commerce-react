import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import FormInput from '../FormInput';

describe('Test Cases For FormInput', () => {
    let wrapper = null;

    const props = {
        type: "text",
        name: "username",
        label: "Username",
        placeholder: "Username",
        value: "",
        required: "",
        error: "",
        onChange: () => {}
    };

    beforeEach(() => {
        wrapper = shallow(<FormInput {...props}/>);
    });

    it('renders correctly', () => {
        expect(wrapper.find('FormField').length).toBe(1);
    });

    it('adds required class correctly', () => {
        wrapper.setProps({required: "required"});
        expect(wrapper.find('.required').length).toBe(1);
    });

    it('adds error class correctly', () => {
        wrapper.setProps({error: "error"});
        expect(wrapper.find('.error').length).toBe(1);
    });
});
