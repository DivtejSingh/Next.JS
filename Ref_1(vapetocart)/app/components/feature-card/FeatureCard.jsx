import "./feature-card.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureCard = ({ icon, title }) => {
  return (
    <div className="features-container d-flex flex-wrap justify-content-center align-items-center">
      <div className="features-icon"><FontAwesomeIcon icon={icon} className="color-dark" /></div>
      <div className="features-text ps-2">
        <h4 className="color-dark small text-truncate">{title}</h4>
      </div>
    </div>
  );
};

export default FeatureCard;
