// src/redux/reducers/rootReducer.js
import { combineReducers } from 'redux';
import userReducer from './reducer'; // import other reducers as needed

const rootReducer = combineReducers({
    user: userReducer,
    // other reducers can be added here
});

export default rootReducer;
