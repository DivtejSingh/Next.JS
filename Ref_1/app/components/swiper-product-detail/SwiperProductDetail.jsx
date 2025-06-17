"use client";
import "./swiper-product-detail.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

const SwiperProductDetail = ({ product }) => {
  return (
    <div className="swiper-product-detail">
      {product?.images?.length > 2 ? (
        <>
          <Swiper
            modules={[Navigation, Thumbs]}
            spaceBetween={10}
            slidesPerView={1}
            grabCursor={false}
            mousewheel={{ enabled: false }}
            keyboard={{ enabled: false }}
            simulateTouch={false}
            allowTouchMove={false}
            className="swiper-product-gallery"
          >
            {product?.images?.map((image, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  className="zoom-image"
                  src={image.src}
                  alt=""
                  priority={true}
                  quality="80"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={5.5}
            navigation={true}
            className="swiper-product-thumbnails mt-3"
          >
            {product?.images?.map((image, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  src={image.src}
                  alt="Product Image"
                  priority={true}
                  quality="80"
                  width={144}
                  height={108}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <div className="single-image rounded-3 p-3 text-center bgColor-light">
          <Image
            src={`https://truewebcart.s3-accelerate.amazonaws.com/${product?.image}`}
            alt={product?.title || "Product Image"}
            priority={true}
            quality="80"
            width={600}
            height={600}
            className="object-fit-contain rounded-2 h-auto"
          />
        </div>
      )}
    </div>
  );
};

export default SwiperProductDetail;
