import clsx from "clsx";
import { ReactElement } from "react";
import styles from "./Mission.module.scss";

// Define the Prop interface
interface Prop {
  slogan: string;
  mission: string;
  url: string;
}

// Mission component
export const Mission = ({ slogan, mission, url }: Prop): ReactElement => {
  return (
    <aside className={clsx(styles.collection_infor)}>
      <img src={url} alt={slogan} className={clsx(styles.collection_image)} />
      <div className={clsx(styles.collection_content)}>
        <h1 className={clsx(styles.collection_title)}>{slogan}</h1>
        <p className={clsx(styles.collection_desc)}>{mission}</p>
      </div>

      {/* Display the title, image, and description of the collection */}
    </aside>
  );
};
