import React, { useState } from "react";
import "../styles/LoginSignupCss.css";
import { FaMoon, FaSun } from "react-icons/fa";
import graphic_era from "../images/graphic_era.png";

const LoginSignup = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <div className="container">
        <header className="header ">
          <img className="logoImage" src={graphic_era} alt="University Logo" />
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </header>

        <form className="login-form">
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="userID">User ID</label>
            <input type="text" id="userID" placeholder="Enter your User ID" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
            />
          </div>
          <div className="input-group captcha">
            <label className="capacha-label">
              Captcha: <b className="capacha-number">6D9</b>
            </label>
            <input type="text" placeholder="Enter Captcha" id="captcha-input" />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="footer-links">
            <a href="/">
              <strong>Forgot</strong> Your Password?
            </a>{" "}
            |{" "}
            <a href="/">
              Login as <strong>Admin</strong>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
