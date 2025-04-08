import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderV2 from "../../components/Header/HeaderV2";
import FooterV2 from "../../components/FooterV2/FooterV2";
import "./LoginPageV2.css";

const LoginPageV2 = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ 
            success: true,
            token: 'sample-auth-token'
          });
        }, 1000);
      });

      if (response.success) {
        if (rememberMe) {
          localStorage.setItem('authToken', response.token);
        }
        sessionStorage.setItem('authToken', response.token);
        setIsLoggedIn(true);
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-page-v2">
      <HeaderV2 />
      <main className="login-content-v2">
        <div className="login-container-v2">
          <div className="login-card">
            <div className="login-header-v2">
              <h1 className="login-title-v2">Welcome Back</h1>
              <p className="login-subtitle-v2">
                Sign in to continue your journey of giving
              </p>
            </div>

            <form className="login-form-v2" onSubmit={handleSubmit}>
              <div className="form-group-v2">
                <label htmlFor="email" className="form-label-v2">
                  Email Address
                </label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    className="form-input-v2"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group-v2">
                <label htmlFor="password" className="form-label-v2">
                  Password
                </label>
                <div className="input-wrapper">
                  <input
                    type="password"
                    id="password"
                    className="form-input-v2"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-options-v2">
                <label className="remember-me-v2">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="checkbox-input-v2"
                  />
                  <span>Remember me</span>
                </label>
                <button type="button" className="forgot-password-v2">
                  Forgot Password?
                </button>
              </div>

              <button type="submit" className="sign-in-button-v2">
                Sign In
              </button>

              <div className="divider">
                <span className="divider-line"></span>
                <span className="divider-text">or</span>
                <span className="divider-line"></span>
              </div>

              <button type="button" className="social-sign-in-v2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/616595b680dabecf0a9a2105b2afd89c28c69d4e"
                  alt="Google"
                  className="social-icon"
                />
                Continue with Google
              </button>

              <button type="button" className="social-sign-in-v2 facebook">
                <svg
                  className="social-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Continue with Facebook
              </button>
            </form>

            <div className="signup-prompt-v2">
              <span>Don't have an account?</span>
              <button
                type="button"
                className="signup-link-v2"
                onClick={() => navigate("/register")}
              >
                Sign up now
              </button>
            </div>
          </div>
        </div>
      </main>
      <FooterV2 />
    </div>
  );
};

export default LoginPageV2;
