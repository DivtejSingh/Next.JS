import React from "react";
import PageCart from "../pages/page-cart/PageCart";
import Script from "next/script";

export const metadata = {
  title: "Your Shopping Cart | Vape to Cart",
  description: "Your Shopping Cart | Vape to Cart",
  alternates: {
    canonical: `https://www.vapetocart.co.uk/cart`,
  },
  robots: "noindex, nofollow",
  openGraph: {
    title: "Your Shopping Cart | Vape to Cart",
    description: "Your Shopping Cart | Vape to Cart",
    url: "https://www.vapetocart.co.uk/cart",
    type: "website",
    siteName: "Vape to Cart",
    images: [
      {
        url: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
        secureUrl: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Shopping Cart | Vape to Cart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Shopping Cart | Vape to Cart",
    description: "Your Shopping Cart | Vape to Cart",
    images: ["https://www.vapetocart.co.uk/assets/images/og-image.jpg"],
  },
};

const CartPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "website",
    name: "Your Shopping Cart | Vape to Cart",
      url: "https://www.vapetocart.co.uk/cart",
    publisher: {
      "@type": "Organization",
      name: "Vape to Cart",
      logo: {
        "@type": "ImageObject",
        url: "https://www.vapetocart.co.uk/assets/images/logoa200x37.png",
      },
    },
  };
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageCart />
    </>
  );
};

export default CartPage;
