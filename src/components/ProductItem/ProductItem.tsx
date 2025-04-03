// import clsx from "clsx"; // Utility for conditionally joining classNames
// import styles from "./ProductItem.module.scss"; // Importing CSS module for styling
// import { Link } from "react-router-dom"; // Link component for navigation

// import { ImageProduct } from "../ImageProduct/ImageProduct"; // Custom component for rendering product images

// // Functional component to render a single product item
// export const ProductItem = (data) => {
//   // data contains the product information passed as a prop

//   return (
//     // Link wraps the entire product item, making it clickable and navigable to the product's name route
//     <Link to={data.data.name} className={clsx(styles.container)}>
//       {/* Render the product image */}
//       <ImageProduct
//         classname={clsx(styles.img)} // Apply styles to the image
//         src={data.data.image} // Image source URL
//         alt={data.data.description} // Alternative text for the image
//       />
//       {/* Render the product name */}
//       <h3 className={clsx(styles.name)}>{data.data.name}</h3>
//       {/* Render the product price */}
//       <p className={clsx(styles.price)}>{data.data.price}$</p>
//     </Link>
//   );
// };
