import React from "react";
import Link from "next/link";
import Image from "next/image";

const BrandCard = ({ brand }) => {
  return (
    <Link
      href={`/brand/${brand.brand_slug}`}
      className="brand-card d-flex flex-wrap align-items-center justify-content-center rounded-2 h-100 p-2 b-shadow bgColor-light"
    >
      <Image
        src={`https://truewebcart.s3-accelerate.amazonaws.com/${brand.image_url}`}
        alt={brand.brand_name}
        priority={true}
        quality="80"
        width={100}
        height={100}
        sizes="100"
      />
    </Link>
  );
};

export default BrandCard;
