import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import Notifications from 'react-notify-toast';
import jwt from 'jsonwebtoken';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Notifications />
            <Router>
                {routes}
            </Router>
        </div>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
