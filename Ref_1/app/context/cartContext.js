"use client";
import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

// CART PROVIDER
export const CartProvider = ({ children }) => {
  const [showMiniCart, setShowMiniCart] = useState(false);
  const [productVariantsSelected, setProductVariantsSelected] = useState({});

  // LOAD CART FROM LOCALSTORAGE OR INITIALIZE AS AN EMPTY ARRAY
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart
        ? JSON.parse(savedCart).map((item) => ({
            ...item,
            quantity:
              isNaN(item.quantity) || item.quantity < 1 ? 1 : item.quantity,
          }))
        : [];
    }
    return [];
  });
  // LOAD CART FROM LOCALSTORAGE OR INITIALIZE AS AN EMPTY ARRAY

  // SAVE CART TO LOCALSTORAGE WHENEVER IT CHANGES
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  // SAVE CART TO LOCALSTORAGE WHENEVER IT CHANGES

  // ADD PRODUCT TO THE CART (INCREASES QUANTITY IF ALREADY PRESENT)
  const addProductToCart = (product, variantSelected = [], quantity = 1) => {
    const validQuantity = isNaN(quantity) || quantity < 1 ? 1 : quantity;

    setCart((prevCart) => {
      // CHECK PRODUCT TYPE
      const isVariantProduct = variantSelected.length > 0;
      // CHECK PRODUCT TYPE

      if (isVariantProduct) {
        // CHECK IF VARIANT PRODUCT IS ALREADY IN CART
        const existingProduct = prevCart.find(
          (item) =>
            item.pro_id === product.pro_id &&
            JSON.stringify(item.variantSelected) ===
              JSON.stringify(variantSelected)
        );
        // CHECK IF VARIANT PRODUCT IS ALREADY IN CART

        if (existingProduct) {
          // IF PRODUCT WITH SAME VARIANT EXISTS, UPDATE ITS QUANTITY
          return prevCart.map((item) =>
            item.pro_id === product.pro_id &&
            JSON.stringify(item.variantSelected) ===
              JSON.stringify(variantSelected)
              ? {
                  ...item,
                  quantity: Math.min(
                    item.quantity + validQuantity,
                    product.stock || 1000
                  ),
                }
              : item
          );
          // IF PRODUCT WITH SAME VARIANT EXISTS, UPDATE ITS QUANTITY
        } else {
          // ADD NEW VARIANT PRODUCT TO CART
          return [
            ...prevCart,
            {
              ...product,
              variantSelected,
              quantity: Math.min(validQuantity, product.stock || 1000),
            },
          ];
          // ADD NEW VARIANT PRODUCT TO CART
        }
      } else {
        // CHECK IF SIMPLE PRODUCT IS ALREADY IN CART
        const existingProduct = prevCart.find(
          (item) => item.pro_id === product.pro_id
        );
        // CHECK IF SIMPLE PRODUCT IS ALREADY IN CART

        if (existingProduct) {
          // IF PRODUCT EXISTS, UPDATE ITS QUANTITY
          return prevCart.map((item) =>
            item.pro_id === product.pro_id
              ? {
                  ...item,
                  quantity: Math.min(
                    item.quantity + validQuantity,
                    product.stock || 1000
                  ),
                }
              : item
          );
          // IF PRODUCT EXISTS, UPDATE ITS QUANTITY
        } else {
          // ADD NEW SIMPLE PRODUCT TO CART
          return [
            ...prevCart,
            {
              ...product,
              quantity: Math.min(validQuantity, product.stock || 1000),
            },
          ];
          // ADD NEW SIMPLE PRODUCT TO CART
        }
      }
    });
  };
  // ADD PRODUCT TO THE CART (INCREASES QUANTITY IF ALREADY PRESENT)

  // UPDATE PRODUCT QUANTITY IN THE CART
  const updateQuantity = (productId, variantSelected = [], quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        const isVariantMatch =
          JSON.stringify(item.variantSelected || []) ===
          JSON.stringify(variantSelected);

        if (item.pro_id === productId && isVariantMatch) {
          return {
            ...item,
            quantity: Math.max(
              1,
              Math.min(quantity, item.stock !== undefined ? item.stock : 1000) // Ensure within stock limits
            ),
          };
        }

        return item;
      })
    );
  };
  // UPDATE PRODUCT QUANTITY IN THE CART

  // REMOVE PRODUCT FROM THE CART
  const removeProductFromCart = (productId, variantSelected = []) => {
    setCart((prevCart) =>
      prevCart.filter((item) => {
        const isVariantMatch =
          JSON.stringify(item.variantSelected || []) ===
          JSON.stringify(variantSelected);

        // REMOVE ITEM ONLY IF BOTH PRODUCTID AND VARIANT MATCH
        return !(item.pro_id === productId && isVariantMatch);
        // REMOVE ITEM ONLY IF BOTH PRODUCTID AND VARIANT MATCH
      })
    );
  };
  // REMOVE PRODUCT FROM THE CART

  // CLEAR THE CART
  const clearCart = () => {
    setCart([]);
  };
  // CLEAR THE CART

  // CALCULATE TOTAL QUANTITY IN THE CART
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  // CALCULATE TOTAL QUANTITY IN THE CART

  // CALCULATE TOTAL PRICE IN THE CART
  const totalPrice = cart
    .reduce((total, item) => {
      const price = parseFloat(item?.variants?.[0]?.price) || 0; // Ensure valid price
      return total + price * item.quantity; // Multiply price by quantity
    }, 0)
    .toFixed(2);
  // CALCULATE TOTAL PRICE IN THE CART

  return (
    <CartContext.Provider
      value={{
        showMiniCart,
        setShowMiniCart,
        cart,
        addProductToCart,
        updateQuantity,
        removeProductFromCart,
        clearCart,
        totalQuantity,
        totalPrice,
        productVariantsSelected,
        setProductVariantsSelected,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// CART PROVIDER
