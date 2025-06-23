import { ReactElement, useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./ProductIntro.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { ImageProduct } from "../../components/ImageProduct/ImageProduct";
import { useParams } from "react-router-dom";
import { WatchType } from "../../types/types";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/cartSlice";

const ProductIntro = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<WatchType | null>(null);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      console.log("Product added to cart:", product);
    }
  };

  useEffect(() => {
    if (!id) return;

    axios
      .get("/data.json")
      .then((res) => {
        const foundProduct = res.data.products.find(
          (item: WatchType) => item.id === id
        );
        setProduct(foundProduct || null);
        console.log("Product loaded:", foundProduct);
      })
      .catch((err) => {
        console.error("Error loading product from data.json:", err);
      });
  }, [id]);

  if (!product) return <p>Loading product details...</p>;

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
          <p className={clsx(styles.productPrice)}>
            ${product.price.toFixed(2)}
          </p>
          <p className={clsx(styles.productDiscount)}>
            Discount: 10% off for a limited time!
          </p>
          <button
            className={clsx(styles.addToBagButton)}
            onClick={handleAddToCart}
          >
            Add to Bag
          </button>
        </Col>
      </Row>

      <div className={clsx(styles.productDetails)}>
        <h2 className={clsx(styles.detailsTitle)}>Product Details:</h2>
        <p className={clsx(styles.detailsText)}>{product.productDetails}</p>
      </div>

      <div className={clsx(styles.productSpecifications)}>
        <h2 className={clsx(styles.specificationsTitle)}>Specifications:</h2>
        <ul className={clsx(styles.specificationsList)}>
          <li>Warranty: {product.warranty} year(s)</li>
          <li>Stock: {product.stock} available</li>
          <li>Category: {product.category}</li>
        </ul>
      </div>
    </Container>
  );
};

export default ProductIntro;
