import "./topbar.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const Topbar = ({ className }) => {
  return (
    <div className={`hdr-top position-relative z-3 py-2 ${className || ""}`}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="h-t-left d-flex flex-wrap justify-content-center">
              <a
                href="mailto:sales@vapetocart.co.uk"
                className="d-flex align-items-center"
              >
                <span>sales@vapetocart.co.uk</span>
              </a>
            </div>
          </Col>
          <Col md={6} className="d-none d-md-block">
            <div className="h-t-right d-flex flex-wrap justify-content-end">
              <Link href="/auth/login">Login</Link>
              <span className="mx-2">|</span>
              <Link href="/auth/register">Register</Link>
              <span className="mx-2">|</span>
              <Link href="/pages/contact">Help</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Topbar;
