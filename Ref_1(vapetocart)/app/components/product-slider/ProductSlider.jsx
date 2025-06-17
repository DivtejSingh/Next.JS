"use client";
import "./product-slider.css";
import { Container } from "react-bootstrap";
import React from "react";
import SectionHeading from "../section-heading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import ProductCard from "../product-card/ProductCard";

const ProductSlider = ({ title, link, products }) => {
  return (
    <section className="products sec-light sec-padding">
      <Container>
        <SectionHeading title={title} link={link} />
        <Swiper
          spaceBetween={15}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          slidesPerView={6}
          modules={[Autoplay, Scrollbar]}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 576px
            576: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
            // when window width is >= 1400px
            1400: {
              slidesPerView: 6,
              spaceBetween: 15,
            },
          }}
          className="swiper-products p-1"
        >
          {products?.map((product,index) => {
            return (
              <SwiperSlide key={index} className="h-auto">
                <ProductCard product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
};

export default ProductSlider;
