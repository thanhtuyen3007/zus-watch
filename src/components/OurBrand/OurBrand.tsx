import React from "react";
import clsx from "clsx";
import styles from "./OurBrand.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { BrandItem } from "./BrandItem";
import images from "../../assets";

export const OurBrand = () => {
  return (
    <Container fluid className={clsx(styles.wrapper)}>
      <Row>
        <Col md={6}>
          <BrandItem
            src={images.ourStory}
            title="Our Story"
            link="/the-brand"
          />
        </Col>
        <Col md={6}>
          <BrandItem
            src={images.ourValues}
            title="Our Values"
            link="/the-brand"
          />
        </Col>
      </Row>
    </Container>
  );
};
