import clsx from "clsx";
import styles from "./AdminProduct.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

import { ImageProduct } from "../ImageProduct/ImageProduct";
import { WatchType } from "../../types/types";
import { API_URL } from "../../config/api";

const AdminProduct = () => {
  const [products, setProducts] = useState<WatchType[]>([]);
  useEffect(() => {
    axios.get(`${API_URL}/products`).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <h2 className={clsx(styles.title)}>All Watch Product</h2>
      <Container>
        <Row>
          {products.map((product, index) => (
            <Col key={index} xs={6} md={4}>
              <div className={clsx(styles.container)}>
                <ImageProduct
                  classname={clsx(styles.img)} // Apply styles to the image
                  src={product.imageUrl} // Image source URL
                  alt={product.description} // Alternative text for the image
                />
                <h3 className={clsx(styles.name)}>{product.name}</h3>
                <p className={clsx(styles.desc)}>{product.description}</p>
                <p className={clsx(styles.price)}>
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default AdminProduct;
