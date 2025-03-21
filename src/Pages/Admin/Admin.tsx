import { ReactElement } from "react";
import clsx from "clsx";
import styles from "./Admin.module.scss";
import AddProduct from "../../components/AddProduct/AddProduct";

const Admin = (): ReactElement => {
  return (
    <div className={clsx(styles.adminPage)}>
      <nav className={clsx(styles.sidebar)}>
        <h3 className={clsx(styles.sidebarTitle)}>Admin Dashboard</h3>
        <ul className={clsx(styles.navList)}>
          <li className={clsx(styles.navItem)}>Add Product</li>
          <li className={clsx(styles.navItem)}>product list</li>
          <li className={clsx(styles.navItem)}>Orders</li>
          <li className={clsx(styles.navItem)}>Users</li>
          <li className={clsx(styles.navItem)}>Chat</li>
        </ul>
      </nav>
      <main className={clsx(styles.mainContent)}>
        <AddProduct />
      </main>
    </div>
  );
};
export default Admin;
