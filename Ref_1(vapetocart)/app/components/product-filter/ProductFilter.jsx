"use client";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./ProductFilter.css";

// SORT OPTIONS
const sortOptions = [
  { value: "az", label: "Alphabetically, A-Z" },
  { value: "za", label: "Alphabetically, Z-A" },
  { value: "price-low-high", label: "Price, low to high" },
  { value: "price-high-low", label: "Price, high to low" },
  { value: "date-old-new", label: "Date, old to new" },
  { value: "date-new-old", label: "Date, new to old" },
];
// SORT OPTIONS

export default function ProductFilter({ onSortChange }) {
  const [selectedSort, setSelectedSort] = useState(sortOptions[0].value);

  // HANDLE SELECT
  const handleSelect = (value) => {
    setSelectedSort(value);
    onSortChange?.(value);
  };
  // HANDLE SELECT

  return (
    <div className="product-filter d-flex align-items-center justify-content-end mb-3">
      <span className="me-2">Sort by:</span>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="outline-dark" className="rounded-1">
          {sortOptions.find((option) => option.value === selectedSort)?.label}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {sortOptions.map((option) => (
            <Dropdown.Item key={option.value} eventKey={option.value}>
              {option.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
