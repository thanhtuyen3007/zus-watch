import React from "react";
import clsx from "clsx";
import styles from "./CollectionSection.module.scss";
import TitleSection from "../TitleSection/TitleSection";
import { Container, Row, Col } from "react-bootstrap";
import images from "../../assets";
import { CollectionItem } from "../CollectionItem/CollectionItem";

const CollectionSection: React.FC = () => {
  const collections = [
    {
      id: 1,
      name: "classics",
      url: images.classic,
      link: "/",
    },
    {
      id: 2,
      name: "profecionals",
      url: images.profectinal,
      link: "/",
    },
    {
      id: 3,
      name: "watch by theme",
      url: images.theme,
      link: "/",
    },
  ];

  return (
    <Container fluid className={clsx(styles.warrper)}>
      <TitleSection
        title="Collections"
        desc="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
      />
      <Row>
        {collections.map((collection) => (
          <Col md={4} key={collection.id}>
            <CollectionItem data={collection} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CollectionSection;
