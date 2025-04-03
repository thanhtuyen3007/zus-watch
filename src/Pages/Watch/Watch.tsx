import { ReactElement } from "react";
import clsx from "clsx";
import {  Container } from "react-bootstrap";
import TitleSection from "../../components/TitleSection/TitleSection";
import { Slider } from "../../components/Slider/Slider";
import styles from "./Watch.module.scss";
import CollectionSection from "../../components/CollectionSection/CollectionSection";

const Watch = (): ReactElement => {
  return (
    <section className={clsx(styles.wrapper)}>
      <Slider url="https://images.unsplash.com/photo-1682915849551-cea87c145b34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Container fluid className={clsx(styles.content)}>
        <TitleSection
          title="Collections"
          desc="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
        />
        <CollectionSection />
      </Container>
    </section>
  );
};

export default Watch;
