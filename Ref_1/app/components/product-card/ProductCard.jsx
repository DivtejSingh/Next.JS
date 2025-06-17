"use client";
import "./product-card.css";
import React, { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import NumberSpinner from "../number-spinner/NumberSpinner";
import { useCart } from "@/app/context/cartContext";
import imageProductPlaceholder from "@/public/assets/images/product-placeholder.jpg";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import SwiperProductDetail from "../swiper-product-detail/SwiperProductDetail";
import {
  faTruckFast,
  faPercent,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import ProductQuantityAndButton from "../product-quantity-and-button/ProductQuantityAndButton";
import RatingDisplay from "../star-ratings/StarRatings";

const ProductCard = ({ product, hideNumberSpinner, hideCategory }) => {
  const [selectedVariant, setSelectedVariant] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [quantityInCart, setQuantityInCart] = useState(0);
  const [allOutOfStock, setAllOutOfStock] = useState(false);
  const [inStock, setInStock] = useState(true);
  const [availableStock, setAvailableStock] = useState(0);
  const { cart, addProductToCart, setShowMiniCart } = useCart();

  // SET QUANTITY IN CART
  useEffect(() => {
    if (Object.keys(selectedVariant).length !== 0) {
      const foundItem = cart.find((item) => {
        if (!item.variantSelected) return false;

        const optionsMatch =
          JSON.stringify(item.variantSelected) ===
          JSON.stringify(Object.values(selectedVariant?.options?.[0]?.values));

        const skuMatch = item.variants.some(
          (variant) => variant.sku === selectedVariant.sku
        );

        return optionsMatch && skuMatch;
      });

      if (foundItem) {
        setQuantityInCart(foundItem.quantity);
        // console.log("Condition 1");
      } else {
        setQuantityInCart(0);
        // console.log("Condition 2");
      }
    }
  }, [selectedVariant, cart]);
  // SET QUANTITY IN CART

  // CHECK PRODUCT TYPE
  const isSimpleProduct = product?.options?.[0]?.name === "Default Title";
  // CHECK PRODUCT TYPE

  // SET PRODUCT VARIANT TO FIRST VARIANT IN STOCK
  useEffect(() => {
    if (!isSimpleProduct) {
      const availableVariant =
        product?.variants.find((variant) => variant.stock > 0) ||
        product?.variants[0];
      setSelectedVariant(availableVariant);

      // CHECK IF ALL VARIANTS ARE OUT OF STOCK
      const allOutOfStock = product?.variants.every(
        (variant) => variant.stock <= 0
      );
      setAllOutOfStock(allOutOfStock);
      // CHECK IF ALL VARIANTS ARE OUT OF STOCK
    }
  }, [product?.options]);
  // SET PRODUCT VARIANT TO FIRST VARIANT IN STOCK

  // HANDLE VARIANT CHANGE
  const handleOptionChange = (variantName, value) => {
    const updatedOptions = {
      ...selectedVariant?.options?.[0]?.values,
      [variantName]: value,
    };

    const newVariant = product?.variants.find((variant) => {
      const variantValues = Object.values(variant?.options?.[0]?.values);
      const updatedValues = Object.values(updatedOptions);

      return (
        variantValues.length === updatedValues.length &&
        variantValues.every((value, index) => value === updatedValues[index])
      );
    });

    if (newVariant.stock <= 0) {
      setInStock(false);
    } else {
      setInStock(true);
    }

    setSelectedVariant(newVariant);
  };
  // HANDLE VARIANT CHANGE

  // CHECK IF PRODUCT IS ALREADY IN CART OR NOT
  const foundProduct = cart.find((prdct) => {
    return prdct.pro_id === product.pro_id;
  });
  // CHECK IF PRODUCT IS ALREADY IN CART OR NOT

  // CHECK IF PRODUCT STOCK IS AVAILABLE
  useEffect(() => {
    if (product?.variants?.[0]?.stock !== undefined) {
      setAvailableStock(
        (product?.variants?.[0]?.stock ?? 0) - (foundProduct?.quantity ?? 0)
      );
    }
  }, [product?.variants, foundProduct?.quantity]);
  // CHECK IF PRODUCT STOCK IS AVAILABLE

  // HANDLE ADD TO CART
  const handleAddToCart = () => {
    if (isSimpleProduct) {
      if (
        foundProduct &&
        product?.variants?.[0]?.stock > foundProduct?.quantity
      ) {
        if (
          foundProduct?.quantity + quantity <=
          product?.variants?.[0]?.stock
        ) {
          addProductToCart(product, [], quantity);
        } else {
          addProductToCart(
            product,
            [],
            product?.variants?.[0]?.stock - (foundProduct?.quantity + quantity)
          );
        }
        // console.log("Old Product");
      } else {
        addProductToCart(product, [], quantity);
        // console.log("New Product");
      }
      setShowMiniCart(true);
      setQuantity(1);
    } else {
      setModalShow(true);
      // console.log("Variable Product.");
    }
  };
  // HANDLE ADD TO CART

  return (
    <>
      <div className="product-card overflow-hidden position-relative h-100 b-shadow rounded-3 bgColor-light">
        <div className="badge-container position-absolute overflow-hidden z-1">
          {product?.badgeText && <Badge>{product?.badgeText}</Badge>}
        </div>
        <Link
          href={`/${product?.handle}`}
          className="product-image overflow-hidden d-block"
        >
          <Image
            src={`https://truewebcart.s3-accelerate.amazonaws.com/${
              product?.image || imageProductPlaceholder
            }`}
            alt={product?.title}
            priority={false}
            quality="80"
            width={375}
            height={300}
            sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, (max-width: 1199px) 33vw, 25vw"
            className="object-fit-contain transition"
            style={{ aspectRatio: 1 }}
          />
        </Link>
        <div className="product-text p-1 p-md-2">
          {!hideCategory && (
            <p className="fw-bold color-dark small">{product?.vendor}</p>
          )}
          <h2 className="my-1 overflow-hidden">
            <Link className="d-block w-100" href={`/${product?.handle}`}>
              {product?.title}
            </Link>
          </h2>
          <RatingDisplay rating={3.6} starDimension="16px" className="small" />
          {product?.variants?.[0].price && (
            <p className="price mb-2">
              {product?.oldPrice && <del>£{product?.oldPrice}</del>}
              <ins>£{product?.variants?.[0].price}</ins>
            </p>
          )}
          <div className="p-t-ftr d-flex align-items-center justify-content-between mt-2 pt-2 gap-2">
            {!hideNumberSpinner &&
              (isSimpleProduct || product?.options?.length === 0) && (
                <NumberSpinner
                  quantity={quantity}
                  setQuantity={setQuantity}
                  className="w-50"
                  stock={availableStock}
                />
              )}
            <Button
              className={`btn-main ${
                isSimpleProduct || product?.options?.length === 0
                  ? "w-50"
                  : "w-100"
              } ${isSimpleProduct && !availableStock ? "disabled" : ""}`}
              onClick={handleAddToCart}
            >
              {isSimpleProduct || product?.options?.length === 0
                ? "Add"
                : "Select Option"}
            </Button>
            {/* <FontAwesomeIcon icon={faHeart} /> */}
          </div>
        </div>
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-quick-view"
      >
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body className="pt-0">
          <Row>
            <Col md={5} className="d-none d-md-block">
              <div className="p-d-left">
                <SwiperProductDetail product={product} />
              </div>
            </Col>
            <Col md={7}>
              <div className="p-d-right d-flex flex-wrap flex-column align-items-start gap-1 pe-2">
                <p className="fs-6 mb-0">{product.vendor}</p>
                <h1 className="fw-bold my-1 overflow-hidden color-dark">
                  {product.title}
                </h1>
                <RatingDisplay rating={3.6} starDimension="16px" className="small" />
                <p className="price fs-5">
                  <ins>
                    £
                    {!isSimpleProduct
                      ? selectedVariant?.price
                      : product.variants?.[0]?.price}
                  </ins>
                </p>
                <ul>
                  <li>
                    <FontAwesomeIcon className="me-2" icon={faTruckFast} />
                    Fast & Free Delivery Order Above £25!
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faClock}
                      style={{ color: "#2c9df2" }}
                    />
                    Order Before 4:00pm Same Day Ship Out!
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faPercent}
                      style={{ color: "#72c100" }}
                    />
                    Get Mulibuy Discount Every Product Today!
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faCircleCheck}
                      style={{ color: "#00bf66" }}
                    />
                    Join Our loyalty program for exclusive Offers!
                  </li>
                </ul>
                {!isSimpleProduct && (
                  <Form className="mt-2 w-100">
                    {product?.options.map((variant, index) => (
                      <div key={variant.id}>
                        <Form.Label className="fw-bold mb-1 color-dark">
                          {variant.name}
                        </Form.Label>
                        <Form.Select
                          value={
                            selectedVariant?.options?.[0]?.values?.[
                              variant.name
                            ] || ""
                          }
                          className="border-dark"
                          onChange={(e) => {
                            return handleOptionChange(
                              variant.name,
                              e.target.value
                            );
                          }}
                        >
                          {variant.values.map((value, i) => (
                            <option value={value} key={i}>
                              {value}
                            </option>
                          ))}
                        </Form.Select>
                      </div>
                    ))}
                  </Form>
                )}
                <p
                  className={`text-${
                    !allOutOfStock &&
                    inStock &&
                    (selectedVariant?.stock !== undefined ||
                      product?.variants?.[0]?.stock)
                      ? "success"
                      : "danger"
                  } fw-bold mt-1`}
                >
                  {!allOutOfStock &&
                  inStock &&
                  (selectedVariant?.stock !== undefined ||
                    product?.variants?.[0]?.stock)
                    ? `Stock: ${
                        selectedVariant?.stock || product?.variants?.[0]?.stock
                      }`
                    : "Out of Stock"}
                </p>
                <ProductQuantityAndButton
                  productData={product}
                  selectedVariant={selectedVariant}
                  isVariableProduct={!isSimpleProduct}
                  quantityInCart={quantityInCart}
                  setModalShow={setModalShow}
                  className="w-100"
                />
                <p className="text-primary fw-bold">
                  In Cart: {quantityInCart}
                </p>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductCard;
