import expect from 'expect';
import {mount} from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import Notifications, {notify} from 'react-notify-toast';
import {Navigation, mapStateToProps} from '../Navigation';
import configureStore from "../../../store/configureStore";

describe('Navigation', () => {
    let wrapper = null;
    const store = configureStore();

    const setup = (loading, loggedIn, merchant) => {
        const props = {
            history: {
                location: {pathname: ''}
            },
            loading: loading,
            loggedIn: loggedIn,
            activeUser: {
                username: "User1",
                email: "user1@gmail.com",
                merchant: merchant
            },
            logout: () => {}
        };

        return mount(
            <Provider store={store}>
                <div>
                    <Notifications/>
                    <Router>
                        <Navigation {...props}/>
                    </Router>
                </div>
            </Provider>
        );
    };

    it('renders a container div', () => {
        wrapper = setup(false, false, false);
        expect(wrapper.find('Container').length).toBe(1);
    });

    it('renders user links', () => {
        wrapper = setup(false, true, false);
        expect(wrapper.find('Dropdown').find('a').length).toBe(2);
    });

    it('renders merchant links', () => {
        wrapper = setup(false, true, true);
        expect(wrapper.find('Dropdown').find('a').length).toBe(3);
    });

    it('logs out correctly', () => {
        const notifyStub = sinon.stub(notify, 'show');
        wrapper = setup(false, true, false);
        const logoutLink = wrapper.find('DropdownMenu').find('DropdownItem').last().find('a');

        logoutLink.simulate('click', {
            preventDefault() {}
        });

        expect(notifyStub.calledOnce).toBe(true);
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
