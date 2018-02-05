import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import Navigation from '../Navigation';

describe('Test Cases For Navigation', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Navigation/>);
    });

    it('renders a container div', () => {
        expect(wrapper.find('Container').length).toBe(1);
    });
});
