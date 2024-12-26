import clsx from "clsx";
import React, { ReactElement } from "react";
import styles from "./Banner.module.scss";
import { Link } from "react-router-dom";

// Define the Prop type for the Banner component
type Prop = {
  title: string;
  desc: string;
  url: string;
  linkToCollection: string;
};

// Banner component
export const Banner = ({
  title,
  desc,
  url,
  linkToCollection,
}: Prop): ReactElement => {
  return (
    <section className={clsx(styles.wrapper)}>
      <img className={clsx(styles.img)} src={url} alt={title} />
      <div className={clsx(styles.content)}>
        <h1 className={clsx(styles.title)}>{title}</h1>
        <p className={clsx(styles.desc)}>{desc}</p>
        <Link className={clsx(styles.link)} to={linkToCollection}>
          See more
        </Link>
      </div>
    </section>
  );
};
