import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderV2 from "../../components/Header/HeaderV2";
import FooterV2 from "../../components/FooterV2/FooterV2";
import ProgressSteps from "../../components/ProgressSteps/ProgressSteps";
import "./BankInfoPageV2.css";

const BankInfoPageV2 = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle bank info submission
    navigate("/campaign/new");
  };

  return (
    <div className="bank-info-page-v2">
      <HeaderV2 />
      <main className="bank-info-content-v2">
        <div className="bank-info-container-v2">
          <ProgressSteps currentStep={1} />

          <div className="bank-info-card">
            <div className="bank-info-header-v2">
              <h1 className="bank-info-title-v2">Bank Information</h1>
              <p className="bank-info-subtitle-v2">
                Please provide your bank details for receiving donations
              </p>
            </div>

            <form className="bank-info-form-v2" onSubmit={handleSubmit}>
              <div className="form-group-v2">
                <label htmlFor="accountName" className="form-label-v2">
                  Account Holder Name
                </label>
                <input
                  type="text"
                  id="accountName"
                  className="form-input-v2"
                  placeholder="Enter account holder name"
                  required
                />
              </div>

              <div className="form-group-v2">
                <label htmlFor="accountNumber" className="form-label-v2">
                  Account Number
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  className="form-input-v2"
                  placeholder="Enter account number"
                  required
                />
              </div>

              <div className="form-group-v2">
                <label htmlFor="bankName" className="form-label-v2">
                  Bank Name
                </label>
                <input
                  type="text"
                  id="bankName"
                  className="form-input-v2"
                  placeholder="Enter bank name"
                  required
                />
              </div>

              <div className="form-group-v2">
                <label htmlFor="swiftCode" className="form-label-v2">
                  SWIFT/BIC Code
                </label>
                <input
                  type="text"
                  id="swiftCode"
                  className="form-input-v2"
                  placeholder="Enter SWIFT/BIC code"
                  required
                />
              </div>

              <div className="form-group-v2">
                <label htmlFor="branchCode" className="form-label-v2">
                  Branch Code
                </label>
                <input
                  type="text"
                  id="branchCode"
                  className="form-input-v2"
                  placeholder="Enter branch code"
                  required
                />
              </div>

              <div className="bank-info-buttons-v2">
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

export default BankInfoPageV2;
