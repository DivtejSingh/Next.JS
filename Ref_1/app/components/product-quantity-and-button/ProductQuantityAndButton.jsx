"use client";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useCart } from "@/app/context/cartContext";
import NumberSpinner from "../number-spinner/NumberSpinner";

const ProductQuantityAndButton = ({
  productData,
  selectedVariant,
  setModalShow,
  className,
  isVariableProduct,
  quantityInCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart, setShowMiniCart } = useCart();

  // HANDLE ADD TO CART
  const handleAddToCart = () => {
    const product = productData?.single_product || productData;
    if (
      (product?.options?.[0]?.name === "Default Title" ||
        product?.options?.length === 0) &&
      product?.variants?.[0]?.stock
    ) {
      addProductToCart(product, [], quantity);
    } else {
      if (quantity + quantityInCart <= selectedVariant?.stock) {
        addProductToCart(
          product,
          Object.values(selectedVariant?.options?.[0]?.values),
          quantity
        );
      } else {
        addProductToCart(
          product,
          Object.values(selectedVariant?.options?.[0]?.values),
          1
        );
      }
    }
    setModalShow && setModalShow(false);
    setQuantity(1);
    setShowMiniCart(true);
  };
  // HANDLE ADD TO CART

  // PRODUCT STOCK
  const stock =
    Object.values(selectedVariant).length > 0
      ? selectedVariant?.stock - quantityInCart
      : Object.values(productData?.variants?.[0] || {}).length > 0
      ? productData?.variants?.[0]?.stock - quantityInCart
      : productData?.single_product?.variants?.[0]?.stock - quantityInCart;
  // PRODUCT STOCK

  return (
    <div
      className={`product-quantity-button d-flex align-items-end mt-2 gap-2 ${
        className ?? ""
      }`}
    >
      <div className="product-quantity w-25">
        <p className="mb-1 fw-bold color-dark">Quantity:</p>
        <NumberSpinner
          quantity={quantity}
          setQuantity={setQuantity}
          className="w-100"
          stock={stock}
        />
      </div>
      <Button
        className="btn-main w-75 text-uppercase"
        onClick={handleAddToCart}
        disabled={
          (isVariableProduct &&
            selectedVariant?.stock - quantityInCart === 0) ||
          (!isVariableProduct &&
            productData?.single_product?.variants?.[0]?.stock -
              quantityInCart) === 0
            ? true
            : false
        }
      >
        Add to cart
      </Button>
      <p className="d-none"></p>
    </div>
  );
};

export default ProductQuantityAndButton;
