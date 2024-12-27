import React, { ReactElement } from "react";
import clsx from "clsx";
import { Col, Container, Row } from "react-bootstrap";
import TitleSection from "../../TitleSection/TitleSection";
import SideBar from "../../SideBar/SideBar";
import { Slider } from "../../Slider/Slider";
import { ListCollections } from "../../ListCollections/ListCollections";
import styles from "./Collections.module.scss";
import { collectionsList } from "../../../CollectionsList";



const Collections = (): ReactElement => {
  return (
    <section className={clsx(styles.wrapper)}>
      <Slider url="https://images.unsplash.com/photo-1566851905724-640dff871c0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Container fluid className={clsx(styles.content)}>
        <TitleSection
          title="Collections"
          desc="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
        />
        <Row>
          <Col md={4}>
            <SideBar />
          </Col>
          <Col md={8}>
            <ListCollections data={collectionsList()} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Collections;
