import React, { ReactElement, ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from './DefaultLayout.module.scss'


export const DefaultLayout = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  return (
    <div>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};
