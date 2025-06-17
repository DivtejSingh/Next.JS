import "./mini-cart-product.css";
import React from "react";
import Image from "next/image";
import { useCart } from "@/app/context/cartContext";
import NumberSpinner from "../number-spinner/NumberSpinner";
import Link from "next/link";

const MiniCartProduct = ({ product }) => {
  const {
    updateQuantity,
    removeProductFromCart,
    setShowMiniCart,
    setProductVariantsSelected,
  } = useCart();

  // CHECK PRODUCT TYPE
  const isSimpleProduct = product?.options?.[0]?.name === "Default Title";
  // CHECK PRODUCT TYPE

  // HANDLE CLICK
  const handleClick = () => {
    if (!isSimpleProduct) {
      setProductVariantsSelected(
        product?.variants.find(
          (prdct) =>
            JSON.stringify(Object.values(prdct?.options?.[0]?.values || [])) ===
            JSON.stringify(product.variantSelected)
        )
      );
      // setProductVariantsSelected(product);
    } else {
      setProductVariantsSelected({});
    }
    setShowMiniCart(false);
  };
  // HANDLE CLICK

  // PRODUCT STOCK
  let productStock =
    product?.variants?.find(
      (variant) =>
        JSON.stringify(Object.values(variant?.options?.[0]?.values)) ===
        JSON.stringify(product.variantSelected)
    )?.stock || product?.variants?.[0]?.stock;
  // PRODUCT STOCK

  // QUANTITY CHANGE (PRODUCT)
  const handleQuantityChange = (newQuantity) => {
    if (isSimpleProduct || product?.options?.length === 0) {
      // SIMPLE PRODUCT
      updateQuantity(product.pro_id, [], newQuantity);
    } else {
      // VARIABLE PRODUCT
      updateQuantity(product.pro_id, product.variantSelected, newQuantity);
    }
  };
  // QUANTITY CHANGE (PRODUCT)

  // REMOVE PRODUCT FROM CART
  const handleRemoveProduct = () => {
    if (isSimpleProduct || product?.options?.length === 0) {
      // SIMPLE PRODUCT
      removeProductFromCart(product.pro_id, []);
    } else {
      // VARIABLE PRODUCT
      removeProductFromCart(product.pro_id, product.variantSelected);
    }
  };
  // REMOVE PRODUCT FROM CART

  return (
    <div className="mini-cart-product rounded-3 overflow-hidden d-flex flex-wrap bgColor-tertiary bordered">
      <div className="m-n-p-image">
        <Image
          src={`https://truewebcart.s3-accelerate.amazonaws.com/${product.image}`}
          alt={product.title}
          priority={false}
          quality="80"
          width={120}
          height={120}
          className="object-fit-cover rounded-2 h-100"
        />
      </div>
      <div className="m-n-p-center py-1 py-md-2 px-2 px-md-3 flex-fill">
        <p className="d-none d-md-block fw-bold color-dark small mb-1">
          {product.vendor}
        </p>
        <h4 className="text-truncate color-text fs-6 mb-1 mb-md-2">
          <Link href={`/${product.handle}`} onClick={() => handleClick()}>
            {product.title}
            {product.variantSelected?.length
              ? ` - ${product.variantSelected.join(", ")}`
              : ""}
          </Link>
        </h4>
        <div>
          <NumberSpinner
            quantity={product.quantity || 1}
            setQuantity={handleQuantityChange}
            stock={productStock}
          />
          <span className="text-success fw-bold ms-0 ms-md-2">
            Stock: {productStock}
          </span>
        </div>
      </div>
      <div className="m-n-p-right py-1 py-md-2 px-2 px-md-3 d-flex flex-wrap flex-column align-items-end justify-content-between">
        <p className="price">
          <ins>
            £{(product?.variants?.[0]?.price * product.quantity).toFixed(2)}
          </ins>
        </p>
        <p
          className="remove-product text-decoration-underline color-text"
          onClick={handleRemoveProduct}
        >
          Remove
        </p>
      </div>
    </div>
  );
};

export default MiniCartProduct;
