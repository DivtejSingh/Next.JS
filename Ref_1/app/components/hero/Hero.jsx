"use client";
import React from "react";
import Image from "next/image";
import imageHero from "@/public/assets/images/hero-1.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

const Hero = ({ source }) => {
  return (
    <section className="hero sec-light sec-padding-small pt-0 ps-0">
      <Container
        style={{
          backgroundImage: `url(${source?.image_url ? "https://truewebcart.s3-accelerate.amazonaws.com/" + source.image_url : imageHero})`,
          backgroundSize: "contain",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#d9d9d9",
        }}
      >
        <Row className="align-items-center" style={{ minHeight: "400px" }}>
          <Col sm={8} md={5} lg={6} className="px-2 px-md-4">
            <div className="hero-content">
              <h1 className="display-5 fw-bold text-dark">{source?.heading}</h1>
              <h2 className="mt-2 display-7">{source?.subheading}</h2>
              <Link href={source?.handle}>
                <Button className="btn-main mt-4">{source?.button_text}</Button>
              </Link>
            </div>
          </Col>
        </Row>
        {/* <Image
          src={
            source
              ? `https://truewebcart.s3-accelerate.amazonaws.com/${source}`
              : imageHero
          }
          alt="Hero Image"
          priority={true}
          quality="80"
          layout="responsive"
          width={1200}
          height={400}
          sizes="100vw"
          className="w-100 object-fit-cover"
          style={{maxHeight: "500px"}}
        /> */}
      </Container>
    </section>
  );
};

export default Hero;
