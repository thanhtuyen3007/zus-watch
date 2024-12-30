import React, { ReactElement } from "react";
import styles from "./TheBrand.module.scss";
import clsx from "clsx";
import { Slider } from "../../Slider/Slider";
import { Col, Container, Row } from "react-bootstrap";
import TitleSection from "../../TitleSection/TitleSection";
import { ImageProduct } from "../../ImageProduct/ImageProduct";

const TheBrand = (): ReactElement => {
  return (
    <Container fluid className={clsx(styles.brandSection)}>
      {/* Render the slider */}
      <Slider url="https://images.unsplash.com/photo-1731446451263-fc3881d4973d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      {/* Render the title section */}
      <TitleSection
        title="the brand"
        desc="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
      />
      {/* Render the brand story */}
      <section className={clsx(styles.brandSubsection)}>
        <h2 className={clsx(styles.brandSubtitle)}>Our Story</h2>
        <p className={clsx(styles.brandParagraph)}>
          Our story began with a simple idea: to create timeless, high-quality
          products that bring joy and value to our customers' lives. We believe
          in the power of craftsmanship and the importance of attention to
          detail.
        </p>
        <p className={clsx(styles.brandParagraph)}>
          Since our founding, we have been dedicated to creating products that
          are not only beautiful but also sustainable. We are committed to
          making a positive impact on the world by using ethically sourced
          materials and working with local artisans.
        </p>
        <Row>
          <Col md={6}>
            <ImageProduct
              src="https://images.unsplash.com/photo-1582043568452-86590c15107d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1582043568452-86590c15107d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={"our-story"}
            />
          </Col>
          <Col md={6}>
            <ImageProduct
              src="https://images.unsplash.com/photo-1582043568776-7cc499677ab1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={"our-story"}
            />
          </Col>
        </Row>
        <p className={clsx(styles.brandParagraph)}>
          Each of our products is designed with care and precision, ensuring
          that they not only look beautiful but also stand the test of time. We
          are committed to using the finest materials and working with skilled
          artisans to bring our vision to life.
        </p>
      </section>
      {/* render the brand values */}
      <section className={clsx(styles.brandSubsection)}>
        <h2 className={clsx(styles.brandSubtitle)}>Our Values</h2>
        <p className={clsx(styles.brandParagraph)}>
          Our values are rooted in sustainability, innovation, and a passion for
          excellence. We strive to make a positive impact on the world by
          creating products that are not only beautiful but also responsibly
          made.
        </p>
        <p className={clsx(styles.brandParagraph)}>
          Join us on our journey as we continue to push the boundaries of design
          and craftsmanship, creating products that inspire and delight.
        </p>
      </section>
    </Container>
  );
};

export default TheBrand;
