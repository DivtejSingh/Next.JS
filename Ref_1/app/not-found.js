import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";

const PageNotFound = () => {
  return (
    <section className="not-found sec-light">
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-danger fs-3 mb-2">Page not found!</h1>
        <p className="text-center mb-4">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link href="/">
          <button type="button" className="btn-main btn btn-primary">
            Go to homepage
          </button>
        </Link>
      </Container>
    </section>
  );
};

export default PageNotFound;
