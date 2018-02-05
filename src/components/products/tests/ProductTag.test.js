import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import ProductTag from '../ProductTag';

describe('Test Cases For Home', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<ProductTag/>);
    });

    it('renders correctly', () => {
        expect(wrapper.find('Segment').length).toBe(1);
    });
});
