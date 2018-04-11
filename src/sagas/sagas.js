import {all} from 'redux-saga/effects';
import * as authSagas from './authSagas';

// Start all sagas at once
export default function* rootSaga() {
    yield all([
        authSagas.registerUserWatcher(),
        authSagas.registerMerchantWatcher(),
        authSagas.loginWatcher(),
    ]);
}
