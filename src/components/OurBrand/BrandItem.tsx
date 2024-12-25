import React from "react";
import clsx from "clsx";
import { Container } from "react-bootstrap";
import styles from "./OurBrand.module.scss";
import { Link } from "react-router-dom";
type TheBrandProps = {
  src: string;
  title: string;
  link: string;
};
export const BrandItem: React.FC<TheBrandProps> = ({ src, title, link }) => {
  return (
    <Container className={clsx(styles.wrapperItem)}>
      <img className={clsx(styles.img)} src={src} alt={title} />
      <div className={clsx(styles.content)}>
        <Link className={clsx(styles.title)} to={link}>
          {title}
        </Link>
      </div>
    </Container>
  );
};
