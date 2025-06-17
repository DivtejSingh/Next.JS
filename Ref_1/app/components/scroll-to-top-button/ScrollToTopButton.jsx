"use client";
import "./scroll-to-top-button.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // SHOW BUTTON WHEN USER SCROLLS DOWN
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    // SHOW BUTTON WHEN USER SCROLLS DOWN

    // ADD SCROLL EVENT LISTENER
    window.addEventListener("scroll", handleScroll);
    // ADD SCROLL EVENT LISTENER

    // CLEAN UP EVENT LISTENER ON COMPONENT UNMOUNT
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // CLEAN UP EVENT LISTENER ON COMPONENT UNMOUNT
  }, []);

  // SCROLL TO TOP FUNCTION
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // SCROLL TO TOP FUNCTION

  return (
    isVisible && (
      <div
        className="scroll-to-top d-flex flex-wrap align-items-center justify-content-center rounded-circle position-fixed z-2"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    )
  );
};

export default ScrollToTopButton;
