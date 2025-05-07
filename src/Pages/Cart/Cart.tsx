import { ReactElement } from "react";
import clsx from "clsx";
import styles from "./Cart.module.scss";
import ItemCart from "../../components/ItemCart/ItemCart";
import { Col, Container, Row } from "react-bootstrap";
import { FormOder } from "../../components/FormOder/FormOder";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
const Cart = (): ReactElement => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  // const totalPrice = useSelector((state: any) => state.cart.totalPrice);
  return (
    <Container className={clsx(styles.cartSection)}>
      <h1 className={clsx(styles.cartTitle)}>shopping bag</h1>
      <div className={clsx(styles.cartContent)}>
        <Row className={clsx(styles.cartRow)}>
          <Col md={6}>
            <FormOder />
          </Col>
          <Col md={6}>
            {cartItems.length > 0 ? (
              cartItems.map((cartItem) => (
                <ItemCart key={cartItem.id} productItem={cartItem} />
              ))
            ) : (
              <h2 className={clsx(styles.cartEmpty)}>Your cart is empty!</h2>
            )}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Cart;
