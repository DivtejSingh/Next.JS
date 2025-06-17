import "./welcome-card.css";
import React from "react";

const WelcomeCard = ({ title, text }) => {
  return (
    <div className="welcome-card p-3 p-md-4 p-lg-5 rounded-3">
      <h4 className="fw-bold mb-3 position-relative py-1 ps-3">The {title}</h4>
      {text}
    </div>
  );
};

export default WelcomeCard;
