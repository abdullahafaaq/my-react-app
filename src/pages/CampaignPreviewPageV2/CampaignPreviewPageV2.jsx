import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderV2 from "../../components/Header/HeaderV2";
import FooterV2 from "../../components/FooterV2/FooterV2";
import ProgressSteps from "../../components/ProgressSteps/ProgressSteps";
import "./CampaignPreviewPageV2.css";

const CampaignPreviewPageV2 = () => {
  const navigate = useNavigate();

  // Mock campaign data - in real app, this would come from state/props
  const campaign = {
    title: "Education for All Children",
    category: "Education",
    goal: 20000,
    endDate: "2024-12-31",
    description: "Help provide education to underprivileged children...",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c5a6527053345187cfce0160e42b184731ea1b5e",
  };

  return (
    <div className="preview-page-v2">
      <HeaderV2 />
      <main className="preview-content-v2">
        <div className="preview-container-v2">
          <ProgressSteps currentStep={3} />

          <div className="preview-header-v2">
            <h1 className="preview-title-v2">Campaign Preview</h1>
            <p className="preview-subtitle-v2">
              Review your campaign before publishing
            </p>
          </div>

          <div className="preview-card">
            <div className="preview-image-container">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="preview-image-v2"
              />
              <div className="preview-category-badge">{campaign.category}</div>
            </div>

            <div className="preview-details-v2">
              <h2 className="campaign-title-v2">{campaign.title}</h2>

              <div className="campaign-stats-v2">
                <div className="stat-item">
                  <span className="stat-label">Goal</span>
                  <span className="stat-value">
                    ${campaign.goal.toLocaleString()}
                  </span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-label">End Date</span>
                  <span className="stat-value">
                    {new Date(campaign.endDate).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="campaign-description-v2">
                <h3 className="section-title-v2">Campaign Description</h3>
                <p className="description-text">{campaign.description}</p>
              </div>

              <div className="preview-actions-v2">
                <button
                  className="secondary-button-v2"
                  onClick={() => navigate("/campaign/new")}
                >
                  Edit Campaign
                </button>
                <button
                  className="primary-button-v2"
                  onClick={() => {
                    // Handle campaign publication
                    navigate("/campaigns");
                  }}
                >
                  Publish Campaign
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
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterV2 />
    </div>
  );
};

export default CampaignPreviewPageV2;
