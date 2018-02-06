import expect from 'expect';
import {configure, shallow} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Navigation from '../Navigation';

configure({adapter: new Adapter()});

describe('Test Cases For Navigation', () => {
    let wrapper = null;

    const props = {
        history: {
            location: {pathname: ''}
        }
    };

    beforeEach(() => {
        wrapper = shallow(<Navigation {...props}/>);
    });

    it('renders a container div', () => {
        expect(wrapper.find('Container').length).toBe(1);
    });

    it('adds active class to the home link', () => {
        wrapper.setProps({history: {location: {pathname: '/'}}});
        expect(wrapper.find('.active').length).toBe(1);
    });

    it('adds active class to the about link', () => {
        wrapper.setProps({history: {location: {pathname: '/about'}}});
        expect(wrapper.find('.active').length).toBe(1);
    });

    it('adds active class to the contact link', () => {
        wrapper.setProps({history: {location: {pathname: '/contact'}}});
        expect(wrapper.find('.active').length).toBe(1);
    });

    it('adds active class to the register link', () => {
        wrapper.setProps({history: {location: {pathname: '/register'}}});
        expect(wrapper.find('.active').length).toBe(1);
    });

    it('adds active class to the logout link', () => {
        wrapper.setProps({history: {location: {pathname: '/logout'}}});
        expect(wrapper.find('.active').length).toBe(1);
    });
});
