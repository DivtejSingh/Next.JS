"use client";
import "./section-heading-center.css";
import React from "react";

const SectionHeadingCenter = ({ text, highlights = [], color }) => {
  // Create a regex that matches any of the highlighted words
  const regex = highlights.length > 0 ? new RegExp(`(${highlights.join("|")})`, "gi") : null;
  const parts = regex ? text.split(regex) : [text];

  return (
    <div className="sec-heading-center mx-auto mb-4 text-center">
      <h3 className="fw-bold text-uppercase">
        {parts.map((part, index) => (
          <span
            key={index}
            className={
              highlights.some((h) => h.toLowerCase() === part.toLowerCase())
                ? `text-${color}`
                : ""
            }
          >
            {part}
          </span>
        ))}
      </h3>
    </div>
  );
};

export default SectionHeadingCenter;
