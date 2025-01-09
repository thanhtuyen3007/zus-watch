import styles from "./Contact.module.scss";
import clsx from "clsx";
import { FormContact } from "../../FormContact/FormContact";
import TitleSection from "../../TitleSection/TitleSection";
import { Slider } from "../../Slider/Slider";
import ProductIntro from "../../ProductIntro/ProductIntro";

const Contact = () => {
  return (
    <section className={clsx(styles.contactSection)}>
      <Slider url="https://images.unsplash.com/photo-1597695196353-cf1ac6b2acaa?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <section className={clsx(styles.contactSubsection)}>
        {/* Render the title section */}
        <TitleSection
          title="Contact Us"
          desc="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
        />
        {/* Render the contact form */}
        <FormContact />
      </section>
    </section>
  );
};

export default Contact;
