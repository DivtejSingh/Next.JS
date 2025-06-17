import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StandoutCard from "../standout-card/StandoutCard";

const Standout = ({ className }) => {
  return (
    <div className={`standout sec-padding-small ${className || ""}`}>
      <Container>
        <Row className="g-2 g-md-3">
          <Col lg={4}>
            <StandoutCard />
          </Col>
          <Col lg={4}>
            <StandoutCard />
          </Col>
          <Col lg={4}>
            <StandoutCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Standout;
