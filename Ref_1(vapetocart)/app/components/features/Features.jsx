import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import FeatureCard from "../feature-card/FeatureCard";
import { faCalendarCheck, faTruckFast, faTruck } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Features = ({icon, title, className}) => {
  return (
    <section className={`features py-3 ${className || ""}`}>
      <Container>
        <Row className="row-gap-2 flex-nowrap align-items-center justify-content-between">
          <div className="w-auto mx-auto mx-sm-0">
            <FeatureCard icon={faTruckFast} title="Fast Delivery* Orders over £25" />
          </div>
          <div className="d-none d-sm-block w-auto">
            <FeatureCard icon={faTruck} title="Same Day Dispatch* Order before 3pm" />
          </div>
          <div className="d-none d-lg-block w-auto">
            <FeatureCard icon={faCalendarCheck} title="Order by 1pm Fri, for Sat delivery" />
          </div>
          <div className="d-none d-xxl-block w-auto">
            <FeatureCard icon={faWhatsapp} title="Contact via whatsApp" />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
