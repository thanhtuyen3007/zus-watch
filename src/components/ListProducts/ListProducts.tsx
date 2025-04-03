// import { Row, Col } from "react-bootstrap"; // Bootstrap components for layout
// import { ProductItem } from "../ProductItem/ProductItem"; // Component for rendering individual product items
// // Functional component to render a list of products
// const ListProducts = ({ data }) => {
//   console.log(data); // Log the data for debugging purposes

//   return (
//     <Row>
//       {/* Iterate over the collections */}
//       {data.map((collection) => {
//         // Iterate over the products in each collection
//         return collection.products.map((product) => {
//           return (
//             // Render each product inside a Bootstrap column
//             <Col key={product.id} md={4}>
//               {/* Render the ProductItem component for each product */}
//               <ProductItem data={product} />
//             </Col>
//           );
//         });
//       })}
//     </Row>
//   );
// };
// export default ListProducts;
