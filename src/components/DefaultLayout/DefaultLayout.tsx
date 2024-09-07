import React, { ReactElement, ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


export const DefaultLayout = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
