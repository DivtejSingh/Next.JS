"use client";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import ProductCard from "../product-card/ProductCard";
import SectionHeadingCenter from "../sec-heading-center/SectionHeadingCenter";

const ProductGrid = ({ title, products, sectionClass }) => {

  return (
    <section className={`products sec-padding-small ${sectionClass}`}>
      <Container>
        <SectionHeadingCenter text={title} />
        <Row className="product-grid g-2 g-md-3 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 row-cols-xxl-6">
          {products.map((product, index) => {
            return (
              <Col key={index}>
                <ProductCard product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default ProductGrid;
