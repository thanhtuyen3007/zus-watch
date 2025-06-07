import { ReactElement, useEffect, useState } from "react";
import clsx from "clsx"; // Utility for conditional class names
import styles from "./ProductIntro.module.scss"; // Module-specific styles
import { Col, Container, Row } from "react-bootstrap"; // Bootstrap components for layout
import { ImageProduct } from "../../components/ImageProduct/ImageProduct"; // Component for rendering product images
import { useParams } from "react-router-dom"; // Hook for accessing route parameters
import { WatchType } from "../../types/types"; // Type definition for a watch product
import axios from "axios"; // HTTP client for API requests
import { useDispatch } from "react-redux"; // Redux hook for dispatching actions
import { addToCart } from "../Cart/cartSlice"; // Action to add a product to the cart

// Functional component for displaying product details
const ProductIntro = (): ReactElement => {
  const { id } = useParams<{ id: string }>(); // Extract the product ID from the route parameters
  const [product, setProduct] = useState<WatchType | null>(null); // State to store the product details
  const dispatch = useDispatch(); // Initialize the Redux dispatch function

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product)); // Dispatch the action to add the product to the cart
      console.log("Product added to cart:", product); // Log the added product for debugging
    }
  };

  // Fetch product details when the component mounts or the ID changes
  useEffect(() => {
    if (!id) return; // Exit if no ID is provided

    axios
      .get(`https://zuswatch-api.onrender.com/products?id=${id}`) // Fetch product details by ID
      .then((res) => {
        const productItem = res.data.find((item: WatchType) => item.id === id); // Find the product in the response
        setProduct(productItem || null); // Update the state with the product details
        console.log("Product data:", productItem); // Log the product data for debugging
      })
      .catch((error) => {
        console.error("Error fetching product:", error); // Log any errors
      });
  }, [id]); // Dependency array ensures the effect runs when the ID changes

  // Display a loading message if the product data is not yet available
  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <Container className={clsx(styles.productIntro)}>
      <Row>
        {/* Product Image */}
        <Col md={6}>
          <ImageProduct
            src={product.imageUrl} // Product image URL
            alt={product.name} // Product name for accessibility
            classname={clsx(styles.productImage)} // Apply styles to the image
          />
        </Col>

        {/* Product Information */}
        <Col md={6} className={clsx(styles.productInfo)}>
          <h1 className={clsx(styles.productName)}>{product.name}</h1>
          <p className={clsx(styles.productDescription)}>
            {product.description}
          </p>
          <p className={clsx(styles.productPrice)}>
            ${product.price.toFixed(2)}{" "}
            {/* Format the price to two decimal places */}
          </p>
          <p className={clsx(styles.productDiscount)}>
            Discount: 10% off for a limited time!{" "}
            {/* Example discount message */}
          </p>
          <button
            className={clsx(styles.addToBagButton)}
            onClick={handleAddToCart} // Add product to cart on click
          >
            Add to Bag
          </button>
        </Col>
      </Row>

      {/* Product Details Section */}
      <div className={clsx(styles.productDetails)}>
        <h2 className={clsx(styles.detailsTitle)}>Product Details:</h2>
        <p className={clsx(styles.detailsText)}>
          This watch features a high-quality stainless steel case, a
          scratch-resistant sapphire crystal, and a water resistance of up to 50
          meters. The elegant design is complemented by a comfortable leather
          strap, making it perfect for both casual and formal occasions.
        </p>
      </div>

      {/* Product Specifications Section */}
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
