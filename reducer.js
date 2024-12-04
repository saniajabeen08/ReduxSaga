// // src/redux/reducers/userReducer.js
// import {
//     FETCH_USER_REQUEST,
//     FETCH_USER_SUCCESS,
//     FETCH_USER_FAILURE,
//     FETCH_TITLE_REQUEST,
//     FETCH_TITLE_SUCCESS,
//     FETCH_TITLE_FAILURE,
// } from './action';

// const initialState = {
//     user: null,
//     title: null, // Changed to lowercase 'title' for consistency
//     loadingUser: false, // Separate loading states
//     loadingTitle: false,
//     error: null,
// };

// const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH_USER_REQUEST:
//             return { ...state, loadingUser: true, error: null };
//         case FETCH_USER_SUCCESS:
//             return { ...state, loadingUser: false, user: action.payload };
//         case FETCH_USER_FAILURE:
//             return { ...state, loadingUser: false, error: action.payload };

//         case FETCH_TITLE_REQUEST:
//             return { ...state, loadingTitle: true, error: null };
//         case FETCH_TITLE_SUCCESS:
//             return { ...state, loadingTitle: false, title: action.payload };
//         case FETCH_TITLE_FAILURE:
//             return { ...state, loadingTitle: false, error: action.payload };

//         default:
//             return state;
//     }
// };

// export default userReducer;



// Login And Signup
import { LOGIN_SUCCESS, LOGIN_FAILURE, DISPLAY_SIGNUP_FORM } from './action';

const initialState = {
  isAuthenticated: false,
  loginError: false,
  showSignupForm: false, // New property for controlling signup form display
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, loginError: false, showSignupForm: false };
    case LOGIN_FAILURE:
      return { ...state, isAuthenticated: false, loginError: true };
    case DISPLAY_SIGNUP_FORM:
      return { ...state, showSignupForm: true }; // Action to display signup form
    default:
      return state;
  }
};

export default authReducer;
