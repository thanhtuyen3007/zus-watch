import React from "react";
import clsx from "clsx"; // Utility for conditional class names
import styles from "./ItemCart.module.scss"; // Module-specific styles
import { Col, Container, Row } from "react-bootstrap"; // Bootstrap components for layout
import { ImageProduct } from "../ImageProduct/ImageProduct"; // Component for rendering product images
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome icons
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"; // Icons for quantity adjustment
import { WatchType } from "../../types/types"; // Type definition for a watch product
import { useDispatch } from "react-redux"; // Redux hook for dispatching actions
import { removeFromCart } from "../../Pages/Cart/cartSlice"; // Action to remove an item from the cart

// Props interface for the ItemCart component
interface ItemCartProps {
  productItem: WatchType; // The product item to display in the cart
}

// Functional component for rendering a cart item
const ItemCart: React.FC<ItemCartProps> = ({ productItem }: ItemCartProps) => {
  const dispatch = useDispatch(); // Initialize the Redux dispatch function

  // Function to handle removing a product from the cart
  const handleRemoveProduct = () => {
    dispatch(removeFromCart(productItem.id)); // Dispatch the action to remove the product by its ID
  };

  return (
    <Container className={clsx(styles.itemCart)}>
      <Row className={clsx(styles.itemRow)}>
        {/* Product Image */}
        <Col xs={4} className={clsx(styles.itemImg)}>
          <ImageProduct
            src={productItem.imageUrl} // Product image URL
            alt={productItem.description} // Product description for accessibility
          />
        </Col>

        {/* Product Information */}
        <Col xs={8} className={clsx(styles.itemInfo)}>
          <span className={clsx(styles.itemName)}>{productItem.name}</span>
          <div className={clsx(styles.priceQuantity)}>
            {/* Product Price */}
            <p className={clsx(styles.itemPrice)}>
              {productItem.price.toLocaleString()}{" "}
              {/* Format price with commas */}
            </p>

            {/* Quantity Adjustment */}
            <div className={clsx(styles.quantityBox)}>
              <button className={clsx(styles.quantityButton)}>
                <FontAwesomeIcon icon={faMinus} /> {/* Decrease quantity */}
              </button>
              <span className={clsx(styles.quantity)}>
                {productItem.warranty}{" "}
                {/* Display product warranty as quantity */}
              </span>
              <button className={clsx(styles.quantityButton)}>
                <FontAwesomeIcon icon={faPlus} /> {/* Increase quantity */}
              </button>
            </div>
          </div>
        </Col>
      </Row>

      {/* Remove Button */}
      <button
        onClick={handleRemoveProduct} // Remove product from cart on click
        className={clsx(styles.removeButton)}
      >
        Remove
      </button>
    </Container>
  );
};

export default ItemCart;
