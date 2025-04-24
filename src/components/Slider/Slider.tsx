import clsx from "clsx";
import { ReactElement } from "react";
import styles from "./Slider.module.scss";

export const Slider = ({ url }: { url: string }): ReactElement => {
  return (
    <section className={clsx(styles.wrapper)}>
      <img className={clsx(styles.img)} src={url} alt="" />
    </section>
  );
};
