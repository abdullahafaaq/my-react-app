import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderV2 from "../../components/Header/HeaderV2";
import FooterV2 from "../../components/FooterV2/FooterV2";
import "./DonatePageV2.css";

const DonatePageV2 = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [donationAmount, setDonationAmount] = useState(10);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [bankDetails, setBankDetails] = useState({
    accountNumber: "",
    routingNumber: "",
    accountName: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    navigate("/thank-you");
  };

  return (
    <div className="donate-page-v2">
      <HeaderV2 isLoggedIn={isLoggedIn} />
      <main className="donate-main-v2">
        <section className="donate-form-section-v2">
          <h1 className="donate-title-v2">Make a Donation</h1>
          <form onSubmit={handleSubmit} className="donate-form-v2">
            {/* Donation amount selection */}
            <div className="form-group-v2">
              <label>Donation Amount ($)</label>
              <div className="amount-options-v2">
                {[10, 25, 50, 100].map((amount) => (
                  <button
                    type="button"
                    key={amount}
                    className={`amount-option-v2 ${donationAmount === amount ? "selected" : ""}`}
                    onClick={() => setDonationAmount(amount)}
                  >
                    ${amount}
                  </button>
                ))}
                <input
                  type="number"
                  min="1"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(Number(e.target.value))}
                  className="custom-amount-v2"
                  placeholder="Other amount"
                />
              </div>
            </div>

            {/* Payment method selection */}
            <div className="form-group-v2">
              <label>Payment Method</label>
              <div className="payment-methods-v2">
                <label className="payment-method-v2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                  />
                  Credit/Debit Card
                </label>
                <label className="payment-method-v2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                  />
                  Bank Transfer
                </label>
              </div>
            </div>

            {/* Payment details (conditional) */}
            {paymentMethod === "bank" ? (
              <div className="bank-details-v2">
                <div className="form-group-v2">
                  <label>Account Number</label>
                  <input
                    type="text"
                    value={bankDetails.accountNumber}
                    onChange={(e) => setBankDetails({...bankDetails, accountNumber: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group-v2">
                  <label>Routing Number</label>
                  <input
                    type="text"
                    value={bankDetails.routingNumber}
                    onChange={(e) => setBankDetails({...bankDetails, routingNumber: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group-v2">
                  <label>Account Holder Name</label>
                  <input
                    type="text"
                    value={bankDetails.accountName}
                    onChange={(e) => setBankDetails({...bankDetails, accountName: e.target.value})}
                    required
                  />
                </div>
              </div>
            ) : (
              <div className="card-details-v2">
                <div className="form-group-v2">
                  <label>Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    pattern="[0-9\s]{13,19}"
                    required
                  />
                </div>
                <div className="form-group-v2">
                  <label>Cardholder Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="card-info-row-v2">
                  <div className="form-group-v2">
                    <label>Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      pattern="\d{2}/\d{2}"
                      required
                    />
                  </div>
                  <div className="form-group-v2">
                    <label>CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      pattern="\d{3,4}"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Anonymous donation checkbox */}
            <div className="form-group-v2">
              <label className="anonymous-checkbox-v2">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                />
                Make this donation anonymously
              </label>
            </div>

            <button type="submit" className="submit-donation-v2">
              Donate Now
            </button>
          </form>
        </section>
      </main>
      <FooterV2 />
    </div>
  );
};

export default DonatePageV2;
