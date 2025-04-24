import React, from "react";
import clsx from "clsx";
import styles from "./SideBar.module.scss";


// Collection options

const SideBar: React.FC = () => {
 
 

  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.title)}>
        <h2 className={clsx(styles.nameTitle)}>collection</h2>
      </div>
      {/* <ul className={clsx(styles.listType)}>
        {collections.map((typeCollecton) => (
          <li
            key={typeCollecton} // Add key for each list item
            className={clsx(styles.itemType, {
              [styles.active]: selectedFilter === typeCollecton,
            })}
          >
            <input
              className={clsx(styles.checkbox)}
              type="checkbox"
              checked={selectedFilter === typeCollecton}
              onChange={() => handleFilterChange(typeCollecton)}
            />
            {typeCollecton}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default SideBar;
