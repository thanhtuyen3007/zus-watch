import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./CollectionItem.module.scss";

type ProductData = {
  id: number;
  name: string;
  url: string;
  link: string;
};

export const CollectionItem: React.FC<{ data: ProductData }> = ({ data }) => {
  return (
    <div className={clsx(styles.container)}>
      <img className={clsx(styles.img)} src={data.url} alt={data.name} />
      <h3 className={clsx(styles.title)}>{data.name}</h3>
      <Link to={data.link} className={clsx(styles.link)}>
        See more
      </Link>
    </div>
  );
};
