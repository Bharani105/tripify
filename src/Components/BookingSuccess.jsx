import React from "react";
import { Link } from "react-router-dom";
import "./BookingSuccess.css";

const BookingSuccess = () => {
  return (
    <div className="success-container">
      <div className="success-card">
        <h1>🎉 Booking Successful!</h1>
        <p>Your payment has been received and your booking is confirmed.</p>

        <div className="success-icon">✅</div>

        <p className="thank-you-text">
          Thank you for choosing <strong>Tripify</strong>!  
          Your booking details have been sent to your email.
        </p>

        <Link to="/">
          <button className="success-btn">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default BookingSuccess;
