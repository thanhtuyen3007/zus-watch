import { ReactElement } from "react";
import { Container } from "react-bootstrap";
import CollectionSection from "../../components/CollectionSection/CollectionSection";

const Collections = (): ReactElement => {
  return (
    <Container fluid>
      <CollectionSection />
    </Container>
  );
};

export default Collections;
