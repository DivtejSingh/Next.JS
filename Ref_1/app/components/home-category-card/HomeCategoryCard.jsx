import "./home-category-card.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeCategoryCard = ({ fc }) => {
  return (
    <Link
      href={fc.handle}
      className="home-category-card d-flex flex-column justify-content-between rounded-3 position-relative h-100 overflow-hidden b-shadow"
    >
      <div className="h-c-c-image ratio ratio-21x9 position-relative">
        <Image
          src={`https://truewebcart.s3-accelerate.amazonaws.com/${fc.image_url}`}
          alt={fc.promo_text}
          priority={false}
          quality="80"
          width={500}
          height={181}
          sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 500px"
          className="w-100 object-fit-cover h-100"
        />
        <span
          className="h-f-c-c-label position-absolute top-0 text-uppercase fw-bold pt-1 pb-2 px-2 pt-md-2 pb-md-3 px-md-3 w-auto h-auto text-light"
          style={{
            backgroundColor: `${
              fc.type === "New" ? "var(--color-badge-green)" : "var(--color-theme-1)"
            }`,
          }}
        >
          {fc.label_text}
        </span>
      </div>
      <div className="h-c-c-text text-center position-absolute start-0 bottom-0 py-2 ps-3 pe-4 bgColor-light b-shadow">
        <h2 className="text-uppercase fw-bold text-truncate mb-0 text-start color-dark small">
          {fc.promo_text}
        </h2>
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
    </Link>
  );
};

export default HomeCategoryCard;
