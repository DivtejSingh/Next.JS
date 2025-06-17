"use client";
import "./search-bar.css";
import React, { useState, useEffect, useRef } from "react";
import { Form, Button, FormControl, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const SearchBar = ({ className, placeholder = "Search", fetchProducts }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const firstCallDone = useRef(false); // Track if the first call has been made
  const typingTimeout = useRef(null); // Store debounce timeout

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Clear previous debounce timeout
    if (typingTimeout.current) clearTimeout(typingTimeout.current);
    if (value.length >= 3) {
      setShowDropdown(true); // Ensure dropdown is visible on the 3rd character

      // Trigger the first API call on the 3rd character
      if (!firstCallDone.current) {
        fetchSearchResults(value);
        firstCallDone.current = true; // Mark the first call as done
      } else {
        // Debounce subsequent API calls
        typingTimeout.current = setTimeout(() => {
          fetchSearchResults(value);
        }, 500); // Wait for 500ms after user stops typing
      }
    } else {
      // Reset if input length is less than 3
      firstCallDone.current = false;
      setSearchResults([]);
      setShowDropdown(false);
    }
  };

  const fetchSearchResults = async (query) => {
    setLoading(true);
    try {
      const results = await fetchProducts(query); // Assume `fetchProducts` is passed as a prop
      setSearchResults(results?.slice(0, 4)); // Show only the first 4 results
    } catch (error) {
      console.error("Error fetching products:", error);
      setSearchResults([]); // Clear results on error
    } finally {
      setLoading(false);
    }
  };

  const handleSearchItemClick = () => {
    setQuery("");
    setSearchResults([]);
    setShowDropdown(false);
  };

  useEffect(() => {
    // Variable to keep track of the previous window width
    let previousWidth = window.innerWidth;

    // Function to check the window width and log messages
    function checkWindowWidth() {
      const currentWidth = window.innerWidth;

      // Check if the previous width was greater than or equal to 1199 and the current width is less than 1199
      if (previousWidth >= 1199 && currentWidth < 1199) {
        handleSearchItemClick();
      }
      // Check if the previous width was less than 1199 and the current width is greater than or equal to 1199
      else if (previousWidth < 1199 && currentWidth >= 1199) {
        handleSearchItemClick();
      }

      // Update the previous width to the current width
      previousWidth = currentWidth;
    }

    // Event listener for window resize
    window.addEventListener("resize", function () {
      checkWindowWidth();
    });

    // Initial check
    checkWindowWidth();
  }, []);

  return (
    <div className={`search-bar-container position-relative ${className || ""}`}>
      <Form
        className="search-bar d-flex flex-wrap align-items-center w-100 justify-content-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <FormControl
          type="search"
          placeholder={placeholder}
          aria-label="Search"
          value={query}
          onChange={handleInputChange}
          onFocus={() => query.length >= 3 && setShowDropdown(true)}
          className="me-0 rounded-start-1 rounded-end-0 border-end-0 bordered"
        />
        {showDropdown && (
          <div className="search-dropdown position-absolute left-0 py-1 px-0 text-center">
            {loading ? (
              <div className="search-loader">Loading...</div>
            ) : searchResults?.length > 0 ? (
              <>
                {searchResults.map((product, index) => (
                  <Link
                    href={`/${product.handle}`}
                    className="search-dropdown-item py-1 px-2 text-start d-block"
                    key={index}
                    onClick={handleSearchItemClick}
                  >
                    {product.title}
                  </Link>
                ))}
                <Link href="/pages/search-results">View All</Link>
              </>
            ) : (
              <div className="search-no-product">No product found!</div>
            )}
          </div>
        )}
        <Button variant="primary" type="submit" className="btn-main rounded-start-0 rounded-end-1 p-0" aria-label="Search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;
