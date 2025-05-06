import React, { ReactElement, useEffect } from "react";
import clsx from "clsx";
import styles from "./Collections.module.scss";
import TitleSection from "../../components/TitleSection/TitleSection";
import axios from "axios";
import { Banner } from "../../components/Banner/Banner";
import { CollectionType } from "../../types/types";
const Collections = (): ReactElement => {
  const [collectionsList, setCollectionsList] = React.useState([]); // Initialize collectionsList state

  useEffect(() => {
    axios
      .get("http://localhost:3001/collections")
      .then((response) => {
        // console.log(response.data); // Log the fetched data for debugging purposes
        setCollectionsList(response.data); // Set the collectionsList state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching collections:", error); // Handle any errors that occur during the request
      });
  }, []); // Empty dependency array to run the effect only once on component mount
  return (
    <section className={clsx(styles.wrapper)}>
      <TitleSection
        title="Collections"
        desc="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
      />
      <div className={clsx(styles.collections)}>
        {collectionsList.map((collection: CollectionType) => (
          <Banner
            key={collection.id}
            title={collection.name}
            desc={collection.description}
            url={collection.image}
            linkToCollection={`/watches?collectionId=${collection.id}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Collections;
