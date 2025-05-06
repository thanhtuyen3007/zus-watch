import clsx from "clsx";
import React, { ReactElement } from "react";
import styles from "./Banner.module.scss";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "../../hook/useIntersectionObserver";

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
  const bannerRef = React.useRef<HTMLDivElement>(null); // Create a ref for the banner element
  const isVisible = useIntersectionObserver(bannerRef, { threshold: 0.7 }); //use custom hook to observe the banner element
  // Check if the banner is visible in the viewport
  return (
    <aside ref={bannerRef} className={clsx(styles.wrapper)}>
      <img className={clsx(styles.img)} src={url} alt={title} />
      <div className={clsx(styles.content, { [styles.visible]: isVisible })}>
        <h2 className={clsx(styles.title)}>{title}</h2>
        <p className={clsx(styles.desc)}>{desc}</p>
        <Link className={clsx(styles.link)} to={linkToCollection}>
          See more
        </Link>
      </div>
    </aside>
  );
};
