import clsx from "clsx";
import styles from "./ProductItem.module.scss";
import { Link } from "react-router-dom";
import { ImageProduct } from "../ImageProduct/ImageProduct";
import { WatchType } from "../../types/types";

interface ProductItemProps {
  data: WatchType;
}

export const ProductItem = ({ data }: ProductItemProps) => {
  return (
    <Link to={`/products/${data.id}`} className={clsx(styles.container)}>
      <ImageProduct
        classname={clsx(styles.img)} // Apply styles to the image
        src={data.imageUrl} // Image source URL
        alt={data.description} // Alternative text for the image
      />
      <h3 className={clsx(styles.name)}>{data.name}</h3>
      <p className={clsx(styles.desc)}>{data.description}</p>
      <p className={clsx(styles.price)}>${data.price.toLocaleString()}</p>
    </Link>
  );
};
