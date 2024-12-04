// // src/components/UserComponent.js
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUserRequest, fetchTitleRequest } from './redux/action';

// const UserComponent = () => {
//     const dispatch = useDispatch();
    
//     // Access the user and title data along with loading and error states from the reducer
//     const { user, title, loadingUser, loadingTitle, error } = useSelector((state) => state.user);
// console.log("title...",title)
//     useEffect(() => {
//         // Dispatch actions to fetch user and title data on component mount
//         dispatch(fetchUserRequest());
//         dispatch(fetchTitleRequest());
//     }, [dispatch]);

//     return (
//         <div>
//             {loadingUser && <p>Loading user data...</p>}
//             {loadingTitle && <p>Loading title data...</p>}
//             {error && <p>Error: {error}</p>}

//             {user && Array.isArray(user) && user.map((data) => (
//                 <div>
//                     <h4> {data._id}</h4>
//                 </div>
//             ))}

//             {title?.posts?.map((data) => (
//                 <div>
//                     <h4> {data.title}</h4>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default UserComponent;


// For Login And Signup
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import store from './store';
import LoginComponent from './LoginComponent';

const Home = () => <h2>Welcome to Home Page</h2>;

const SignupForm = () => {
  return (
    <div>
      <h2>Signup Form</h2>
      {/* Add your signup form here */}
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

// Simple navigation component to handle path change
const NavigationHandler = () => {
  const navigate = useNavigate();
  store.subscribe(() => {
    const state = store.getState();
    if (state.auth.isAuthenticated) navigate('/home');
    if (state.auth.loginError || state.auth.showSignupForm) navigate('/signup');
  });
  return null;
};

const App = () => (
  <Provider store={store}>
    <Router>
      <NavigationHandler />
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;

