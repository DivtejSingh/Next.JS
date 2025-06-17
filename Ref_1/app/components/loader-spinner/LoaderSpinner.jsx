"use client";
import "./loader-spinner.css";
import React from "react";
import { Spinner } from "react-bootstrap";

const LoaderSpinner = () => {
  return (
    <div className="loader-spinner d-flex justify-content-center align-items-center bgColor-light">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default LoaderSpinner;
