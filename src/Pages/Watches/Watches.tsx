import { ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation for accessing query parameters
import axios from "axios";
import clsx from "clsx"; // Import clsx for conditional class management
import { Container } from "react-bootstrap";
import styles from "./Watches.module.scss";
import ListProducts from "../../components/ListProducts/ListProducts";

const Watches = (): ReactElement => {
  const location = useLocation(); // Get the current URL information
  const queryParams = new URLSearchParams(location.search); // Convert the query string into an object for easier reading
  const collectionId = queryParams.get("collectionId"); // Get the value of "collectionId"
  const [dataProducts, setDataProducts] = useState([]); // State to store the list of products
  const [titleCollection, setTitleCollection] = useState(""); // State to store the title of the collection
  const [descriptionCollection, setDescriptionCollection] = useState(""); // State to store the description of the collection
  const [imageCollection, setImageCollection] = useState(""); // State to store the image of the collection

  useEffect(() => {
    // Fetch collections data from the API
    axios
      .get("http://localhost:3001/collections")
      .then((response) => {
        const collections = response.data;
        console.log("Fetched collections:", collections); // Log the fetched collections for debugging

        if (collectionId) {
          // If collectionId exists in query parameters
          const selectedCollection = collections.find(
            (collection: { id: string }) => collection.id === collectionId
          ); // Find the collection matching the collectionId

          if (selectedCollection) {
            // If a matching collection is found, update the product list
            setTitleCollection(selectedCollection.name); // Set the title of the collection
            setDescriptionCollection(selectedCollection.description);
            setImageCollection(selectedCollection.image); // Set the description of the collection
            setDataProducts(selectedCollection.watches);
            console.log("Selected watches:", selectedCollection.watches);
          } else {
            // If no matching collection is found, set an empty product list
            setDataProducts([]);
            console.log("No collection found with id:", collectionId);
          }
        }
      })
      .catch((error) => {
        // Handle errors during the API call
        console.error("Error fetching collections:", error);
      });
  }, [collectionId]); // Re-run the effect whenever collectionId changes

  console.log("data", dataProducts); // Log the current product list for debugging

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            hendrerit, nisi in fringilla blandit, sem tellus ultricies nibh,
            bibendum dictum libero magna ac est. Proin tristique varius metus,
            ut dictum velit efficitur et. Sed vel augue sit amet velit dictum
            porttitor eu sit amet enim. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Nulla vulputate mi tortor, at suscipit
            libero consequat ac. Nam facilisis, nunc a imperdiet consectetur,
            nunc libero cursus augue, vel iaculis nisi metus sit amet massa.
            Cras eget tortor consequat tellus pharetra tincidunt ac id mi.
          </p>
        </div>

        {/* Display the title, image, and description of the collection */}
      </aside>
      <ListProducts data={dataProducts} />{" "}
      {/* Pass the product list to ListProducts */}
    </Container>
  );
};

export default Watches;
