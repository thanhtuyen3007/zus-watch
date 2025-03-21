import React from "react";
import clsx from "clsx";
import styles from "./CollectionSection.module.scss";
import TitleSection from "../TitleSection/TitleSection";
import { Container, Row, Col } from "react-bootstrap";

import { CollectionItem } from "../CollectionItem/CollectionItem";
import { collectionsListData } from "../../CollectionsList";

const CollectionSection: React.FC = () => {
 
  return (
    <Container fluid className={clsx(styles.warrper)}>
      <TitleSection
        title="Collections"
        desc="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
      />
      <Row>
        {collectionsListData().map((collectionItem) => (
          <Col md={4} key={collectionItem.id}>
            <CollectionItem data={collectionItem} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CollectionSection;
