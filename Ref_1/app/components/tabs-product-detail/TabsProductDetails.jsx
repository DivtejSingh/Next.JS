"use client";
import "./tabs-product-detail.css";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const TabsProductDetail = ({ productData }) => {
  return (
    <div className="product-more-details">
      <Tabs
        defaultActiveKey="description"
        id="tabs-product-detail"
        className="mb-3 fw-bold"
      >
        <Tab eventKey="description" title="Description">
          <div
            dangerouslySetInnerHTML={{
              __html: productData.single_product.body_html,
            }}
          />
        </Tab>
        <Tab eventKey="second-tab" title="Specifics">
          <ul className="d-flex flex-column gap-2">
            <li className="text-capitalize">
              <strong>Product Type:</strong>{" "}
              {productData?.single_product?.product_type}
            </li>
            <li className="text-capitalize">
              <strong>Tags:</strong> {productData?.single_product?.tags}
            </li>
            <li className="text-capitalize">
              <strong>Vendor:</strong> {productData?.single_product?.vendor}
            </li>
          </ul>
        </Tab>
        <Tab eventKey="third-tab" title="Reviews">
          Tab content for Reviews
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsProductDetail;
