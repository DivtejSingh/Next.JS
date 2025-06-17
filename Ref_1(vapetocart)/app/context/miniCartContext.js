"use client";
import { createContext, useState, useContext } from "react";

const MiniCartContext = createContext();

// MINI CART PROVIDER
export const MiniCartProvider = ({ children }) => {
  const [showMiniCart, setShowMiniCart] = useState(false);

  const handleCloseMiniCart = () => setShowMiniCart(false);
  const handleShowMiniCart = () => setShowMiniCart(true);

  return (
    <MiniCartContext.Provider
      value={{ showMiniCart, handleCloseMiniCart, handleShowMiniCart }}
    >
      {children}
    </MiniCartContext.Provider>
  );
};
// MINI CART PROVIDER

export const useMiniCart = () => useContext(MiniCartContext);
