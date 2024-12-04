// src/redux/sagas/index.js
import { all } from 'redux-saga/effects';
import { watchUserSaga } from './saga';

export default function* rootSaga() {
    yield all([watchUserSaga()]);
}
