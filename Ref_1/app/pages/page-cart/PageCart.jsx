"use client";
import "./page-cart.css";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/cartContext";
import NumberSpinner from "@/app/components/number-spinner/NumberSpinner";
import { Container } from "react-bootstrap";
import SectionHeadingCenter from "@/app/components/sec-heading-center/SectionHeadingCenter";
import Table from "react-bootstrap/Table";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import LoaderSpinner from "@/app/components/loader-spinner/LoaderSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

const PageCart = () => {
  const {
    cart,
    removeProductFromCart,
    updateQuantity,
    totalPrice,
    totalQuantity,
  } = useCart();

  // STATE TO HANDLE WHEN CART DATA IS LOADED (HELPS WITH HYDRATION ISSUES)
  const [isClient, setIsClient] = useState(false);
  // STATE TO HANDLE WHEN CART DATA IS LOADED (HELPS WITH HYDRATION ISSUES)

  const [quantityInCart, setQuantityInCart] = useState({});

  useEffect(() => {
    setIsClient(true);

    // SET QUANTITY IN CART FOR EACH PRODUCT/VARIANT
    const updateQuantities = () => {
      const quantities = {};

      cart.forEach((item) => {
        if (item.variantSelected) {
          // FOR VARIANT PRODUCTS, MATCH BY PRODUCT ID AND VARIANT OPTIONS
          const key = `${item.pro_id}_${JSON.stringify(item.variantSelected)}`;
          quantities[key] = item.quantity;
        } else {
          // FOR SIMPLE PRODUCTS, MATCH BY PRODUCT ID ONLY
          quantities[item.pro_id] = item.quantity;
        }
      });

      setQuantityInCart(quantities);
    };

    updateQuantities();
    // SET QUANTITY IN CART FOR EACH PRODUCT/VARIANT
  }, [cart]);

  // HANDLE QUANTITY CHANGE
  const handleQuantityChange = (productId, variantSelected, quantity) => {
    if (quantity > 0) {
      updateQuantity(productId, variantSelected, quantity);

      // UPDATE LOCAL STATE FOR BETTER UI FEEDBACK
      if (variantSelected) {
        const key = `${productId}_${JSON.stringify(variantSelected)}`;
        setQuantityInCart((prev) => ({
          ...prev,
          [key]: quantity,
        }));
      } else {
        setQuantityInCart((prev) => ({
          ...prev,
          [productId]: quantity,
        }));
      }
      // UPDATE LOCAL STATE FOR BETTER UI FEEDBACK
    }
  };
  // HANDLE QUANTITY CHANGE

  // RENDER NOTHING OR A LOADING STATE UNTIL IT'S MOUNTED AND CLIENT-SIDE DATA IS AVAILABLE
  if (!isClient) {
    return <LoaderSpinner />;
  }
  // RENDER NOTHING OR A LOADING STATE UNTIL IT'S MOUNTED AND CLIENT-SIDE DATA IS AVAILABLE

  return (
    <section className="sec-cart sec-padding-small">
      <Container>
        {cart.length === 0 && (
          <div className="empty-cart d-flex flex-wrap flex-column align-items-center justify-content-center">
            <FontAwesomeIcon icon={faFaceSadTear} className="fs-1 mb-3" />
            <p className="text-danger text-uppercase fw-bold fs-3 mb-2">
              Your cart is currenty empty.
            </p>
            <p>
              It looks like you haven't added any items to your cart yet. Start
              browsing our products and add some items to your cart.
            </p>
            <Link href="/">
              <Button className="btn-main mt-4">Go to homepage</Button>
            </Link>
          </div>
        )}
        {cart.length > 0 && (
          <>
            <SectionHeadingCenter text="Cart" />
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th style={{ textAlign: "center" }}>Type</th>
                  <th style={{ textAlign: "center" }}>Price</th>
                  <th style={{ textAlign: "center" }}>Stock</th>
                  <th style={{ textAlign: "center" }}>Quantity</th>
                  <th style={{ textAlign: "center" }}>Total</th>
                  <th style={{ textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product, index) => {
                  const key = product.variantSelected
                    ? `${product.pro_id}_${JSON.stringify(
                        product.variantSelected
                      )}`
                    : product.pro_id;
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>
                        <Image
                          src={`https://truewebcart.s3-accelerate.amazonaws.com/${product.image}`}
                          alt={product.title}
                          priority={false}
                          quality="80"
                          width={120}
                          height={120}
                          className="rounded-2"
                        />
                      </td>
                      <td className="product-title">
                        <Link
                          className="fs-6"
                          href={`/${product.handle}`}
                          style={{ fontWeight: "500" }}
                        >
                          {product.title}
                          {product.variantSelected?.length
                            ? ` - ${product.variantSelected.join(", ")}`
                            : ""}
                        </Link>
                      </td>
                      <td style={{ whiteSpace: "nowrap", textAlign: "center" }}>
                        {product.product_type ? product.product_type : "-"}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        £{product?.variants?.[0]?.price}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {product.variantSelected
                          ? product?.variants?.find(
                              (variant) =>
                                JSON.stringify(
                                  Object.values(variant?.options?.[0]?.values)
                                ) === JSON.stringify(product.variantSelected)
                            )?.stock ?? 0
                          : product?.variants?.[0]?.stock ?? 0}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <NumberSpinner
                          quantity={quantityInCart[key] || 0}
                          setQuantity={(newQuantity) =>
                            handleQuantityChange(
                              product.pro_id,
                              product.variantSelected,
                              newQuantity
                            )
                          }
                          stock={
                            product.variantSelected
                              ? product?.variants?.find(
                                  (variant) =>
                                    JSON.stringify(
                                      Object.values(
                                        variant?.options?.[0]?.values
                                      )
                                    ) ===
                                    JSON.stringify(product.variantSelected)
                                )?.stock
                              : product?.variants?.[0]?.stock
                          }
                        />
                      </td>
                      <td style={{ textAlign: "center" }}>
                        £
                        {(
                          product?.variants?.[0]?.price *
                          Number(quantityInCart[key] || 0)
                        ).toFixed(2)}
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <p
                          className="remove-product text-decoration-underline"
                          onClick={() =>
                            removeProductFromCart(
                              product.pro_id,
                              product.variantSelected
                            )
                          }
                        >
                          Remove
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </>
        )}
        {cart.length > 0 && (
          <div className="cart-details ms-auto text-end">
            <p className="d-flex justify-content-between mt-2 fw-bold">
              <strong className="fw-bold">Subtotal:</strong>
              <span>£{totalPrice}</span>
            </p>
            <p className="d-flex justify-content-between mt-2 fw-bold">
              <strong className="fw-bold">Shipping:</strong>
              <span>{totalPrice > 40 ? "Free" : "£3.60"}</span>
            </p>
            <p className="d-flex justify-content-between mt-2 fw-bold color-dark">
              <strong className="fw-bold">Total:</strong>
              <span>
                £
                {(+totalPrice > 40 ? +totalPrice : +totalPrice + 3.6).toFixed(
                  2
                )}
              </span>
            </p>
            <Button className="btn-main">Checkout</Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default PageCart;
