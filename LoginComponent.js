import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from './redux/action';
import './Login.css';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.auth.loginError);
  const showSignupForm = useSelector((state) => state.auth.showSignupForm);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username && password) {
      dispatch(loginRequest(username, password));
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter both username and password.');
    }
  };

  useEffect(() => {
    if (loginError) {
      setErrorMessage('Not a user, please sign up.');
    }
  }, [loginError]);

  const renderSignupForm = () => (
    <div className="login-container">
      <div className="login-card">
        <h2>Signup</h2>
        <input
          type="text"
          placeholder="Username"
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="login-input"
        />
        <button className="login-button">Sign Up</button>
      </div>
    </div>
  );

  const renderLoginForm = () => (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">Login</button>

        {errorMessage && <p className="error-text">{errorMessage}</p>}
      </div>
    </div>
  );

  return showSignupForm ? renderSignupForm() : renderLoginForm();
};

export default LoginComponent;
