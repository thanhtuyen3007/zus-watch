import clsx from "clsx";
import { ReactElement } from "react";
import styles from "./Mission.module.scss";
import { useIntersectionObserver } from "../../hook/useIntersectionObserver";
import React from "react";

// Define the Prop interface
interface Prop {
  slogan: string;
  mission: string;
  url: string;
}

// Mission component
export const Mission = ({ slogan, mission, url }: Prop): ReactElement => {
  const missionRef = React.useRef<HTMLDivElement>(null); // Create a ref for the mission element
  const isVisible = useIntersectionObserver(missionRef, { threshold: 0.5 }); // Use custom hook to observe the mission element
  // Check if the mission is visible in the viewport
  return (
    <aside ref={missionRef} className={clsx(styles.collection_infor)}>
      <img src={url} alt={slogan} className={clsx(styles.collection_image)} />
      <div className={clsx(styles.collection_content, { [styles.visible]: isVisible })}>
        {/* Add a class to the content when it is visible */}
        <h1 className={clsx(styles.collection_title)}>{slogan}</h1>
        <p className={clsx(styles.collection_desc)}>{mission}</p>
      </div>
      {/* Display the title, image, and description of the collection */}
    </aside>
  );
};
