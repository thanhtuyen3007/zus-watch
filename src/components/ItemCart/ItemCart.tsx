import React from "react";
import clsx from "clsx";
import styles from "./ItemCart.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { ImageProduct } from "../ImageProduct/ImageProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

interface ItemCartProps {
  id: number;
  name: string;
  srcImg: string;
  price: number;
  quantity: number;
  onRemove: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
}

const ItemCart: React.FC<ItemCartProps> = ({
  id,
  name,
  srcImg,
  price,
  quantity,
  onRemove,
  onIncrease,
  onDecrease,
}) => {
  return (
    <Container className={clsx(styles.itemCart)}>
      <Row className={clsx(styles.itemRow)}>
        <Col  xs={4} className={clsx(styles.itemImg)}>
          <ImageProduct src={srcImg} alt={name} />
        </Col>
        <Col  xs={8} className={clsx(styles.itemInfo)}>
          <span className={clsx(styles.itemName)}>{name}</span>
          <div className={clsx(styles.priceQuantity)}>
            <p className={clsx(styles.itemPrice)}>{price.toFixed(1)}$</p>
            <div className={clsx(styles.quantityBox)}>
              <button
                className={clsx(styles.quantityButton)}
                onClick={() => onDecrease(id)}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span className={clsx(styles.quantity)}>{quantity}</span>
              <button
                className={clsx(styles.quantityButton)}
                onClick={() => onIncrease(id)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </Col>
      </Row>
      <button
        className={clsx(styles.removeButton)}
        onClick={() => onRemove(id)}
      >
        {/* <FontAwesomeIcon icon={faX} /> */}
        Remove
      </button>
    </Container>
  );
};

export default ItemCart;
