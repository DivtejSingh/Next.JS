import React from "react";
import Image from "next/image";
import Link from "next/link";


const CategoryCard = ({category}) => {
  return (
    <Link href={`/${category.handle}`} className="category-card d-flex flex-column justify-content-between rounded-3 position-relative h-100 b-shadow overflow-hidden bgColor-light transition">
      <div className="category-image">
        <Image
          src={`https://truewebcart.s3-accelerate.amazonaws.com/${category.image_url}`}
          alt={`Category - ${category.title}`}
          priority={false}
          quality="80"
          width={400}
          height={400}
          sizes="(max-width: 575px) 50vw, (max-width: 767px) 33vw, (max-width: 1199px) 25vw, (max-width: 1399px) 20vw, 400px"
          className="w-100 object-fit-cover h-auto"
        />
      </div>
      <div className="category-text text-center py-2 px-3">
        <h2 className="mb-1 text-uppercase fw-bold text-truncate color-dark small">{category.title}</h2> {category.stock && <p className={category.stock > 0 ? "" : "text-danger"}>{category.stock > 0 ? `${category.stock} Items` : "Out of Stock"}</p>}
      </div>
    </Link>
  );
};

export default CategoryCard;
