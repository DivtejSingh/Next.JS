import "./contact.css";
import { Container, Row, Col } from "react-bootstrap";
import FormContact from "@/app/components/form-contact/FormContact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | Vape to Cart",
  description:
    "From the North East of England, we aim to give you the ultimate choice, by stocking the most diverse range of e-liquids, at the best prices you'll find. Liquids to suit every budget and a huge range of hardware and accessories",
  alternates: {
    canonical: "https://www.vapetocart.co.uk/pages/contact",
  },
  robots: "index, follow",
  openGraph: {
    title: "Contact Us | Vape to Cart",
    description:
      "From the North East of England, we aim to give you the ultimate choice, by stocking the most diverse range of e-liquids, at the best prices you'll find. Liquids to suit every budget and a huge range of hardware and accessories",
    url: "https://www.vapetocart.co.uk/pages/contact",
    type: "website",
    siteName: "Vape to Cart",
    images: [
      {
        url: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
        secureUrl: "https://www.vapetocart.co.uk/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Us | Vape to Cart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Vape to Cart",
    description:
      "From the North East of England, we aim to give you the ultimate choice, by stocking the most diverse range of e-liquids, at the best prices you'll find. Liquids to suit every budget and a huge range of hardware and accessories",
    images: ["https://www.vapetocart.co.uk/assets/images/og-image.jpg"],
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "website",
    name: "Contact Us | Vape to Cart",
    url: "https://www.vapetocart.co.uk/pages/contact",
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
      <section className="sec-contact-us sec-padding-small bgColor-tertiary">
        <h1 className="color-dark text-center fw-bold fs-1 mb-5">Contact Us</h1>
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <h3 className="color-dark mb-2 fs-4 fw-bold">
                Contact Us | Vape to Cart
              </h3>
              <p>
                Got questions about our vape products? Need help with your
                order? We're here to help!
              </p>
              <h3 className="color-dark mt-4 mb-2 fs-4 fw-bold">
                Get in Touch
              </h3>
              <p className="mb-3">
                Have any questions? We are here to assist you whether you need
                help placing an order, want more information on our{" "}
                <strong>disposable vapes,</strong>{" "}
                <Link href="/vape-kits" className="fw-bold text-link">
                  vape kits
                </Link>{" "}
                or e-liquids, or looking for recommendations for the best{" "}
                <strong>Crystal Prime 7000, Crystal Pro Max,</strong> or Hayati
                Twist 5000 Puffs. Contact us for quick and friendly support!
              </p>
              <p className="mt-1">
                <FontAwesomeIcon icon={faMapPin} className="me-2" />
                <strong>Address:</strong> Bury New Road, Manchester, M8 8EL
              </p>
              <p className="mt-1">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <strong>Email:</strong> sales@vapetocart.co.uk
              </p>
              <h3 className="color-dark mt-4 mb-2 fs-4 fw-bold">
                Why Contact Us?
              </h3>
              <p className="mt-1">
                Need help choosing the right vape kit or disposable vape?
              </p>
              <p className="mt-1">
                Have questions about our <strong>Crystal Vape</strong> or{" "}
                <strong>Crystal Bar Flavours?</strong>
              </p>
              <p className="mt-1">
                Looking for the latest Hayati Pro Max deals?
              </p>
              <p className="mt-3">
                Our friendly team will assist you with all your vape-related
                needs!
              </p>
              <h3 className="color-dark mt-4 mb-2 fs-4 fw-bold">
                Customer Support Hours
              </h3>
              <p className="mt-1">
                <strong>Monday - Friday:</strong> 9 AM - 6 PM
              </p>
              <p className="mt-1">
                <strong>Saturday - Sunday:</strong> 10 AM - 4 PM
              </p>
            </Col>
            <Col lg={5} className="offset-lg-1">
              <FormContact />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
