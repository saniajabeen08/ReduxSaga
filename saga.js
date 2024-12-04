// // src/redux/sagas/userSaga.js
// import { call, put, takeLatest } from 'redux-saga/effects';
// import {
//     FETCH_USER_REQUEST,
//     fetchUserSuccess,
//     fetchUserFailure,
//     FETCH_TITLE_REQUEST,
//     fetchTitleSuccess,
//     fetchTitleFailure
// } from './action';

// function* fetchUserSaga() {
//     try {
//         // Fetch user data
//         const userResponse = yield call(fetch, 'https://fakestoreapiserver.reactbd.com/smart');
//         const userData = yield userResponse.json();
//         yield put(fetchUserSuccess(userData));
//     } catch (error) {
//         yield put(fetchUserFailure(error.message));
//     }
// }

// function* fetchTitleSaga() {
//     try {
//         // Fetch title data
//         const titleResponse = yield call(fetch, 'https://dummyjson.com/posts');
//         const titleData = yield titleResponse.json();
//         yield put(fetchTitleSuccess(titleData));
//     } catch (error) {
//         yield put(fetchTitleFailure(error.message));
//     }
// }

// export function* watchUserSaga() {
//     yield takeLatest(FETCH_USER_REQUEST, fetchUserSaga);
//     yield takeLatest(FETCH_TITLE_REQUEST, fetchTitleSaga);
// }



// Login And Signup

import { put, takeEvery } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginSuccess, loginFailure } from './action';

// Handle login action
function* handleLogin(action) {
  const { username, password } = action.payload;

  // Mock credentials for validation
  const correctUsername = 'sania';
  const correctPassword = '12345';

  if (username === correctUsername && password === correctPassword) {
    yield put(loginSuccess());
    yield put({ type: 'NAVIGATE', payload: { path: '/home' } });
  } else {
    yield put(loginFailure());
    yield put({ type: 'NAVIGATE', payload: { path: '/signup' } }); // Navigates to signup on login failure
  }
}

// Root saga
export default function* rootSaga() {
  yield takeEvery(LOGIN_REQUEST, handleLogin);
  // No need for signup functionality as per your request
}
