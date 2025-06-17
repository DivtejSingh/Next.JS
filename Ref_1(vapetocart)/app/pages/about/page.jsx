import { Container, Row, Col } from "react-bootstrap";
import imageVapes from "@/public/assets/images/vapes.jpg";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "About Us | Vape to Cart",
  description:
    "From the North East of England, we aim to give you the ultimate choice, by stocking the most diverse range of e-liquids, at the best prices you'll find. Liquids to suit every budget and a huge range of hardware and accessories",
  alternates: {
    canonical: "https://www.vapetocart.co.uk/pages/about",
  },
  robots: "index, follow",
  openGraph: {
    title: "About Us | Vape to Cart",
    description:
      "From the North East of England, we aim to give you the ultimate choice, by stocking the most diverse range of e-liquids, at the best prices you'll find. Liquids to suit every budget and a huge range of hardware and accessories",
    url: "https://www.vapetocart.co.uk/pages/about",
    type: "website",
    siteName: "Vape to Cart",
    images: [
      {
        url: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
        secureUrl: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Us | Vape to Cart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Vape to Cart",
    description:
      "From the North East of England, we aim to give you the ultimate choice, by stocking the most diverse range of e-liquids, at the best prices you'll find. Liquids to suit every budget and a huge range of hardware and accessories",
    images: ["https://www.vapetocart.co.uk/assets/images/og-image.jpg"],
  },
};

const AboutPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "website",
    name: "About Us | Vape to Cart",
    url: "https://www.vapetocart.co.uk/pages/about",
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
      <section className="sec-about-us sec-padding-small bgColor-tertiary">
        <h1 className="color-dark text-center fw-bold fs-1 mb-5">About Us</h1>
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <h3 className="color-dark mb-2 fs-4 fw-bold">
                About VapeToCart - Your Trusted Online Vape Store
              </h3>
              <p>
                VapeToCart- the one-stop shop for{" "}
                <strong>
                  <Link href="/pages/contact" className="text-link">
                    vaping products in the UK
                  </Link>
                  .
                </strong>{" "}
                We offer a wide range of disposable vapes, vape kits, e-liquids,
                and nicotine cartridges that are suitable for every vaper,
                whether they are beginners or experts.
              </p>
              <h3 className="color-dark mt-4 mb-2 fs-4 fw-bold">
                Why Choose VapeToCart?
              </h3>
              <ul className="d-flex flex-column gap-2">
                <li>
                  <strong>Top-Quality Vapes -</strong> On the other hand, for
                  stunning vapes, we stock brands like{" "}
                  <strong>Crystal Prime 7000, Crystal Pro Max,</strong> and{" "}
                  <strong>Hayati Pro Max.</strong>
                </li>
                <li>
                  <strong>Wide Flavour Selection -</strong>With every puff, you
                  can enjoy <strong>different flavours of vapor,</strong> from
                  fruity blends to refreshing menthol and classic tobacco.
                </li>
                <li>
                  <strong>Affordable Prices -</strong>Find the best deals on
                  vape kits, disposable vapes, and e-liquids without breaking
                  the bank.
                </li>
                <li>
                  <strong>Fast & Reliable Delivery - </strong>We deliver across
                  the <strong>UK,</strong> so you can get your favourite vape
                  products quickly.
                </li>
              </ul>
              <h3 className="color-dark mt-4 mb-2 fs-4 fw-bold">Our Mission</h3>
              <p>
                At VapeToCart, our mission is to provide superior customer
                service, high-quality vapes, and affordable prices. Whether
                you're looking for the latest{" "}
                <strong>
                  <Link href="/" className="text-link">
                    Crystal Vape
                  </Link>
                  , Hayati Pro Max, or disposable vapes,
                </strong>{" "}
                we've got you covered.
              </p>
              <h3 className="color-dark mt-4 mb-2 fs-4 fw-bold">
                Shop With Confidence
              </h3>
              <p>
                We guarantee authentic vape products at the best price. Shop
                with us without undergoing challenges. Please view our
                collection and grab that perfect vape device.
              </p>
              <h3 className="color-dark mt-4 mb-2 fs-4 fw-bold">
                Stay Connected
              </h3>
              <p>
                Follow us for the latest updates on new products, exclusive
                offers, and the <strong>best vape shops in the UK.</strong>
              </p>
            </Col>
            <Col lg={5} className="offset-lg-1">
              <Image
                src={imageVapes}
                alt="Vapes"
                priority={true}
                quality="80"
                width={478}
                height={400}
                sizes="40vw"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
