import "./footer-simple.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const FooterSimple = () => {
  return (
    <footer className="text-center py-3 bg-dark text-light mt-auto">
      <Container>
        <Row className={"justify-content-center py-2"}>
          <Col
            md={8}
            className="text-center d-flex slinks justify-content-center align-items-center"
          >
            <a
              href="https://www.facebook.com/vapetocart"
              target="_blank"
              title="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" title="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/vapetocart/"
              target="_blank"
              title="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" title="Instagram" />
            </a>
            <a href="https://x.com/vapetocart" target="_blank" title="Twitter">
              <FontAwesomeIcon icon={faXTwitter} size="lg" title="Twitter" />
            </a>
            <a
              href="https://uk.pinterest.com/user_elass0559/"
              target="_blank"
              title="Pinterest"
            >
              <FontAwesomeIcon icon={faPinterest} size="lg" title="Pinterest" />
            </a>
          </Col>
        </Row>
        <Row className="justify-content-center py-2">
          <Col
            md={8}
            className="text-center flinks d-flex align-items-center justify-content-center lh-sm"
          >
            <Link href="/">Home</Link>
            <Link href="/pages/about">About</Link>
            <Link href="/pages/contact">Contact</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/pages/terms">Terms</Link>
            <Link href="/pages/privacy">Privacy</Link>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={7}>
            <p className="h6">
              You have to be over 18 to purchase from this website.
            </p>
            <p className="small mt-2">
              © 2025 Vape to Cart Designed by{" "}
              <a
                href="https://www.truewebpro.co.uk/"
                target="_blank"
                className="text-decoration-underline"
              >
                Truewebpro
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterSimple;
