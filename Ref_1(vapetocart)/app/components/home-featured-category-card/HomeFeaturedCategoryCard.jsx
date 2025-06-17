import "./home-featured-category-card.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeFeaturedCategoryCard = ({ fc }) => {
  return (
    <Link
      href={fc.handle}
      className="home-featured-category-card d-flex flex-column justify-content-between rounded-3 position-relative h-100 transition"
    >
      <div className="h-f-c-c-image mb-2 b-shadow rounded-2 overflow-hidden position-relative">
        <Image
          src={`https://truewebcart.s3-accelerate.amazonaws.com/${fc.image_url}`}
          alt={fc.heading}
          priority={true}
          quality="80"
          width={500}
          height={500}
          sizes="(max-width: 991px) 50vw, 500px"
          className="w-100 object-fit-cover h-auto"
        />
        <span
          className="h-f-c-c-label position-absolute top-0 text-uppercase fw-bold pt-1 pb-2 px-2 pt-md-2 pb-md-3 px-md-3 color-light"
          style={{
            backgroundColor: `${
              fc.type === "New" ? "var(--color-badge-green)" : "var(--color-theme-1)"
            }`,
          }}
        >
          {fc.label_text}
        </span>
        <div className="h-f-c-c-promo-text text-center position-absolute start-0 bottom-0 py-2 ps-3 pe-4 bgColor-light b-shadow">
          <p className="text-uppercase fw-bold text-truncate mb-0 text-start color-dark small">
            {fc.promo_text}
          </p>
          <span
            className="position-absolute top-0 h-100"
            style={{
              left: "auto",
              right: "-10px",
              width: "20px",
              transform: "skewX(30deg)",
              backgroundColor: `${
                fc.type === "New" ? "var(--color-badge-green)" : "var(--color-theme-1)"
              }`,
            }}
          ></span>
        </div>
      </div>
      <div className="h-f-c-c-text">
        <h2 className="my-1 fw-bold text-truncate color-dark fs-6">{fc.heading}</h2>
        <h3 className="text-truncate fs-6">{fc.subheading}</h3>
      </div>
    </Link>
  );
};

export default HomeFeaturedCategoryCard;
