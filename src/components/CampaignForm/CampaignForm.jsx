import React from "react";
import ProgressSteps from "../ProgressSteps/ProgressSteps";
import "./CampaignForm.css";

const CampaignForm = () => {
  return (
    <div className="campaign-form-container">
      <div className="campaign-form-wrapper">
        <ProgressSteps currentStep={2} />
        <div className="campaign-form-content">
          <h2 className="form-title">Create Your Campaign</h2>
          <form className="campaign-form">
            <div className="form-group">
              <label className="form-label">Campaign Title</label>
              <input
                type="text"
                placeholder="Enter campaign title here"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Goal Amount (USD)</label>
              <input
                type="text"
                placeholder="Enter amount in USD $"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                placeholder="Enter campaign description here max (200 words)"
                className="form-textarea"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Header picture</label>
              <div className="file-upload-area">
                <div className="upload-text">
                  <div className="upload-link">Link</div>
                  <div className="upload-instruction">or drag and drop</div>
                  <div className="upload-format">SVG, PNG or JPG(max. 3MB)</div>
                </div>
              </div>

              <div className="upload-files">
                <div className="file-item">
                  <div className="file-info">
                    <i className="ti ti-file file-icon" />
                    <span className="file-name">document_file_name.pdf</span>
                  </div>
                  <div className="file-status">
                    <span className="status-text">100% • Loading</span>
                    <i className="ti ti-loader" />
                  </div>
                </div>

                <div className="file-item">
                  <div className="file-info">
                    <i className="ti ti-file file-icon" />
                    <span className="file-name">document_file_name.pdf</span>
                  </div>
                  <div className="file-status">
                    <span className="status-text">100% • Complete</span>
                    <i className="ti ti-check" />
                  </div>
                </div>

                <div className="file-item error">
                  <div className="file-info">
                    <i className="ti ti-file file-icon" />
                    <span className="file-name">Upload failed</span>
                  </div>
                  <div className="file-status">
                    <span className="status-text">File too large • Failed</span>
                    <i className="ti ti-x" />
                  </div>
                </div>
              </div>
            </div>

            <div className="collaborators-section">
              <h3 className="section-title">Collaborators</h3>
              <div className="collaborator-card">
                <div className="collaborator-info">
                  <div className="info-label">Name</div>
                  <div className="info-value">Adi</div>
                </div>
                <div className="collaborator-info">
                  <div className="info-label">Email</div>
                  <div className="info-value">Adrian@xyz.co</div>
                </div>
              </div>

              <div className="collaborator-tags">
                <span className="tag">Adrian</span>
                <span className="tag">Stefanie</span>
                <span className="tag">Donnie</span>
              </div>

              <button type="button" className="add-button">
                ADD
              </button>
            </div>

            <div className="form-actions">
              <button type="button" className="back-button">
                Back
              </button>
              <button type="submit" className="next-button">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CampaignForm;
