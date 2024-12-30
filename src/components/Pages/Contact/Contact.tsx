import styles from "./Contact.module.scss";
import clsx from "clsx";
import { FormContact } from "../../FormContact/FormContact";
import TitleSection from "../../TitleSection/TitleSection";

const Contact = () => {
  return (
    <section className={clsx(styles.contactSection)}>
      <TitleSection
        title="Contact Us"
        desc="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
      />
      {/* Render the contact form */}
      <FormContact />
    </section>
  );
};

export default Contact;
