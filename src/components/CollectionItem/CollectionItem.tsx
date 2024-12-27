import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./CollectionItem.module.scss";
import { CollectionItemType } from "../../data";



export const CollectionItem: React.FC<{ data: CollectionItemType }> = ({ data }) => {
  // console.log(data);
  return (
    <div className={clsx(styles.container)}>
      <img className={clsx(styles.img)} src={data.image} alt={data.title} />
      <h3 className={clsx(styles.title)}>{data.title}</h3>
      <Link to={data.link} className={clsx(styles.link)}>
        See more
      </Link>
    </div>
  );
};
