import { ReactElement, useState } from "react";
import clsx from "clsx";
import styles from "./AddProduct.module.scss";

const AddProduct = (): ReactElement => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    description: "",
    imageUrl: "",
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
    console.log("Form Data Submitted:", formData);
    // Add logic to handle form submission, e.g., API call
  };
  return (
    <div>
      <h2 className={clsx(styles.title)}>Add Watch Product</h2>
      <form onSubmit={handleSubmit} className={clsx(styles.form)}>
        <div className={clsx(styles.formGroup)}>
          <label htmlFor="name" className={clsx(styles.label)}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={clsx(styles.input)}
            required
          />
        </div>
        <div className={clsx(styles.formGroup)}>
          <label htmlFor="brand" className={clsx(styles.label)}>
            Brand:
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className={clsx(styles.input)}
            required
          />
        </div>
        <div className={clsx(styles.formGroup)}>
          <label htmlFor="price" className={clsx(styles.label)}>
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={clsx(styles.input)}
            required
          />
        </div>
        <div className={clsx(styles.formGroup)}>
          <label htmlFor="description" className={clsx(styles.label)}>
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={clsx(styles.textarea)}
            required
          />
        </div>
        <div className={clsx(styles.formGroup)}>
          <label htmlFor="theme" className={clsx(styles.label)}>
            Theme:
          </label>
          <select
            id="theme"
            className={clsx(styles.select)}
            required
          >
            <option value="classic">Classic</option>
            <option value="pro">Professionals</option>
            <option value="watch">Watch by theme</option>
          </select>
          </div>
        <div className={clsx(styles.formGroup)}>
          <label htmlFor="imageUrl" className={clsx(styles.label)}>
            Image URL:
          </label>
          <input
            type="file"
            id="imageUrl"
            name="imageUrl"
            multiple
            //   value={formData.imageUrl}
            // onChange={handleChangeIamge}
            className={clsx(styles.input)}
            required
          />
        </div>
        <button type="submit" className={clsx(styles.submitButton)}>
          Add Product
        </button>
      </form>
    </div>
  );
};
export default AddProduct;
