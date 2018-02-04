import expect from 'expect';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from './App';

configure({adapter: new Adapter()});

describe('Test Cases For App', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    it('renders correctly', () => {
        expect(wrapper.length).toBe(1);
    });

    it('renders a common component', () => {
        expect(wrapper.find('Home').length).toBe(1);
    });
});
