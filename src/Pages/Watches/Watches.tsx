import { ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation for accessing query parameters
import axios from "axios";
import clsx from "clsx"; // Import clsx for conditional class management
import { Container } from "react-bootstrap";
import styles from "./Watches.module.scss";
import ListProducts from "../../components/ListProducts/ListProducts";
import { API_URL } from "../../config/api";

const Watches = (): ReactElement => {
  const location = useLocation(); // Get the current URL information
  const queryParams = new URLSearchParams(location.search); // Convert the query string into an object for easier reading
  const collectionId = queryParams.get("collectionId"); // Get the value of "collectionId"

  const [dataProducts, setDataProducts] = useState([]); // State to store the list of products
  const [titleCollection, setTitleCollection] = useState(""); // State to store the title of the collection
  const [descriptionCollection, setDescriptionCollection] = useState(""); // State to store the description of the collection
  const [imageCollection, setImageCollection] = useState(""); // State to store the image of the collection

  useEffect(() => {
    if (!collectionId) return;

    // Fetch collection info
    axios
      .get(`${API_URL}/collections${collectionId}`)
      .then((res) => {
        const collection = res.data;
        setTitleCollection(collection.name);
        setDescriptionCollection(collection.description);
        setImageCollection(collection.image);
      })
      .catch((err) => {
        console.error("Error fetching collection:", err);
      });

    // Fetch products in the collection
    axios
      .get(`${API_URL}/products?collectionId=${collectionId}`)
      .then((res) => {
        console.log(res.data); // Log the fetched data for debugging
        setDataProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching watches:", err);
      });
  }, [collectionId]);

  return (
    <Container fluid className={clsx(styles.wrapper)}>
      <aside className={clsx(styles.collection_infor)}>
        <img
          src={imageCollection}
          alt={titleCollection}
          className={clsx(styles.collection_image)}
        />
        <div className={clsx(styles.collection_content)}>
          <h1 className={clsx(styles.collection_title)}>{titleCollection}</h1>
          <p className={clsx(styles.collection_desc)}>
            {descriptionCollection}
          </p>
        </div>
      </aside>
      <ListProducts data={dataProducts} />
    </Container>
  );
};

export default Watches;
