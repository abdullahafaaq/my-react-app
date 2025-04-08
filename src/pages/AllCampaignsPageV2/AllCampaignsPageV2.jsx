import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderV2 from "../../components/Header/HeaderV2";
import FooterV2 from "../../components/FooterV2/FooterV2";
import "./AllCampaignsPageV2.css";

const AllCampaignsPageV2 = () => {
  const navigate = useNavigate();

  const campaigns = [
    {
      id: 1,
      title: "Education for All Children",
      category: "Education",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c5a6527053345187cfce0160e42b184731ea1b5e",
      description: "Help provide education to underprivileged children",
      raised: 15000,
      goal: 20000,
      progress: 75,
    },
    {
      id: 2,
      title: "Clean Water Initiative",
      category: "Environment",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a7bf31e6f6aaadd492b35c25c80b22d9ce4f8f1e",
      description: "Bringing clean water to rural communities",
      raised: 12000,
      goal: 20000,
      progress: 60,
    },
    {
      id: 3,
      title: "Medical Relief Fund",
      category: "Healthcare",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/adfb6a5790b8f0c9aad06c1b58d432ea42a293a0",
      description: "Support essential medical services",
      raised: 17000,
      goal: 20000,
      progress: 85,
    },
    // Add more campaigns as needed
  ];

  return (
    <div className="campaigns-page-v2">
      <HeaderV2 />
      <main className="campaigns-content-v2">
        <div className="campaigns-header-v2">
          <div className="campaigns-header-content">
            <h1 className="campaigns-title-v2">Active Campaigns</h1>
            <p className="campaigns-subtitle-v2">
              Browse and support meaningful causes
            </p>
          </div>
          <button
            className="create-campaign-button-v2"
            onClick={() => navigate("/bank-info")}
          >
            Create Campaign
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5V19M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="campaigns-filters-v2">
          <div className="search-bar-v2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search campaigns..."
              className="search-input-v2"
            />
          </div>
          <div className="filter-buttons-v2">
            <button className="filter-button-v2 active">All</button>
            <button className="filter-button-v2">Education</button>
            <button className="filter-button-v2">Healthcare</button>
            <button className="filter-button-v2">Environment</button>
          </div>
        </div>

        <div className="campaigns-grid-v2">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="campaign-card-v2">
              <div className="campaign-image-wrapper">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="campaign-image-v2"
                />
                <div className="campaign-category">{campaign.category}</div>
              </div>
              <div className="campaign-content-v2">
                <h3 className="campaign-title-v2">{campaign.title}</h3>
                <p className="campaign-description-v2">
                  {campaign.description}
                </p>
                <div className="campaign-progress-v2">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                  <div className="progress-stats">
                    <span>${campaign.raised.toLocaleString()} raised</span>
                    <span>{campaign.progress}%</span>
                  </div>
                </div>
                <button className="donate-button-v2">Donate Now</button>
              </div>
            </div>
          ))}
        </div>

        <div className="campaigns-pagination-v2">
          <button className="pagination-button-v2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="pagination-numbers">
            <button className="page-number active">1</button>
            <button className="page-number">2</button>
            <button className="page-number">3</button>
            <span>...</span>
            <button className="page-number">8</button>
          </div>
          <button className="pagination-button-v2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </main>
      <FooterV2 />
    </div>
  );
};

export default AllCampaignsPageV2;
