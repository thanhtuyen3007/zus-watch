import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./CollectionItem.module.scss";
import { Collection } from "../../dataType";


export const CollectionItem = ({ data } : {data : Collection}) => {
  
  return (
    <div className={clsx(styles.container)}>
      <img className={clsx(styles.img)} src={data.image} alt={data.name} />
      <h3 className={clsx(styles.title)}>{data.name}</h3>
      <Link to={""} className={clsx(styles.link)}>
        See more
      </Link>
    </div>
  );
};
