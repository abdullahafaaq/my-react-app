import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/DarkHeader";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    // Add authentication logic here
  };

  return (
    <div className="login-page">
      <Header />
      <main className="login-content">
        <div className="login-container">
          <div className="login-header">
            <h1 className="login-title">LOGIN</h1>
            <p className="login-subtitle">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="checkbox-input"
                />
                <span>Remember me</span>
              </label>
              <button type="button" className="forgot-password">
                Forgot password
              </button>
            </div>

            <button type="submit" className="sign-in-button">
              Sign in
            </button>

            <button type="button" className="google-sign-in">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/616595b680dabecf0a9a2105b2afd89c28c69d4e"
                alt=""
                className="google-icon"
              />
              <span>Sign in with Google</span>
            </button>
          </form>

          <div className="signup-prompt">
            <span className="prompt-text">Don't have an account?</span>
            <button
              type="button"
              className="signup-link"
              onClick={() => navigate("/")}
            >
              Sign up!
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
