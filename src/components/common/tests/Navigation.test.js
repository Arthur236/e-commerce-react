import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {Navigation, mapStateToProps} from '../Navigation';
import PropTypes from "prop-types";

describe('Test Cases For Navigation', () => {
    let wrapper = null;

    const props = {
        history: {
            location: {pathname: ''}
        },
        loading: false,
        loggedIn: false,
        activeUser: {
            username: "User1",
            email: "user1@gmail.com"
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

    it('correctly maps state to props', () => {
        const state = {
            auth: {
                loading: false,
                loggedIn: false,
                activeUser: {
                    username: "User1",
                    email: "user1@gmail.com"
                }
            }
        };
        const expected = {
            loading: false,
            loggedIn: false,
            activeUser: {
                username: "User1",
                email: "user1@gmail.com"
            }
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
