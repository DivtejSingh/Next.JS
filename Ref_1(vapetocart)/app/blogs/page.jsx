import React from "react";
import Link from "next/link";
import { CardBody, Col, Container, Row } from "react-bootstrap";
import Breadcrumbs from "@/app/components/breadcrumbs/Breadcrumbs";
import SectionHeadingCenter from "@/app/components/sec-heading-center/SectionHeadingCenter";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "All Blogs | Vape to Cart",
  description: "All Blogs | Vape to Cart",
  alternates: {
    canonical: "https://www.vapetocart.co.uk/blogs",
  },
  robots: "index, follow",
  openGraph: {
    title: "All Blogs | Vape to Cart",
    description: "All Blogs | Vape to Cart",
    url: "https://www.vapetocart.co.uk/blogs",
    type: "article",
    siteName: "Vape to Cart",
    images: [
      {
        url: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
        secureUrl: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "All Blogs | Vape to Cart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Blogs | Vape to Cart",
    description: "All Blogs | Vape to Cart",
    images: ["https://www.vapetocart.co.uk/assets/images/og-image.jpg"],
  },
};

const BlogsPage = () => {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: "All Blogs | Vape to Cart",
    url: "https://www.vapetocart.co.uk/blogs",
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
        name: "Blogs",
        item: "https://www.vapetocart.co.uk/blogs",
      },
    ],
  };

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <Breadcrumbs path={"Home"} />
      <section className={"blogs py-4"}>
        <SectionHeadingCenter text="All Blogs" />
        <Container>
          <Row className={"row-cols-1 row-cols-sm-1 row-cols-lg-2 gy-4"}>
            <Col>
              <Link
                className={"card"}
                href={"/blog/the-ultimate-guide-to-vape-kits-in-2025"}
              >
                <Image
                  className={"card-img-top"}
                  src="/The-Ultimate-Guide-to-Vape-Kits-in-2025-Features-Prices-More.webp"
                  alt="The Ultimate Guide to Vape Kits in 2025"
                  title={"The Ultimate Guide to Vape Kits in 2025"}
                  width={"600"}
                  height={"300"}
                />
                <CardBody>
                  <h2 className={"h4"}>
                    The Ultimate Guide to Vape Kits in 2025
                  </h2>
                </CardBody>
              </Link>
            </Col>
            <Col>
              <Link
                className={"card"}
                href={"/blog/why-disposable-vapes-are-a-game-changer-in-2025"}
              >
                <Image
                  className={"card-img-top"}
                  src="/Why-Disposable-Vapes-Are-a-Game-Changer-in-2025-A-Complete-Guide.webp"
                  alt="Why Disposable Vapes Are a Game-Changer in 2025"
                  title={"Why Disposable Vapes Are a Game-Changer in 2025"}
                  width={"600"}
                  height={"300"}
                />
                <CardBody>
                  <h2 className={"h4"}>
                    Why Disposable Vapes Are a Game-Changer in 2025
                  </h2>
                </CardBody>
              </Link>
            </Col>
            <Col>
              <Link
                className={"card"}
                href={
                  "/blog/hayati-shisha-15000-lady-killer-the-best-disposable-vape-of-2025"
                }
              >
                <Image
                  className={"card-img-top"}
                  src="/assets/images/Hayati-Shisha-15000-Lady-Killer-The-Best-Disposable-Vape-of-2025.webp"
                  alt="Hayati Shisha 15000 Lady Killer"
                  title="Hayati Shisha 15000 Lady Killer"
                  width={"600"}
                  height={"300"}
                />
                <CardBody>
                  <h2 className={"h4"}>
                    Hayati Shisha 15000 Lady Killer - The Best Disposable Vape
                    of 2025!
                  </h2>
                </CardBody>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogsPage;
