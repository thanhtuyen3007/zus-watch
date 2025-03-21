import { ReactElement, ReactNode } from "react";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import styles from "./DefaultLayout.module.scss";

const DefaultLayout = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <div>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
