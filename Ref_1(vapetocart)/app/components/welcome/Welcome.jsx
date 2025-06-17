import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeadingCenter from "../sec-heading-center/SectionHeadingCenter";
import WelcomeCard from "../welcome-card/WelcomeCard";
import Link from "next/link";

const Welcome = () => {
  return (
    <div className="sec-welcome sec-padding-small sec-light">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col xs={11} md={10} lg={8}>
            <SectionHeadingCenter text="Welcome to Vape to Cart - Your Trusted Vape Store" />
            <p>
              At Vape to Cart, we offer quality vaping products that are
              relatively very affordable. Whether you are an experienced vaper
              or just starting, you will find whatever you require in order to
              make your vaping better. Be it the highly anticipated latest{" "}
              <strong>Elf Bar flavours,</strong> or the finely tuned performance
              of{" "}
              <Link href="/pages/contact" className="text-link">
                Crystal Vape
              </Link>{" "}
              devices, this collection is assembled to attain the highest level
              of convenience, style, and satisfaction.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center g-3 row-cols-1">
          <Col>
            <WelcomeCard
              title="Wholesale Vapes & Vape Supplies - Buy in Bulk & Save"
              text={
                <>
                  <p>
                    Looking for <strong>vape shops near me</strong> that offer
                    great wholesale prices? Vape to Cart is the place to buy in
                    bulk vapes, e-liquids, vape kits, and accessories. We serve
                    small retailers as well as larger-scale businesses,
                    guaranteeing that no matter what, you get the most value for
                    your buck on the highest quality products.
                  </p>
                  <p className="fw-bold fs-6 color-dark">
                    Our wholesale selection includes:
                  </p>
                  <ul className="my-2">
                    <li>
                      <strong>Elf Bar Flavours -</strong> A selection of smooth
                      and rich flavours for disposable vapes.
                    </li>
                    <li>
                      <strong>Crystal Vape -</strong> A line of disposables with
                      sleek designs and excellent performance for a satisfying
                      vaping experience.
                    </li>
                    <li>
                      <strong>Hayati Twist 5000 -</strong> Long-lasting puffs
                      with daring and unique flavours.
                    </li>
                    <li>
                      <strong>Lost Mary & Elux Disposables -</strong> Quite
                      popular for trouble-free vaping.
                    </li>
                    <li>
                      <strong>IVG2400 & Big Bar 6000 -</strong> Need a lot of
                      puffs before recharging.
                    </li>
                  </ul>
                  <p>
                    We also assure you of a{" "}
                    <strong>fast delivery across the UK</strong>, an invaluable
                    bulk purchase discount scheme, and even very commendable
                    customer service to help you stock up on top-selling
                    products from your store.
                  </p>
                </>
              }
            />
          </Col>
          <Col>
            <WelcomeCard
              title="Your Reliable UK Vape Wholesale Supplier"
              text={
                <>
                  <p>
                    We at <strong>Vape to Cart</strong> work with the largest
                    brands in the industry offering the latest{" "}
                    <strong>vaping products</strong> to you. Our wholesale range
                    includes:
                  </p>
                  <ul className="my-2">
                    <li>
                      <strong>Single-Use Vapes - </strong>Elf Bar, Lost Mary,
                      Ske Crystal, IVG 2400, Elux, Hayati, Crystal Prime, Big
                      Bar 6000, and more.
                    </li>
                    <li>
                      <strong>E-Liquids - </strong>The complete range from
                      fruity to menthol and tobacco flavourings.
                    </li>
                    <li>
                      <strong>Nicotine Pouches UK - </strong>Non-tobacco
                      nicotine alternatives for a much cleaner experience.
                    </li>
                    <li>
                      <strong>Vapes and Mods - </strong>Starter kits and
                      advanced mods for all types of vapers.
                    </li>
                    <li>
                      <strong>Coils, Pods & Accessories - </strong>Excellent
                      quality replacement parts for quality vaping experience.
                    </li>
                  </ul>
                  <p>
                    If you're looking for a trusted{" "}
                    <strong>wholesale vape supplier in the UK</strong>, sign up
                    today and enjoy exclusive discounts and free UK shipping on
                    orders over £200.
                  </p>
                </>
              }
            />
          </Col>
          <Col>
            <WelcomeCard
              title="Top-Quality Disposable Vapes & Nicotine Pouches UK"
              text={
                <>
                  <p>
                    We maintain a variety of{" "}
                    <Link
                      href="/disposable-vape"
                      className="fw-bold text-link"
                    >
                      disposable vapes
                    </Link>{" "}
                    and nicotine replacements, thus you can find something that
                    can fit into your pockets. The categories are namely:
                  </p>
                  <ul className="my-2">
                    <li>
                      <strong>Elf Bar Flavours - </strong>A fan favorite with a
                      variety of tasty options.
                    </li>
                    <li>
                      <strong>Crystal Vape - </strong>High-performance and
                      stylish disposables.
                    </li>
                    <li>
                      <strong>Nicotine Pouches UK - </strong>A convenient and
                      smoke-free way to enjoy nicotine.
                    </li>
                    <li>
                      <strong>Elux & Lost Mary Disposables - </strong>Perfect
                      for hassle-free vaping.
                    </li>
                  </ul>
                  <p>
                    We arrange fast delivery of products and set up a bulk buy
                    with extensive varieties of stock to ensure you are always
                    able to keep at least your favorites with you.
                  </p>
                </>
              }
            />
          </Col>
          <Col>
            <WelcomeCard
              title="Premium E-Liquids & Vape Tanks at Competitive Prices"
              text={
                <>
                  <p>
                    Boost your vaping experience through our premium range of
                    e-liquids and tanks. We have:
                  </p>
                  <ul className="my-2">
                    <li>
                      <strong>E-Liquid - </strong> High VG mixture for sub-ohm
                      vaping and high PG concentration for starter kits.
                    </li>
                    <li>
                      <strong>Shortfill Bottles & Nic Nic Shots - </strong>{" "}
                      Custom mixing for flavour and nicotine preferences.
                    </li>
                    <li>
                      <strong>Tanks - </strong> Aspire, Innokin, Smok, and other
                      trusted brands.
                    </li>
                  </ul>
                  <p>
                    While ensuring a money-back guarantee on vape products, we
                    supply only authentic top quality and the most competitive
                    priced vape shop.
                  </p>
                </>
              }
            />
          </Col>
          <Col>
            <WelcomeCard
              title="A Vape Store Built for Every Vaper"
              text={
                <>
                  <p>
                    Vape to Cart knows every vaper is unique. Whether you are
                    looking for the latest <strong>Elf Bar flavours,</strong>
                    smooth <strong>Crystal Vape</strong> experience, or stock up
                    on{" "}
                    <Link
                      href="/nic-salts"
                      className="text-link fw-bold"
                    >
                      nicotine pouches UK
                    </Link>
                    , there is something for you.
                  </p>
                  <ul className="my-2">
                    <li>Easy online ordering.</li>
                    <li>Competitive prices & bulk discounts.</li>
                    <li>Next-day UK delivery available.</li>
                    <li>Dedicated customer support.</li>
                  </ul>
                  <p>
                    Start shopping today and experience the best in vaping with
                    Vape to Cart!
                  </p>
                </>
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
