import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../Img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction.js";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);

  const [isSignUp, setIsSignUp] = useState(true);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpass: "",
  });
  const [error, setError] = useState("");

  const { firstname, lastname, email, password, confirmpass } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (isSignUp) {
      if (password !== confirmpass) {
        setError("Passwords do not match");
        return;
      }
      dispatch(signUp(data));
    } else {
      dispatch(logIn(data));
    }
  };

  const handleToggleMode = () => {
    setIsSignUp((prev) => !prev);
    setError("");
    setData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpass: "",
    });
  };

  return (
    <div className="Auth">
      {/* Left Side */}
      <div className="a-left">
        <img src={Logo} alt="Logo" className="auth-logo" />
        <div className="Webname">
          <h2 className="title">✨ Welcome to Web ✨</h2>
          <h5 className="subtitle">
            Explore the ideas throughout <br /> the world.
          </h5>
          <p className="signature">Made with ❤️ by Phong</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h2>{isSignUp ? "Create Account" : "Welcome Back"}</h2>

          {isSignUp && (
            <div className="inputRow">
              <div className="inputWithIcon">
                <FaUser className="icon" />
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  onChange={handleChange}
                  value={firstname}
                />
              </div>
              <div className="inputWithIcon">
                <FaUser className="icon" />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  onChange={handleChange}
                  value={lastname}
                />
              </div>
            </div>
          )}

          <div className="inputWithIcon">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={email}
              required
            />
          </div>

          <div className="inputWithIcon">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={password}
              required
            />
          </div>

          {isSignUp && (
            <div className="inputWithIcon">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmpass"
                onChange={handleChange}
                value={confirmpass}
                required
              />
            </div>
          )}

          {error && <p className="errorMessage">⚠ {error}</p>}

          <p className="toggleText">
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <span className="toggleLink" onClick={handleToggleMode}>
                  Login here
                </span>
              </>
            ) : (
              <>
                Don&apos;t have an account?{" "}
                <span className="toggleLink" onClick={handleToggleMode}>
                  Sign Up here
                </span>
              </>
            )}
          </p>

          <button
            type="submit"
            className="button infoButton"
            disabled={loading}
          >
            {loading ? "Loading..." : isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
