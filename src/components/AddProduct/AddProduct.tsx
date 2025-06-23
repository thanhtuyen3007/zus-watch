import clsx from "clsx";
import styles from "./AddProduct.module.scss";
import { useEffect, useState } from "react";
import UploadImage from "../UploadImage/UploadImage";
import axios from "axios";
import { CollectionType, WatchType } from "../../types/types";

const AddProduct = () => {
  const [product, setProduct] = useState<WatchType[]>([]);
  const [collections, setCollections] = useState<CollectionType[]>([]);

  const inputFields = [
    { id: "name", label: "Name", type: "text" },
    { id: "price", label: "Price", type: "number" },
    { id: "description", label: "Description", type: "textarea" },
    { id: "productDetails", label: "Product Details", type: "textarea" },
    { id: "warranty", label: "Warranty (years)", type: "number" },
    { id: "stock", label: "Stock", type: "number" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
    collectionId: "",
    productDetails: "",
    warranty: 0,
    stock: 0,
    imageUrl: "",
  });

  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => {
        setCollections(res.data.collections);
        const localData = localStorage.getItem("products");
        if (localData) {
          setProduct(JSON.parse(localData));
        } else {
          setProduct(res.data.products);
        }
      })
      .catch((err) => console.error("Failed to load data", err));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const newValue = type === "number" ? parseFloat(value) : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const generateNewId = () => {
    const productId = product.map((item) =>
      parseInt(item.id.replace("w", ""))
    );
    const maxId = productId.length > 0 ? Math.max(...productId) : 0;
    return `w${maxId + 1}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newProduct: WatchType = {
      id: generateNewId(),
      ...formData,
      warranty: String(formData.warranty),
      category: "", // Provide a default or selected category value here
    };

    const updatedProducts = [...product, newProduct];
    setProduct(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    setFormData({
      name: "",
      price: 0,
      description: "",
      collectionId: "",
      productDetails: "",
      warranty: 0,
      stock: 0,
      imageUrl: "",
    });

    console.log("Product added locally:", newProduct);
  };

  return (
    <div>
      <h2 className={clsx(styles.title)}>Add Watch Product</h2>
      <form className={clsx(styles.form)} onSubmit={handleSubmit}>
        {inputFields.map(({ id, label, type }) => (
          <div key={id} className={clsx(styles.formGroup)}>
            <label htmlFor={id} className={clsx(styles.label)}>
              {label}:
            </label>
            {type === "textarea" ? (
              <textarea
                id={id}
                name={id}
                className={clsx(styles.textarea)}
                value={formData[id as keyof typeof formData] as string}
                onChange={handleChange}
                required
              />
            ) : (
              <input
                type={type}
                id={id}
                name={id}
                className={clsx(styles.input)}
                value={formData[id as keyof typeof formData]}
                onChange={handleChange}
                required
              />
            )}
          </div>
        ))}

        <label htmlFor="collectionId" className={clsx(styles.label)}>
          Collection:
        </label>
        <select
          id="collectionId"
          name="collectionId"
          className={clsx(styles.input)}
          value={formData.collectionId}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Collection --</option>
          {collections.map((col) => (
            <option key={col.id} value={col.id}>
              {col.name}
            </option>
          ))}
        </select>

        <UploadImage
          label="Product Image"
          onUploadSuccess={(url) => setFormData({ ...formData, imageUrl: url })}
        />

        <button type="submit" className={clsx(styles.submitButton)}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
