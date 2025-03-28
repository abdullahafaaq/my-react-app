import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Keep up with the latest</h3>
            <p className="newsletter-description">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="newsletter-form">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="email-input"
                />
                <button className="subscribe-btn">Subscribe</button>
              </div>
              <p className="privacy-text">
                By subscribing you agree to our
                <a href="#" className="privacy-link">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg
                width="182"
                height="56"
                viewBox="0 0 182 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.2193 29.3339L40.464 38.0469C40.3024 38.556 39.8311 38.9034 39.2979 38.9034H30.7156C29.89 38.9034 29.2984 38.0985 29.5495 37.3074L32.3048 28.5977C32.463 28.0852 32.9377 27.7412 33.4709 27.7412H42.0532C42.8788 27.7412 43.4704 28.5462 43.2193 29.3339Z"
                  fill="white"
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
                  <tspan x="611.1475" y="36.2137">
                    Altruistic
                  </tspan>
                </text>
              </svg>
            </div>
            <p className="footer-subtitle">Your Subheading....</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">About Us</h4>
              <a href="#" className="footer-link">
                Our Mission
              </a>
              <a href="#" className="footer-link">
                Our Team
              </a>
              <a href="#" className="footer-link">
                How it works
              </a>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Pricing</h4>
              <a href="#" className="footer-link">
                Plan & Features
              </a>
              <a href="#" className="footer-link">
                Payment Methods
              </a>
              <a href="#" className="footer-link">
                Subscriptions FAQs
              </a>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Contact</h4>
              <a href="#" className="footer-link">
                Contact Us
              </a>
              <a href="#" className="footer-link">
                Support
              </a>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Disclaimer</h4>
              <a href="#" className="footer-link">
                Terms of Use
              </a>
              <a href="#" className="footer-link">
                Fundraising Guide
              </a>
              <a href="#" className="footer-link">
                API Documentation
              </a>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Support</h4>
              <a href="#" className="footer-link">
                Help
              </a>
              <a href="#" className="footer-link">
                FAQ
              </a>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
              <a href="#" className="footer-link">
                Terms of Services
              </a>
              <a href="#" className="footer-link">
                Cookies
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2025 Altruistic. All Right Reserved</p>
          <div className="social-links">
            <a href="#" className="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
                  fill="#25282B"
                />
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18.001 2H15.001C13.675 2 12.403 2.527 11.465 3.464C10.528 4.402 10.001 5.674 10.001 7V10H7.001V14H10.001V22H14.001V14H17.001L18.001 10H14.001V7C14.001 6.735 14.106 6.48 14.294 6.293C14.481 6.105 14.736 6 15.001 6H18.001V2Z"
                  fill="#25282B"
                />
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M23 3C22.042 3.675 20.982 4.192 19.86 4.53C19.258 3.837 18.457 3.346 17.567 3.124C16.677 2.901 15.74 2.957 14.882 3.284C14.025 3.612 13.288 4.194 12.773 4.954C12.258 5.713 11.988 6.612 12 7.53V8.53C10.243 8.575 8.501 8.186 6.931 7.395C5.361 6.605 4.01 5.438 3 4C3 4 -1 13 8 17C5.941 18.398 3.487 19.099 1 19C10 24 21 19 21 7.5C20.999 7.221 20.972 6.943 20.92 6.67C21.941 5.663 22.661 4.393 23 3Z"
                  fill="#25282B"
                />
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 8C17.59 8 19.116 8.632 20.242 9.757C21.367 10.883 22 12.409 22 14V21H18V14C18 13.47 17.789 12.961 17.414 12.586C17.039 12.211 16.53 12 16 12C15.47 12 14.961 12.211 14.586 12.586C14.211 12.961 14 13.47 14 14V21H10V14C10 12.409 10.632 10.883 11.757 9.757C12.883 8.632 14.409 8 16 8Z"
                  fill="#25282B"
                />
                <path d="M6 9H2V21H6V9Z" fill="#25282B" />
                <path
                  d="M4 6C5.105 6 6 5.105 6 4C6 2.895 5.105 2 4 2C2.895 2 2 2.895 2 4C2 5.105 2.895 6 4 6Z"
                  fill="#25282B"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
