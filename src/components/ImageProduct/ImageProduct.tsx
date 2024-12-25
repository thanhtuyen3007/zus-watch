import React, { ReactElement } from "react";
import clsx from "clsx";
import images from "../../assets";
import styles from "./ImageProduct.module.scss";
type ImageProductProps = {
  src: string;
  alt: string;
  classname: string;
  fallback: string;
  props: React.ImgHTMLAttributes<HTMLImageElement>;
};
export const ImageProduct = ({
  src,
  alt,
  classname,
  fallback: customFallback = images.noImage,
  ...props
}: ImageProductProps): ReactElement => {
  const [fallback, setFallback] = React.useState("");
  const handleError = () => {
    setFallback(customFallback);
  };
  return (
    <img
      src={fallback || src}
      alt={alt}
      className={clsx(styles.wrapper, classname)}
      {...props}
      onError={handleError}
    />
  );
};
