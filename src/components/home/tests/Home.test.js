import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {Home} from '../Home';

describe('Test Cases For Home', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Home/>);
    });

    it('renders grids correctly', () => {
        expect(wrapper.find('Grid').length).toBe(2);
    });
});
