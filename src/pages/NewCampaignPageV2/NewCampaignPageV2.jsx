import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderV2 from "../../components/Header/HeaderV2";
import FooterV2 from "../../components/FooterV2/FooterV2";
import ProgressSteps from "../../components/ProgressSteps/ProgressSteps";
import "./NewCampaignPageV2.css";

const NewCampaignPageV2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    goal: "",
    endDate: "",
    description: "",
    coverImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      coverImage: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle campaign creation
    navigate("/campaign/preview");
  };

  return (
    <div className="new-campaign-page-v2">
      <HeaderV2 />
      <main className="new-campaign-content-v2">
        <div className="new-campaign-container-v2">
          <ProgressSteps currentStep={2} />

          <div className="new-campaign-card">
            <div className="new-campaign-header-v2">
              <h1 className="new-campaign-title-v2">Create Campaign</h1>
              <p className="new-campaign-subtitle-v2">
                Tell us about your fundraising campaign
              </p>
            </div>

            <form className="new-campaign-form-v2" onSubmit={handleSubmit}>
              <div className="form-group-v2">
                <label htmlFor="title" className="form-label-v2">
                  Campaign Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-input-v2"
                  placeholder="Enter campaign title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group-v2">
                <label htmlFor="category" className="form-label-v2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-input-v2"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="education">Education</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="environment">Environment</option>
                  <option value="community">Community</option>
                </select>
              </div>

              <div className="form-row-v2">
                <div className="form-group-v2">
                  <label htmlFor="goal" className="form-label-v2">
                    Fundraising Goal
                  </label>
                  <div className="input-with-prefix">
                    <span className="input-prefix">$</span>
                    <input
                      type="number"
                      id="goal"
                      name="goal"
                      className="form-input-v2"
                      placeholder="Enter amount"
                      value={formData.goal}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group-v2">
                  <label htmlFor="endDate" className="form-label-v2">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    className="form-input-v2"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group-v2">
                <label htmlFor="description" className="form-label-v2">
                  Campaign Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="form-textarea-v2"
                  placeholder="Describe your campaign"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="6"
                  required
                ></textarea>
              </div>

              <div className="form-group-v2">
                <label className="form-label-v2">Cover Image</label>
                <div className="file-upload-v2">
                  <input
                    type="file"
                    id="coverImage"
                    name="coverImage"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="file-input-v2"
                  />
                  <div className="file-upload-content">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M17 8L12 3M12 3L7 8M12 3V15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>
                      {formData.coverImage
                        ? formData.coverImage.name
                        : "Upload campaign image"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="form-buttons-v2">
                <button
                  type="button"
                  className="secondary-button-v2"
                  onClick={() => navigate(-1)}
                >
                  Back
                </button>
                <button type="submit" className="primary-button-v2">
                  Continue
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
            </form>
          </div>
        </div>
      </main>
      <FooterV2 />
    </div>
  );
};

export default NewCampaignPageV2;
