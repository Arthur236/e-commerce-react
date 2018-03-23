import expect from 'expect';
import {mount, shallow} from 'enzyme';
import moxios from 'moxios';
import React from 'react';
import {notify} from 'react-notify-toast';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import sinon from 'sinon';
import configureStore from "../../../store/configureStore";
import {Login, mapStateToProps} from '../Login';
import * as helpers from "../../../utils/helpers";

describe('Test Cases For Login', () => {
    let wrapper = null;
    const store = configureStore();

    const setupShallow = (loading, loggedIn) => {
        const props = {
            history: {},
            loading: loading,
            loggedIn: loggedIn,
            login: sinon.stub()
        };

        return shallow(<Login {...props}/>);
    };

    const setupMount = (loading, loggedIn) => {
        const props = {
            history: {},
            loading: loading,
            loggedIn: loggedIn,
            login: () => {}
        };

        return mount(
            <Provider store={store}>
                <div>
                    <Router>
                        <Login {...props}/>
                    </Router>
                </div>
            </Provider>
        );
    };

    beforeEach(function () {
        moxios.install(helpers.instance);
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('renders correctly', () => {
        wrapper = setupShallow(false, false);
        expect(wrapper.find('Container').length).toBe(1);
    });

    it('sets loading state on form correctly', () => {
        wrapper = setupShallow(false, false);
        wrapper.setProps({loading: true});
        expect(wrapper.find('LoginForm').dive().find('.loading').length).toBe(1);
    });

    it('logs in a user', () => {
        // const loginSpy = sinon.spy(Login.prototype, 'loginUser');
        // wrapper = setupMount(false, false);
        //
        // wrapper.instance().loginUser({
        //     preventDefault() {},
        //     target: { email: "user1@gmail.com", password: "password" }
        // });
        // moxios.stubRequest(helpers.ROOT_URL + "/login", {
        //     status: 200
        // });
        // const notifyStub = sinon.stub(notify, 'show');
        // const btn = wrapper.find('[type="submit"]').last();
        //
        // moxios.wait(function () {
        //     expect(notifyStub.calledOnce).toBel(true);
        //     done();
        // });
        // // btn.simulate('click', {
        // //     preventDefault() {},
        // //     target: { email: "user1@gmail.com", password: "password" }
        // // });
        // notifyStub.restore();
    });

    it('correctly maps state to props', () => {
        const state = {
            auth: {
                loading: false,
                loggedIn: false
            }
        };
        const expected = {
            loading: false,
            loggedIn: false
        };

        expect(mapStateToProps(state)).toEqual(expected);
    });
});
