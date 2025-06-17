"use client";
import "./banner-small.css";
import React from 'react';
import { Container } from "react-bootstrap";
import imageBlogDetail from "@/public/assets/images/blog-detail.jpg";
import Image from "next/image";

const BannerSmall = ({image, heading}) => {
  return (
    <div className="banner-small d-flex flex-wrap align-items-center justify-content-center position-relative z-1">
        <Image
          src={image || imageBlogDetail}
          alt="Banner"
          priority={true}
          quality="80"
          className="h-100 object-fit-cover position-absolute top-0 start-0 w-100 z-n1"
        />
        <Container>
          <h1 className="fw-bold text-center px-3 text-uppercase mx-auto display-4 color-light t-shadow overflow-hidden">{heading}</h1>
        </Container>
      </div>
  )
}

export default BannerSmall