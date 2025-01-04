import React, { useState } from "react";
import clsx from "clsx";
import styles from "./FormOder.module.scss";
import { Col, Row } from "react-bootstrap";

export const FormOder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
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
      <h2 className={clsx(styles.formTitle)}>Order Information</h2>
      <form className={clsx(styles.formWrapper)} onSubmit={handleSubmit}>
        <Row>
          <Col md={8}>
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
                placeholder="Enter your name"
                required
              />
            </div>
          </Col>
          <Col md={4}>
            <div className={clsx(styles.formGroup)}>
              <label htmlFor="phone" className={clsx(styles.formLabel)}>
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={clsx(styles.formInput)}
                placeholder="Enter your phone number"
                required
              />
            </div>
          </Col>
        </Row>

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
            placeholder="Enter your email"
            required
          />
        </div>

        <div className={clsx(styles.formGroup)}>
          <label htmlFor="address" className={clsx(styles.formLabel)}>
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={clsx(styles.formInput)}
            placeholder="Enter your address"
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
            placeholder="Enter your message"
            required
          />
        </div>
        
      </form>
    </section>
  );
};
