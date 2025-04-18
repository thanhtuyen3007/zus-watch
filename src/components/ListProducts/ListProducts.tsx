import { Row, Col, Container } from "react-bootstrap"; // Bootstrap components for layout
import { ReactElement } from "react";
import { ProductItem } from "../ProductItem/ProductItem"; // Component for rendering individual product items

const ListProducts = ({ data }): ReactElement => {
  return (
    <Container>
      <Row>
        {data.map((item, index) => (
          <Col key={index} xs={6} md={4}>
            <ProductItem data={item} /> {/* Render each product item */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default ListProducts;
