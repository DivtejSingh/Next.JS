"use client";
import React, { createContext, useContext, useState } from "react";

const NavMobileContext = createContext();

// NAV MOBILE PROVIDER
export const NavMobileProvider = ({ children }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleShowMobileNav = () => setShowMobileNav(true);
  const handleCloseMobileNav = () => setShowMobileNav(false);

  return (
    <NavMobileContext.Provider
      value={{
        showMobileNav,
        handleShowMobileNav,
        handleCloseMobileNav,
      }}
    >
      {children}
    </NavMobileContext.Provider>
  );
};
// NAV MOBILE PROVIDER

export const useNavMobile = () => useContext(NavMobileContext);
