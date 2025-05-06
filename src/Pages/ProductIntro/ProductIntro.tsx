import React, { ReactElement, useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./ProductIntro.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { ImageProduct } from "../../components/ImageProduct/ImageProduct";
import { useParams } from "react-router-dom";
import { WatchType } from "../../types/types";
import axios from "axios";

const ProductIntro = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<WatchType | null>(null);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`http://localhost:3001/products?id=${id}`)
      .then((res) => {
        const productItem = res.data.find((item: WatchType) => item.id === id);
        setProduct(productItem || null);
        console.log("Product data:", productItem);
        
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <Container className={clsx(styles.productIntro)}>
      <Row>
        <Col md={6}>
          <ImageProduct
            src={product.imageUrl}
            alt={product.name}
            classname={clsx(styles.productImage)}
          />
        </Col>
        <Col md={6} className={clsx(styles.productInfo)}>
          <h1 className={clsx(styles.productName)}>{product.name}</h1>
          <p className={clsx(styles.productDescription)}>{product.description}</p>
          <p className={clsx(styles.productPrice)}>${product.price.toFixed(2)}</p>
          <p className={clsx(styles.productDiscount)}>
            Discount: 10% off for a limited time!
          </p>
          <button className={clsx(styles.addToBagButton)}>Add to Bag</button>
        </Col>
      </Row>
      <div className={clsx(styles.productDetails)}>
        <h2 className={clsx(styles.detailsTitle)}>Product Details:</h2>
        <p className={clsx(styles.detailsText)}>
          This watch features a high-quality stainless steel case, a scratch-resistant
          sapphire crystal, and a water resistance of up to 50 meters. The elegant design
          is complemented by a comfortable leather strap, making it perfect for both
          casual and formal occasions.
        </p>
      </div>
      <div className={clsx(styles.productSpecifications)}>
        <h2 className={clsx(styles.specificationsTitle)}>Specifications:</h2>
        <ul className={clsx(styles.specificationsList)}>
          <li>Case Material: Stainless Steel</li>
          <li>Crystal: Sapphire</li>
          <li>Water Resistance: 50 meters</li>
          <li>Strap: Leather</li>
          <li>Movement: Automatic</li>
          <li>Dial Color: Black</li>
        </ul>
      </div>
    </Container>
  );
};

export default ProductIntro;
