// // src/redux/actions/userActions.js

// export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
// export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
// export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

// export const FETCH_TITLE_REQUEST = 'FETCH_TITLE_REQUEST';
// export const FETCH_TITLE_SUCCESS = 'FETCH_TITLE_SUCCESS';
// export const FETCH_TITLE_FAILURE = 'FETCH_TITLE_FAILURE';

// export const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST });
// export const fetchUserSuccess = (user) => ({ type: FETCH_USER_SUCCESS, payload: user });
// export const fetchUserFailure = (error) => ({ type: FETCH_USER_FAILURE, payload: error });

// export const fetchTitleRequest = () => ({ type: FETCH_TITLE_REQUEST });
// export const fetchTitleSuccess = (title) => ({ type: FETCH_TITLE_SUCCESS, payload: title });
// export const fetchTitleFailure = (error) => ({ type: FETCH_TITLE_FAILURE, payload: error });



//  login and singup 
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = (username, password) => ({
  type: LOGIN_REQUEST,
  payload: { username, password },
});

export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const loginFailure = () => ({ type: LOGIN_FAILURE });

export const DISPLAY_SIGNUP_FORM = 'DISPLAY_SIGNUP_FORM';

export const displaySignupForm = () => ({
  type: DISPLAY_SIGNUP_FORM,
});





