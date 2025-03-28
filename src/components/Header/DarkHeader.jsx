import React from "react";
import { useNavigate } from "react-router-dom";
import "./DarkHeader.css";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header className="dark-header">
      <div className="dark-header-container">
        <div className="logo">
          <div className="logo-wrapper">
            <svg
              width="182"
              height="56"
              viewBox="0 0 182 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.2193 29.3339L40.464 38.0469C40.3024 38.556 39.8311 38.9034 39.2979 38.9034H30.7156C29.89 38.9034 29.2984 38.0985 29.5495 37.3074L32.3048 28.5977C32.463 28.0852 32.9377 27.7412 33.4709 27.7412H42.0532C42.8788 27.7412 43.4704 28.5462 43.2193 29.3339Z"
                fill="#232323"
              />
              <path
                d="M54.0892 12.5925L51.3339 21.3056C51.1722 21.8147 50.701 22.1587 50.1678 22.1587H29.5599C29.0886 22.1587 28.6793 22.4614 28.5314 22.9017C28.528 22.9051 28.5245 22.912 28.5245 22.9154V22.9189L28.3181 23.5725V23.5759C28.3181 23.5793 28.3147 23.5862 28.3113 23.5897L25.2326 33.3209L21.9751 43.6266C21.8135 44.1357 21.3422 44.4831 20.8056 44.4831H12.2267C11.3977 44.4831 10.8095 43.6782 11.0571 42.887L14.0842 33.3209L17.3417 23.0152C17.5033 22.5061 17.9781 22.1587 18.5112 22.1587H27.9673C28.4419 22.1587 28.8616 21.8526 29.0026 21.402L29.3879 20.1843C29.3879 20.1808 29.3913 20.1739 29.3948 20.1705L32.0228 11.8531C32.1845 11.344 32.6557 11 33.1923 11H52.9197C53.7486 11 54.3403 11.8049 54.0892 12.5925Z"
                fill="#FFDD33"
              />
              <text
                fill="white"
                xmlSpace="preserve"
                style={{ whiteSpace: "pre" }}
                fontFamily="Raleway"
                fontSize="24"
                fontWeight="bold"
                letterSpacing="0em"
              >
                <tspan x="66.1475" y="36.2132">
                  Altruistic
                </tspan>
              </text>
            </svg>
          </div>
        </div>

        <nav className="nav-menu">
          <div className="nav-links">
            <a 
              href="/" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/');
              }}
            >
              Home
            </a>
            <a 
              href="/about" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/about');
              }}
            >
              About Us
            </a>
            <a 
              href="/pricing" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/pricing');
              }}
            >
              Pricing
            </a>
            <a 
              href="/contact" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/contact');
              }}
            >
              Contact
            </a>
            <a 
              href="/campaigns" 
              className="nav-link nav-link-dropdown"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/campaigns');
              }}
            >
              Campaigns
              <i className="ti ti-chevron-down"></i>
            </a>
          </div>
        </nav>

        <div className="auth-buttons">
          <button 
            className="btn-login" 
            onClick={() => handleNavigation('/login')}
          >
            Login
          </button>
          <button 
            className="btn-register"
            onClick={() => handleNavigation('/register')}
          >
            Register Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;