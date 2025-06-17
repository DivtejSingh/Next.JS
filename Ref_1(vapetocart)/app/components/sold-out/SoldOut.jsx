"use client";
import { Button, Container } from "react-bootstrap";
import "./sold-out.css";
import React from "react";
import Link from "next/link";

const SoldOut = () => {
  return (
    <section className="sold-out sec-light">
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-danger">Sold Out</h1>
        <p className="text-center mb-4">
          We regret to inform you that all products in this category are
          currently sold out.
        </p>
        <Link href="/products">
          <Button className="btn-main">View All Products</Button>
        </Link>
      </Container>
    </section>
  );
};

export default SoldOut;
