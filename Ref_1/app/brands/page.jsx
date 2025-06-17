import "./brands.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import BrandCard from "../components/brand-card/BrandCard";
import SectionHeadingCenter from "../components/sec-heading-center/SectionHeadingCenter";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import Script from "next/script";

export const metadata = {
  title: "All Brands | Vape to Cart",
  description: "All Brands | Vape to Cart",
  alternates: {
    canonical: "https://www.vapetocart.co.uk/brands",
  },
  robots: "index, follow",
  openGraph: {
    title: "All Brands | Vape to Cart",
    description: "All Brands | Vape to Cart",
    url: "https://www.vapetocart.co.uk/brands",
    type: "website",
    siteName: "Vape to Cart",
    images: [
      {
        url: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
        secureUrl: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "All Brands | Vape to Cart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Brands | Vape to Cart",
    description: "All Brands | Vape to Cart",
    images: ["https://www.vapetocart.co.uk/assets/images/og-image.jpg"],
  },
};

// FUNCTION TO FETCH FEATURED BRANDS
async function fetchFeaturedBrands() {
  try {
    const response = await axios.get(
      "https://apis.truewebpro.com/api/featuredbrands"
    );
    return response.data.featuredbrands;
  } catch (error) {
    console.error("Failed to fetch featured brands:", error);
    return [];
  }
}
// FUNCTION TO FETCH FEATURED BRANDS

const BrandsPage = async () => {

  // FETCH FEATURED BRANDS
  const brands = await fetchFeaturedBrands();
  // FETCH FEATURED BRANDS
  
  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "website",
    name: "All Brands | Vape to Cart",
    url: "https://www.vapetocart.co.uk/brands",
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
        name: "Brands",
        item: "https://www.vapetocart.co.uk/brands",
      },
    ],
  };
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <Breadcrumbs path="Home" />
      <section className="sec-brands sec-padding-small">
        <Container>
          <SectionHeadingCenter text="All Brands" />
          <div className="brands-wrap d-flex flex-wrap justify-content-center gap-3">
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default BrandsPage;
