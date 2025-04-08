import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderV2 from "../../components/Header/HeaderV2";
import FooterV2 from "../../components/FooterV2/FooterV2";
import "./RegisterPageV2.css";

const RegisterPageV2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    telephone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration attempt with:", formData);
  };

  return (
    <div className="register-page-v2">
      <HeaderV2 />
      <main className="register-content-v2">
        <div className="register-container-v2">
          <div className="register-card">
            <div className="register-header-v2">
              <h1 className="register-title-v2">Create Account</h1>
              <p className="register-subtitle-v2">
                Join us in making a difference today
              </p>
            </div>

            <form className="register-form-v2" onSubmit={handleSubmit}>
              <div className="form-group-v2">
                <label htmlFor="fullName" className="form-label-v2">
                  Full Name
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="form-input-v2"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group-v2">
                <label htmlFor="email" className="form-label-v2">
                  Email Address
                </label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input-v2"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
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
                    name="password"
                    className="form-input-v2"
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group-v2">
                <label htmlFor="telephone" className="form-label-v2">
                  Phone Number
                </label>
                <div className="input-wrapper">
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    className="form-input-v2"
                    placeholder="Enter your phone number"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="register-button-v2">
                Create Account
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

            <div className="login-prompt-v2">
              <span>Already have an account?</span>
              <button
                type="button"
                className="login-link-v2"
                onClick={() => navigate("/login")}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </main>
      <FooterV2 />
    </div>
  );
};

export default RegisterPageV2;
