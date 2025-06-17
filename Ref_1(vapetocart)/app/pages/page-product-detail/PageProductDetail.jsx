"use client";
import "./page-product-detail.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import ProductSlider from "@/app/components/product-slider/ProductSlider";
import {
  faTruckFast,
  faPercent,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import SwiperProductDetail from "@/app/components/swiper-product-detail/SwiperProductDetail";
import ProductQuantityAndButton from "@/app/components/product-quantity-and-button/ProductQuantityAndButton";
import ProductCard from "@/app/components/product-card/ProductCard";
import ProductCardListView from "@/app/components/product-card-list-view/ProductCardListView";
import Breadcrumbs from "@/app/components/breadcrumbs/Breadcrumbs";
import TabsProductDetail from "@/app/components/tabs-product-detail/TabsProductDetails";
import { useState, useEffect } from "react";
import axios from "axios";
import ToastNotification from "@/app/components/toast-notification/ToastNotification";
import { useCart } from "@/app/context/cartContext";
import RatingDisplay from "@/app/components/star-ratings/StarRatings";

const PageProductDetail = ({ productData }) => {
  const { cart, productVariantsSelected } = useCart();
  const [topSellerProducts, setTopSellerProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inStock, setInStock] = useState(true);
  const [allOutOfStock, setAllOutOfStock] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState({});
  const [quantityInCart, setQuantityInCart] = useState(0);

  // CHECK PRODUCT TYPE
  const isVariableProduct =
    productData?.single_product?.options?.[0]?.name !== "Default Title";
  // CHECK PRODUCT TYPE

  // FETCH TOP SELLERS
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.vapetocart.co.uk/api/topseller"
        );
        setTopSellerProducts(response.data.topsellers.catpros);
        setError(null);
      } catch (err) {
        setError(`Failed to load top sellers.`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // FETCH TOP SELLERS

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
    } else {
      // IF NO VARIANT IS SELECTED, HANDLE SIMPLE PRODUCTS
      const noVariantItem = cart.find((item) => {
        return (
          !item.variantSelected &&
          productData?.single_product?.options?.[0]?.name === "Default Title" &&
          item.pro_id === productData.single_product.pro_id
        );
      });
      if (noVariantItem) {
        setQuantityInCart(noVariantItem.quantity);
        // console.log("Condition 3");
      } else {
        setQuantityInCart(0); // Reset when no product matches
      }
    }
  }, [selectedVariant, cart]);
  // SET QUANTITY IN CART

  // SET PRODUCT VARIANT TO FIRST VARIANT IN STOCK
  useEffect(() => {
    if (isVariableProduct) {
      if (Object.keys(productVariantsSelected).length === 0) {
        const availableVariant =
          productData.single_product.variants.find(
            (variant) => variant.stock > 0
          ) || productData.single_product.variants[0];
        // console.log(availableVariant);
        setSelectedVariant(availableVariant);
      } else {
        // console.log(productVariantsSelected);
        setSelectedVariant(productVariantsSelected);
      }

      // CHECK IF ALL VARIANTS ARE OUT OF STOCK
      const allOutOfStock = productData.single_product.variants.every(
        (variant) => variant.stock <= 0
      );
      setAllOutOfStock(allOutOfStock);
      // CHECK IF ALL VARIANTS ARE OUT OF STOCK
    }
  }, [productData?.single_product?.options]);
  // SET PRODUCT VARIANT TO FIRST VARIANT IN STOCK

  // HANDLE VARIANT CHANGE
  const handleOptionChange = (variantName, value) => {
    const updatedOptions = {
      ...selectedVariant?.options?.[0]?.values,
      [variantName]: value,
    };

    const newVariant = productData.single_product.variants.find((variant) => {
      const variantValues = Object.values(variant?.options?.[0]?.values);
      const updatedValues = Object.values(updatedOptions);

      return (
        variantValues.length === updatedValues.length &&
        variantValues.every((value, index) => value === updatedValues[index])
      );
    });

    if (newVariant?.stock <= 0) {
      setInStock(false);
    } else {
      setInStock(true);
    }

    setSelectedVariant(newVariant);
  };
  // HANDLE VARIANT CHANGE

  return (
    <>
      <Breadcrumbs path="Home/Product" />
      <section className="product-details sec-padding-small bgColor-tertiary">
        <Container>
          <Row className="gy-4 row-cols-1 row-cols-md-2">
            <Col>
              <div className="p-d-left">
                <SwiperProductDetail product={productData?.single_product} />
              </div>
            </Col>
            <Col>
              <div className="p-d-right d-flex flex-wrap flex-column align-items-start gap-1">
                <p className="fs-6 mb-0">
                  {productData?.single_product?.vendor}
                </p>
                <h1 className="fw-bold my-1 overflow-hidden color-dark">
                  {productData?.single_product?.title}
                </h1>
                <RatingDisplay rating={3.6} starDimension="20px" />
                <p className="price fs-5">
                  <ins>
                    £
                    {isVariableProduct
                      ? selectedVariant?.price
                      : productData?.single_product?.variants?.[0].price}
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
                {isVariableProduct && (
                  <Form
                    style={{ minWidth: "200px" }}
                    className="d-flex flex-column gap-2 mt-2"
                  >
                    {productData?.single_product?.options.map((variant) => (
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
                          className="text-capitalize border-dark bg-transparent"
                          onChange={(e) => {
                            return handleOptionChange(
                              variant.name,
                              e.target.value
                            );
                          }}
                        >
                          {variant.values.map((value, i) => {
                            return (
                              <option value={value} key={i}>
                                {value}
                              </option>
                            );
                          })}
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
                      productData?.single_product?.variants?.[0]?.stock)
                      ? "success"
                      : "danger"
                  } fw-bold mt-1`}
                >
                  {!allOutOfStock &&
                  inStock &&
                  (selectedVariant?.stock !== undefined ||
                    productData?.single_product?.variants?.[0]?.stock)
                    ? `Stock: ${
                        selectedVariant?.stock ||
                        productData?.single_product?.variants?.[0]?.stock
                      }`
                    : "Out of Stock"}
                </p>
                <ProductQuantityAndButton
                  productData={productData}
                  selectedVariant={selectedVariant}
                  isVariableProduct={isVariableProduct}
                  quantityInCart={quantityInCart}
                />
                <p className="text-primary fw-bold">
                  In Cart: {quantityInCart}
                </p>
                {productData?.related_product?.length > 1 && (
                  <h2 className="fs-4 mt-3 color-dark fw-bold">Add ons</h2>
                )}
                <div className="pair d-flex flex-column gap-2 w-75 pe-1">
                  {productData?.related_product &&
                    productData?.related_product.map((product, index) => {
                      if (
                        product?.options?.[0]?.name === "Default Title" &&
                        product?.variants?.[0]?.stock > 0
                      ) {
                        return (
                          <Col key={product.pro_id}>
                            <ProductCardListView
                              product={product}
                              hideCategory={true}
                            />
                          </Col>
                        );
                      } else if (
                        product?.options?.[0]?.name !== "Default Title"
                      ) {
                        return (
                          <Col key={product.pro_id}>
                            <ProductCardListView
                              product={product}
                              hideCategory={true}
                            />
                          </Col>
                        );
                      }
                    })}
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <TabsProductDetail productData={productData} />
            </Col>
          </Row>
        </Container>
      </section>
      {topSellerProducts && !error && !loading ? (
        <ProductSlider title="Top Sellers" products={topSellerProducts} />
      ) : error && !loading ? (
        <ToastNotification type="error" id="topsellers-toast" message={error} />
      ) : null}
    </>
  );
};

export default PageProductDetail;
