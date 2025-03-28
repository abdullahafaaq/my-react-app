import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Join thousands of people raising funds for their causes
            </h1>
            <div className="social-icons">
              <div className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M23 3C22.042 3.675 20.982 4.192 19.86 4.53C19.258 3.837 18.457 3.346 17.567 3.124C16.677 2.901 15.74 2.957 14.882 3.284C14.025 3.612 13.288 4.194 12.773 4.954C12.258 5.713 11.988 6.612 12 7.53V8.53C10.243 8.575 8.501 8.186 6.931 7.395C5.361 6.605 4.01 5.438 3 4C3 4 -1 13 8 17C5.941 18.398 3.487 19.099 1 19C10 24 21 19 21 7.5C20.999 7.221 20.972 6.943 20.92 6.67C21.941 5.663 22.661 4.393 23 3Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M23 2.9998C22.0424 3.67528 20.9821 4.19191 19.86 4.5298C19.2577 3.83731 18.4573 3.34649 17.567 3.12373C16.6767 2.90096 15.7395 2.957 14.8821 3.28426C14.0247 3.61151 13.2884 4.1942 12.773 4.95352C12.2575 5.71283 11.9877 6.61214 12 7.5298V8.5298C10.2426 8.57537 8.50127 8.18561 6.93101 7.39525C5.36074 6.60488 4.01032 5.43844 3 3.9998C3 3.9998 -1 12.9998 8 16.9998C5.94053 18.3978 3.48716 19.0987 1 18.9998C10 23.9998 21 18.9998 21 7.4998C20.9991 7.22126 20.9723 6.9434 20.92 6.6698C21.9406 5.6633 22.6608 4.39251 23 2.9998Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="hero-cta">
            <div className="cta-group">
              <button className="donate-btn">
                <span>Donate Now</span>
                <div className="arrow-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M7 7H17V17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div className="explore-more">
              <span>Explore More</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18.0697 14.4302L11.9997 20.5002L5.92969 14.4302"
                  stroke="#FCFCFC"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 3.5V20.33"
                  stroke="#FCFCFC"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </section>

        <section className="featured-section">
  <div className="section-header">
    <p className="section-subtitle">Featured campaigns</p>
    <h2 className="section-title">Ready to Make a Difference?</h2>
  </div>
  <div className="campaign-grid">
    {/* Campaign 1 */}
    <div className="campaign-card">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5a6527053345187cfce0160e42b184731ea1b5e"
        alt="Campaign 1"
        className="campaign-image"
      />
      <button className="campaign-donate-btn">Donate Now</button>
      <div className="campaign-title">Education for All</div>
    </div>
    
    {/* Campaign 2 */}
    <div className="campaign-card">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7bf31e6f6aaadd492b35c25c80b22d9ce4f8f1e"
        alt="Campaign 2"
        className="campaign-image"
      />
      <button className="campaign-donate-btn">Donate Now</button>
      <div className="campaign-title">Clean Water Initiative</div>
    </div>
    
    {/* Campaign 3 */}
    <div className="campaign-card">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/adfb6a5790b8f0c9aad06c1b58d432ea42a293a0"
        alt="Campaign 3"
        className="campaign-image"
      />
      <button className="campaign-donate-btn">Donate Now</button>
      <div className="campaign-title">Medical Relief</div>
    </div>
    
    {/* Campaign 4 */}
    <div className="campaign-card">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f9aef9e80a819a026236384d286ab85de11c7ea"
        alt="Campaign 4"
        className="campaign-image"
      />
      <button className="campaign-donate-btn">Donate Now</button>
      <div className="campaign-title">Animal Shelter</div>
    </div>
  </div>
  <div className="explore-link">
    <span>Explore More</span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M14.4297 5.92982L20.4997 11.9998L14.4297 18.0698"
        stroke="#0F0F0F"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 12L20.33 12"
        stroke="#0F0F0F"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
</section>

        <section className="cta-section">
          <h2 className="cta-title">
            Start your fundraising campaign today and reach your goals.
          </h2>
          <button className="get-started-btn">Get Started</button>
          <div className="partner-logos">
            <div className="partner-logo">
              <svg width="148" height="36" viewBox="0 0 148 36" fill="none">
                {/* Pinterest Logo SVG */}
              </svg>
            </div>
            <div className="partner-logo">
              <svg width="162" height="36" viewBox="0 0 162 36" fill="none">
                {/* Zoom Logo SVG */}
              </svg>
            </div>
            <div className="partner-logo">
              <svg width="186" height="36" viewBox="0 0 186 36" fill="none">
                {/* Discord Logo SVG */}
              </svg>
            </div>
            <div className="partner-logo">
              <svg width="190" height="36" viewBox="0 0 190 36" fill="none">
                {/* Dropbox Logo SVG */}
              </svg>
            </div>
            <div className="partner-logo">
              <svg width="200" height="36" viewBox="0 0 200 36" fill="none">
                {/* Monday Logo SVG */}
              </svg>
            </div>
            <div className="partner-logo">
              <svg width="144" height="36" viewBox="0 0 144 36" fill="none">
                {/* Slack Logo SVG */}
              </svg>
            </div>
            <div className="partner-logo">
              <svg width="88" height="36" viewBox="0 0 88 36" fill="none">
                {/* Stripe Logo SVG */}
              </svg>
            </div>
            <div className="partner-logo">
              <svg width="170" height="36" viewBox="0 0 170 36" fill="none">
                {/* Airtable Logo SVG */}
              </svg>
            </div>
          </div>
        </section>

        <section className="slogan-section">
          <h2 className="slogan">Donate smart. Help more.</h2>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
