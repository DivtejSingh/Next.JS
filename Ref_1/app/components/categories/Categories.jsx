"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeading from "../section-heading/SectionHeading";
import CategoryCard from "../category-card/CategoryCard";
import imageCategory from "@/public/assets/images/category.avif"

const Categories = ({ title, link, categories, className }) => {
  return (
    <section className={`categories sec-padding-small ${className || ""}`}>
      <Container>
        {title && <SectionHeading title={title} link={link} />}
        <Row className="g-2 g-md-3 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 row-cols-xxl-6">
          {categories.map((cat, index) => {
            if (index < 16) {
              return (
                <Col key={cat.cat_id}>
                  <CategoryCard category={cat}
                  />
                </Col>
              );
            }
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Categories;
