import clsx from "clsx";
import React, { ReactElement } from "react";
import styles from "./Slider.module.scss";

export const Slider = ({ url }: { url: string }): ReactElement => {
  return (
    <section>
      <img className={clsx(styles.img)} src={url} alt="" />;
    </section>
  );
};
