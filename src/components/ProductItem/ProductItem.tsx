import React from "react";
import clsx from "clsx";
import styles from "./ProductItem.module.scss";
// import { Link } from "react-router-dom";
import { WatchProduct } from "../../data";
// import { ImageProduct } from "../ImageProduct/ImageProduct";

export const ProductItem: React.FC<{ data: WatchProduct }> = () => {
  // console.log(data);
  return (
    <div className={clsx(styles.container)}>
      {/* <Link to={"/"} className={clsx(styles.price)}>
        <ImageProduct
          classname={clsx(styles.img)}
          src={data.image}
          alt={data.description}
        />
        <h3 className={clsx(styles.name)}>{data.name}</h3>
        <p className={clsx(styles.price)}>{data.price.toFixed(1)}$</p>
      </Link> */}
      Product Item
    </div>
  );
};
