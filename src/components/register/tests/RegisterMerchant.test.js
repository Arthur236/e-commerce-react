import expect from 'expect';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import Notifications from 'react-notify-toast';
import RegisterMerchant, {RegisterMerchant as RMerchant, mapStateToProps} from '../RegisterMerchant';
import configureStore from "../../../store/configureStore";

const store = configureStore();
let check = false;

describe('Test Cases For RegisterMerchant', () => {
    let wrapper = null;
    let registerForm;

    const props = {
        history: {
            location: {pathname: ''}
        },
        loading: false,
        registered: false,
        registerMerchant: () => {
            check = true;
        }
    };

    function setupShallow() {
        wrapper = shallow(<RMerchant {...props}/>);
    }

    function setupMount() {
        wrapper = mount(
            <Provider store={store}>
                <div>
                    <Notifications/>
                    <Router>
                        <RegisterMerchant {...props}/>
                    </Router>
                </div>
            </Provider>);
    }

    it('renders correctly', () => {
        setupShallow();
        expect(wrapper.find('Container').length).toBe(1);
    });

    it('sets loading state on form correctly correctly', () => {
        setupShallow();
        wrapper.setProps({loading: true});
        expect(wrapper.find('RegistrationForm').dive().find('.loading').length).toBe(1);
    });

    // it('calls registerMerchant successfully', () => {
    //     setupShallow();
    //     let callback = sinon.spy();
    //     wrapper.setState({
    //         user: {
    //             username: "user",
    //             email: "user@gmail.com",
    //             password: "password",
    //             password2: "password"
    //         },
    //         errors: {}
    //     });
    //     let button = wrapper.find('RegistrationForm').dive().find('Button');
    //     button.simulate('click', {
    //         preventDefault() {
    //         }
    //     });
    //     expect(check).toBe(true);
    // });

    // it('calls registerMerchant successfully', () => {
    //     setupMount();
    //     registerForm = sinon.spy(RegisterMerchant.prototype, 'saveMerchant');
    //     wrapper.update();
    //     let button = wrapper.find('RegistrationForm').dive().find('Button');
    //     button.simulate('click', {
    //         preventDefault() {
    //         }
    //     });
    //     expect(registerForm).toHaveBeenCalled();
    // });

    it('correctly maps state to props', () => {
        const state = {
            auth: {
                loading: false,
                registered: false
            }
        };
        const expected = {
            loading: false,
            registered: false
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
