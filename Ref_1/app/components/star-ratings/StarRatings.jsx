"use client";
import { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";

const RatingDisplay = ({ rating, starDimension, className }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Avoids hydration mismatch

  return (
    <div className={`d-flex align-items-center lh-1 mb-1 ${className || ""}`}>
      {rating && (
        <>
          <StarRatings
            rating={rating}
            starRatedColor="var(--color-theme-2)"
            numberOfStars={5}
            starDimension={starDimension}
            starSpacing="1px"
          />
          <span className="ms-1 position-relative" style={{ top: "1px" }}>
            ({rating?.toFixed(1)})
          </span>
        </>
      )}
    </div>
  );
};

export default RatingDisplay;
