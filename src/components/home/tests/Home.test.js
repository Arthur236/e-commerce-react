import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {Home} from '../Home';

describe('Test Cases For Home', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Home/>);
    });

    it('renders a grid', () => {
        expect(wrapper.find('Grid').length).toBe(1);
    });
});
