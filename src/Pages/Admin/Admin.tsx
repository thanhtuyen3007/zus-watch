import { ReactElement } from "react";
import clsx from "clsx";
import styles from "./Admin.module.scss";
import { Link, Outlet } from "react-router-dom";

const Admin = (): ReactElement => {
  return (
    <div className={clsx(styles.adminPage)}>
      <nav className={clsx(styles.sidebar)}>
        <h3 className={clsx(styles.sidebarTitle)}>Admin Dashboard</h3>
        <ul className={clsx(styles.navList)}>
          <Link to={"/admin/add-product"} className={clsx(styles.navItem)}>
            Add Product
          </Link>
          <Link to={"/admin/products"} className={clsx(styles.navItem)}>
            product list
          </Link>
          <Link to={"/"} className={clsx(styles.navItem)}>
            Orders
          </Link>
          <Link to={"/"} className={clsx(styles.navItem)}>
            Users
          </Link>
          <Link to={"/"} className={clsx(styles.navItem)}>
            Chat
          </Link>
        </ul>
      </nav>
      <main className={clsx(styles.mainContent)}>
        <Outlet />
      </main>
    </div>
  );
};
export default Admin;
