"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeading from "../section-heading/SectionHeading";
import HomeCategoryCard from "../home-category-card/HomeCategoryCard";

const HomeCategories = ({ featuredCategories, title, link, className }) => {
  return (
    <section className={`home-categories sec-padding-small ${className || ""}`}>
      <Container>
        {title && <SectionHeading title={title} link={link} />}
        <Row className="g-2 g-md-3 row-cols-1 row-cols-sm-2 row-cols-lg-3">
          {featuredCategories.map((fc, index) => {
            if (index < 6) {
              return (
                <Col key={fc.cat_id}>
                  <HomeCategoryCard fc={fc} />
                </Col>
              );
            }
          })}
        </Row>
      </Container>
    </section>
  );
};

export default HomeCategories;
