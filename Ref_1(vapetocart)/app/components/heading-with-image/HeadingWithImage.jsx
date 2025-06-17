import React from "react";
import Image from "next/image";

const HeadingWithImage = ({ logo, heading, image }) => {
  return (
    <div className="p-4 d-flex flex-wrap align-items-center gap-3 bgColor-light rounded-2 mb-4">
      <div className="s-brand-logo">
        {logo && (
          <Image
            src={logo}
            alt="Logo"
            priority={true}
            quality="80"
            width={208}
            height={66}
            sizes="208"
            className="object-fit-contain h-auto"
          />
        )}
      </div>
      <h1 className="fw-bold fs-3 color-dark">{heading}</h1>
      {image && (
        <Image
          src={image}
          alt="image"
          priority={true}
          quality="80"
          width={400}
          height={100}
          sizes="400"
          className="object-fit-contain h-auto"
        />
      )}
    </div>
  );
};

export default HeadingWithImage;
