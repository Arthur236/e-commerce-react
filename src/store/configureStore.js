import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import reduxImutableStateInvariant from 'redux-immutable-state-invariant';
import {composeWithDevTools} from 'redux-devtools-extension';

export const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware, thunk, reduxImutableStateInvariant())
        )
    );
}
