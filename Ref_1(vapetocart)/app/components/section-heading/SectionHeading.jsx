"use client";
import "./section-heading.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const SectionHeading = ({ title, link }) => {
  return (
    <div className="sec-heading position-relative mb-2">
      <h3 className="fw-bold text-capitalize d-inline-block">
        {title}
      </h3>
      {link && (
        <Link href={link} className="link-main position-absolute end-0">
          View All
          <FontAwesomeIcon icon={faArrowRightLong} />
        </Link>
      )}
    </div>
  );
};

export default SectionHeading;
