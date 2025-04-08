import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import HeaderV2 from "../../components/Header/HeaderV2";
import FooterV2 from "../../components/FooterV2/FooterV2";
import "./LandingPageV2.css";

// Import videos
import video1 from "../../videos/video1.mp4";
import video2 from "../../videos/video2.mp4";
import video3 from "../../videos/video3.mp4";
import video4 from "../../videos/video4.mp4";

const LandingPageV2 = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(video1);
  const [videoIndex, setVideoIndex] = useState(0);
  const videos = [video1, video2, video3, video4];
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoEnd = () => {
      const nextIndex = (videoIndex + 1) % videos.length;
      setVideoIndex(nextIndex);
      setCurrentVideo(videos[nextIndex]);
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleVideoEnd);
      videoRef.current.play().catch(e => console.error('Video play error:', e));
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [videoIndex, videos]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.error('Video play error:', e));
    }
  }, [currentVideo]);

  return (
    <div className="landing-page-v2">
      <HeaderV2 className="transparent" isLandingPage={true} isLoggedIn={isLoggedIn} />
      <main className="landing-main-v2">
        <section className="landing-hero-section-v2">
          {/* Play random video */}
          <video
            ref={videoRef}
            className="landing-hero-video-v2"
            autoPlay
            muted
            playsInline
            onError={(e) => console.error('Video error:', e.target.error)}
            onCanPlay={() => {
              console.log('Video can play');
              videoRef.current?.play().catch(e => console.error('Video play error:', e));
            }}
            key={currentVideo}
          >
            <source src={currentVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="landing-hero-content-v2">
            <h1 className="landing-hero-title-v2">
              Make a Difference <br />
              <span className="highlight">One Donation</span> at a Time
            </h1>
            <p className="landing-hero-subtitle-v2">
              Join thousands of people making positive change through our
              trusted fundraising platform
            </p>
            <div className="landing-hero-cta-v2">
              <button
                className="primary-button-v2"
                onClick={() => navigate("/campaign/new")}
              >
                Start Fundraising
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="secondary-button-v2"
                onClick={() => navigate("/campaigns")}
              >
                Explore Campaigns
              </button>
            </div>
          </div>
        </section>

        <section className="featured-section-v2">
          <div className="section-header-v2">
            <h2 className="section-title-v2">Featured Campaigns</h2>
            <p className="section-subtitle-v2">Support causes that matter</p>
          </div>

          <div className="campaign-grid-v2">
            <div className="campaign-card-v2">
              <div className="campaign-image-wrapper">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5a6527053345187cfce0160e42b184731ea1b5e"
                  alt="Education campaign"
                  className="campaign-image-v2"
                />
                <div className="campaign-category">Education</div>
              </div>
              <div className="campaign-content-v2">
                <h3 className="campaign-title-v2">
                  Education for All Children
                </h3>
                <p className="campaign-description-v2">
                  Help provide education to underprivileged children
                </p>
                <div className="campaign-progress-v2">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <div className="progress-stats">
                    <span>$15,000 raised</span>
                    <span>75%</span>
                  </div>
                </div>
                <button 
                  className="donate-button-v2"
                  onClick={() => navigate("/donate")}
                >
                  Donate Now
                </button>
              </div>
                </div>

            <div className="campaign-card-v2">
              <div className="campaign-image-wrapper">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7bf31e6f6aaadd492b35c25c80b22d9ce4f8f1e"
                  alt="Water campaign"
                  className="campaign-image-v2"
                />
                <div className="campaign-category">Environment</div>
              </div>
              <div className="campaign-content-v2">
                <h3 className="campaign-title-v2">Clean Water Initiative</h3>
                <p className="campaign-description-v2">
                  Bringing clean water to rural communities
                </p>
                <div className="campaign-progress-v2">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                  <div className="progress-stats">
                    <span>$12,000 raised</span>
                    <span>60%</span>
                  </div>
                </div>
                <button 
                  className="donate-button-v2"
                  onClick={() => navigate("/donate")}
                >
                  Donate Now
                </button>
              </div>
                </div>

            <div className="campaign-card-v2">
              <div className="campaign-image-wrapper">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/adfb6a5790b8f0c9aad06c1b58d432ea42a293a0"
                  alt="Healthcare campaign"
                  className="campaign-image-v2"
                />
                <div className="campaign-category">Healthcare</div>
              </div>
                <div className="campaign-content-v2">
                <h3 className="campaign-title-v2">Medical Relief Fund</h3>
                <p className="campaign-description-v2">
                  Support essential medical services
                </p>
                <div className="campaign-progress-v2">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <div className="progress-stats">
                    <span>$17,000 raised</span>
                    <span>85%</span>
                  </div>
                </div>
                <button 
                  className="donate-button-v2"
                  onClick={() => navigate("/donate")}
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>

          <button
            className="view-all-button-v2"
            onClick={() => navigate("/campaigns")}
          >
            View All Campaigns
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </section>

        <section className="impact-section-v2">
          <div className="impact-content-v2">
            <h2 className="impact-title-v2">Our Global Impact</h2>
            <p className="impact-description-v2">
              Together we've helped thousands of causes reach their goals
            </p>
            <div className="impact-grid-v2">
              <div className="impact-card-v2">
                <span className="impact-number-v2">150+</span>
                <span className="impact-label-v2">Countries Reached</span>
              </div>
              <div className="impact-card-v2">
                <span className="impact-number-v2">$5M+</span>
                <span className="impact-label-v2">Total Donations</span>
              </div>
              <div className="impact-card-v2">
                <span className="impact-number-v2">20K+</span>
                <span className="impact-label-v2">Active Campaigns</span>
              </div>
              <div className="impact-card-v2">
                <span className="impact-number-v2">100K+</span>
                <span className="impact-label-v2">Lives Impacted</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section-v2">
          <div className="cta-content-v2">
            <h2 className="cta-title-v2">Ready to Make a Difference?</h2>
            <p className="cta-description-v2">
              Start your fundraising journey today and create lasting change
            </p>
            <div className="cta-buttons-v2">
              <button
                className="primary-button-v2"
                onClick={() => navigate("/register")}
              >
                Start Fundraising
              </button>
              <button
                className="secondary-button-v2"
                onClick={() => navigate("/about")}
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="partners-section-v2">
          <h3 className="partners-title-v2">
            Trusted by World-Class Organizations
          </h3>
          <div className="partners-grid-v2">
            {[
              "pinterest",
              "zoom",
              "discord",
              "dropbox",
              "monday",
              "slack",
              "stripe",
              "airtable",
            ].map((partner) => (
              <img
                key={partner}
                src={`https://cdn.builder.io/api/v1/image/assets/TEMP/${partner}-logo.png`}
                alt={`${partner} logo`}
                className="partner-logo-v2"
              />
            ))}
          </div>
        </section>
        <div className="donation-text">Donate smart. Help more.</div>
      </main>
      <FooterV2 />
    </div>
  );
};

export default LandingPageV2;
