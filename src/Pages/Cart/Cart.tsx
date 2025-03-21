import { ReactElement } from "react";
import clsx from "clsx";
import styles from "./Cart.module.scss";
import ItemCart from "../../components/ItemCart/ItemCart";
import { Col, Container, Row } from "react-bootstrap";
import { FormOder } from "../../components/FormOder/FormOder";
const Cart = (): ReactElement => {
  return (
    <Container className={clsx(styles.cartSection)}>
      <h1 className={clsx(styles.cartTitle)}>shopping bag</h1>
      <div className={clsx(styles.cartContent)}>
        <Row className={clsx(styles.cartRow)}>
          <Col md={6}>
            <FormOder />
          </Col>
          <Col md={6}>
            <ItemCart
              id={1}
              name=" Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression.1"
              price={400}
              quantity={1}
              onRemove={(id) => console.log(`Remove item with id: ${id}`)}
              srcImg={""}
              onIncrease={function (id: number): void {
                throw new Error("Function not implemented.");
              }}
              onDecrease={function (id: number): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Cart;
