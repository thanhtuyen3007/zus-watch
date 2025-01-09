import React from "react";
import { Row, Col } from "react-bootstrap";
import { CollectionItemType } from "../../data";
import TitleSection from "../TitleSection/TitleSection";
import { ProductItem } from "../ProductItem/ProductItem";

interface ListProductsProps {
  data: CollectionItemType;
}

export const ListCollections = ({ data }: ListProductsProps) => {
  console.log(data);
  return (
    <div>
      <TitleSection title={data.title} desc="Lorem ipsum dolor sit amet" />
      <Row>
        {data.products.map((productItem) => (
          <Col md={6} key={productItem.id}>
            <ProductItem data={productItem} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
