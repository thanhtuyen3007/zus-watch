import React from "react";
import clsx from "clsx";
import styles from './TitleSection.module.scss'
type TitleSectionProps = {
  title: string;
  desc?: string;
};

const TitleSection: React.FC<TitleSectionProps> = ({ title, desc }) => {
  return (
    <div className={clsx(styles.container)}>
      <h3 className={clsx(styles.title)}>{title}</h3>
      <p className={clsx(styles.desc)}>{desc}</p>
    </div>
  );
};

export default TitleSection;
