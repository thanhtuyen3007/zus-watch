import React, { useState } from "react";
import clsx from "clsx";
import styles from "./FormContact.module.scss";

export const FormContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <section className={clsx(styles.formSection)}>
      <form className={clsx(styles.formWrapper)} onSubmit={handleSubmit}>
        <div className={clsx(styles.formGroup)}>
          <label htmlFor="name" className={clsx(styles.formLabel)}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={clsx(styles.formInput)}
            required
          />
        </div>
        <div className={clsx(styles.formGroup)}>
          <label htmlFor="email" className={clsx(styles.formLabel)}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={clsx(styles.formInput)}
            required
          />
        </div>
        <div className={clsx(styles.formGroup)}>
          <label htmlFor="message" className={clsx(styles.formLabel)}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={clsx(styles.formTextarea)}
            required
          />
        </div>
        <button type="submit" className={clsx(styles.formButton)}>
          Submit
        </button>
      </form>
    </section>
  );
};
