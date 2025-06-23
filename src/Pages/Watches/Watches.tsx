import { ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import clsx from "clsx";
import { Container } from "react-bootstrap";
import styles from "./Watches.module.scss";
import ListProducts from "../../components/ListProducts/ListProducts";

const Watches = (): ReactElement => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const collectionId = queryParams.get("collectionId");

  const [dataProducts, setDataProducts] = useState([]);
  const [titleCollection, setTitleCollection] = useState("");
  const [descriptionCollection, setDescriptionCollection] = useState("");
  const [imageCollection, setImageCollection] = useState("");

  useEffect(() => {
    if (!collectionId) return;

    axios
      .get("/data.json")
      .then((res) => {
        const collections = res.data.collections;
        const products = res.data.products;

        const collection = collections.find((col: { id: string; }) => col.id === collectionId);
        const productsInCollection = products.filter(
          (p: { collectionId: string; }) => p.collectionId === collectionId
        );

        if (collection) {
          setTitleCollection(collection.name);
          setDescriptionCollection(collection.description);
          setImageCollection(collection.image);
        }

        setDataProducts(productsInCollection);
      })
      .catch((err) => {
        console.error("Error loading data.json:", err);
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
