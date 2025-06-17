"use client";
import { Container } from "react-bootstrap";
import "./brands.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BrandCard from "../brand-card/BrandCard";
import { Grid, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const Brands = ({ brands, className }) => {
  // CHANGE SWIPER ROWS ACCORDING TO SCREEN SIZE
  const [gridRows, setGridRows] = useState(1);
  const [swiperKey, setSwiperKey] = useState(0);
  useEffect(() => {
    const updateRows = () => {
      if (window.innerWidth >= 1200) {
        setGridRows(1);
      } else if (window.innerWidth >= 992) {
        setGridRows(2);
      } else {
        setGridRows(3);
      }
      setSwiperKey((prevKey) => prevKey + 1);
    };

    updateRows();
    window.addEventListener("resize", updateRows);

    return () => window.removeEventListener("resize", updateRows);
  }, []);
  // CHANGE SWIPER ROWS ACCORDING TO SCREEN SIZE

  return (
    <section className={`brands sec-padding-small ${className || ""}`}>
      <Container>
        <Swiper
          key={swiperKey}
          // loop={true}
          spaceBetween={20}
          slidesPerView={9}
          grabCursor={true}
          modules={[Grid, Pagination]}
          grid={{
            rows: gridRows,
            fill: "row",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // when window width is >= 576px
            576: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            // when window width is >= 992px
            992: {
              slidesPerView: 7,
              spaceBetween: 15,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 9,
              spaceBetween: 20,
            },
          }}
          className="swiper-brands px-1 pb-4"
        >
          {brands.map((brand) => {
            return (
              <SwiperSlide className="py-1 h-auto" key={brand.id}>
                <BrandCard brand={brand} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
};

export default Brands;
