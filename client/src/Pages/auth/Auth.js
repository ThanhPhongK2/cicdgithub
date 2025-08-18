import React, { useState } from 'react';
import './Auth.css';
import Logo from '../../Img/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from '../../actions/AuthAction.js';

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);

  const [isSignUp, setIsSignUp] = useState(true);
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpass: '',
  });
  const [error, setError] = useState('');

  const { firstname, lastname, email, password, confirmpass } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isSignUp) {
      if (password !== confirmpass) {
        setError('Passwords do not match');
        return;
      }
      dispatch(signUp(data));
    } else {
      dispatch(logIn(data));
    }
  };

  const handleToggleMode = () => {
    setIsSignUp((prev) => !prev);
    setError('');
    setData({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmpass: '',
    });
  };

  return (
    <div className="Auth">
      {/* Left Side */}
      <div className="a-left">
        <img src={Logo} alt="Logo" />
        <div className="Webname">
          <h2>Welcome to web!</h2>
          <h5>
            Explore the ideas throughout <br /> the world.
          </h5>
        </div>
      </div>

      {/* Right Side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={lastname}
              />
            </div>
          )}

          <div>
            <input
              type="email"
              placeholder="Email"
              className="infoInput"
              name="email"
              onChange={handleChange}
              value={email}
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="infoInput"
              name="password"
              onChange={handleChange}
              value={password}
              required
            />
            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="infoInput"
                name="confirmpass"
                onChange={handleChange}
                value={confirmpass}
                required
              />
            )}
          </div>

          {error && (
            <span
              style={{
                color: 'red',
                fontSize: '12px',
                alignSelf: 'flex-end',
                marginRight: '5px',
              }}
            >
              * {error}
            </span>
          )}

          <div>
            <span
              style={{ fontSize: '12px', cursor: 'pointer' }}
              onClick={handleToggleMode}
            >
              {isSignUp
                ? 'Already have an account? Login here'
                : "Don't have an account? Sign Up here"}
            </span>
          </div>

          <button
            className="button infoButton"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
