"use client";
import "./number-spinner.css";
import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const NumberSpinner = ({ quantity = 1, setQuantity, className, stock }) => {
  const [localQuantity, setLocalQuantity] = useState(quantity);

  // SYNC LOCAL QUANTITY WITH PARENT QUANTITY
  useEffect(() => {
    setLocalQuantity(quantity);
  }, [quantity]);
  // SYNC LOCAL QUANTITY WITH PARENT QUANTITY

  // HANDLE INCREMENT
  const handleIncrement = () => {
    if (quantity < stock) {
      const newQuantity = localQuantity + 1;
      setLocalQuantity(newQuantity);
      setQuantity(newQuantity);
    }
  };
  // HANDLE INCREMENT

  // HANDLE DECREMENT
  const handleDecrement = () => {
    const newQuantity = localQuantity <= 1 ? 1 : localQuantity - 1;
    setLocalQuantity(newQuantity);
    setQuantity(newQuantity);
  };
  // HANDLE DECREMENT

  // HANDLE INPUT CHANGE
  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    const validQuantity =
      isNaN(newQuantity) || newQuantity < 1 ? 1 : newQuantity;
    if (validQuantity < stock) {
      setLocalQuantity(validQuantity);
      setQuantity(validQuantity);
    } else {
      setLocalQuantity(stock);
      setQuantity(stock);
    }
  };
  // HANDLE INPUT CHANGE

  return (
    <div
      className={`quantity-number-spinner d-inline-flex rounded-2 overflow-hidden ${
        className ?? ""
      } ${stock <= 0 ? "disabled" : ""}`}
    >
      <Button
        className="btn-main p-0 rounded-0 bg-transparent border-0"
        onClick={handleDecrement}
        aria-label="Decrease Quantity"
      >
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <Form.Control
        type="number"
        value={localQuantity}
        onChange={handleInputChange}
        min={1}
        className="text-center border-0 rounded-0 py-0 px-1 bg-transparent shadow-none fw-bold"
        aria-label="Product Quantity"
      />
      <Button
        className="btn-main p-0 rounded-0 bg-transparent border-0"
        onClick={handleIncrement}
        aria-label="Increase Quantity"
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
};

export default NumberSpinner;
