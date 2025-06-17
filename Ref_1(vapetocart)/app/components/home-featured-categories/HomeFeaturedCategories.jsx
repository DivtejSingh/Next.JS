"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeading from "../section-heading/SectionHeading";
import HomeFeaturedCategoryCard from "../home-featured-category-card/HomeFeaturedCategoryCard";

const HomeFeaturedCategories = ({ featuredGrid, className }) => {
  return (
    <section
      className={`home-featured-categories sec-padding-small ${
        className || ""
      }`}
    >
      <Container>
        {featuredGrid.title && (
          <SectionHeading
            title={featuredGrid.title}
            link={featuredGrid.handle}
          />
        )}
        <Row className="g-2 g-md-3 row-cols-2 row-cols-lg-4">
          {featuredGrid.map((fc, index) => {
            if (index < 6) {
              return (
                <Col key={fc.cat_id}>
                  <HomeFeaturedCategoryCard fc={fc} />
                </Col>
              );
            }
          })}
        </Row>
      </Container>
    </section>
  );
};

export default HomeFeaturedCategories;
