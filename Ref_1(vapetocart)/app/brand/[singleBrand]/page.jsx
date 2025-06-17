import "./single-brand.css";
import React from "react";
import axios from "axios";
import { redirect } from "next/navigation";
import Breadcrumbs from "@/app/components/breadcrumbs/Breadcrumbs";
import ProductGrid from "@/app/components/product-grid/ProductGrid";
import Script from "next/script";

export async function generateMetadata({ params }) {
  const brandTitle = params.singleBrand.replaceAll("-", " ");

  return {
    title: `${brandTitle} | Vape to Cart`,
    description: `${brandTitle} | Vape to Cart`,
    alternates: {
      canonical: `https://www.vapetocart.co.uk/brand/${params.singleBrand}`,
    },
    robots: "index, follow",
    openGraph: {
      title: `${brandTitle} | Vape to Cart`,
      description: `${brandTitle} | Vape to Cart`,
      url: `https://www.vapetocart.co.uk/brand/${params.singleBrand}`,
      type: "website",
      siteName: "Vape to Cart",
      images: [
        {
          url: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
          secureUrl: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${brandTitle} | Vape to Cart`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${brandTitle} | Vape to Cart`,
      description: `${brandTitle} | Vape to Cart`,
      images: ["https://www.vapetocart.co.uk/assets/images/og-image.jpg"],
    },
  };
}

// FUNCTION TO FETCH FEATURED BRANDS
async function fetchFeaturedBrands(brandName) {
  try {
    const response = await axios.get(
      `https://apis.truewebpro.com/api/brand/${brandName}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch brand products:", error);
    return null;
  }
}
// FUNCTION TO FETCH FEATURED BRANDS

const SingleBrandPage = async ({ params }) => {
  const { singleBrand } = params;
  const brandTitle = params.singleBrand.replaceAll("-", " ");

  // FETCH FEATURED BRANDS
  const brands = await fetchFeaturedBrands(singleBrand);
  // FETCH FEATURED BRANDS

  // REDIRECT TO THE BRANDS PAGE IF API FAILS
  if (!brands?.brand_products) {
    redirect("/brands");
  }
  // REDIRECT TO THE BRANDS PAGE IF API FAILS

  const jsonLdCollectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${brandTitle} | Vape to Cart`,
    url: `https://www.vapetocart.co.uk/brand/${params.singleBrand}`,
    publisher: {
      "@type": "Organization",
      name: "Vape to Cart",
      logo: {
        "@type": "ImageObject",
        url: "https://www.vapetocart.co.uk/assets/images/logoa200x37.png",
      },
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.vapetocart.co.uk/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Brand",
        item: "https://www.vapetocart.co.uk/brands",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: brandTitle,
        item: `https://www.vapetocart.co.uk/brand/${params.singleBrand}`,
      },
    ],
  };

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdCollectionPage),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <Breadcrumbs path="Home/brand" />
      <div className="s-brand sec-padding-small">
        {/* <HeadingWithImage
            logo={`https://truewebcart.s3-accelerate.amazonaws.com/${brand.image_url}`}
            heading={brand.brand_name}
          /> */}
        {brands?.brand_products?.length > 0 && (
          <ProductGrid
            title={
              singleBrand ? singleBrand?.split("-")?.join(" ") : "Products"
            }
            products={brands?.brand_products}
            sectionClass="sec-light"
          />
        )}
      </div>
    </>
  );
};

export default SingleBrandPage;
