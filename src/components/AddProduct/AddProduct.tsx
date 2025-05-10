import clsx from "clsx"; // Utility for conditional class names
import styles from "./AddProduct.module.scss"; // Module-specific styles
import { useEffect, useState } from "react";
import UploadImage from "../UploadImage/UploadImage"; // Component for uploading product images
import axios from "axios"; // HTTP client for API requests
import { CollectionType, WatchType } from "../../types/types"; // Type definitions for collections and products

// Functional component for adding a new product
const AddProduct = () => {
  // State to store the list of products
  const [product, setProduct] = useState<WatchType[]>([]);

  // State to store the list of collections
  const [collections, setCollections] = useState<CollectionType[]>([]);

  // Input fields for the form
  const inputFields = [
    { id: "name", label: "Name", type: "text" },
    { id: "price", label: "Price", type: "number" },
    { id: "description", label: "Description", type: "textarea" },
    { id: "productDetails", label: "Product Details", type: "textarea" },
    { id: "warranty", label: "Warranty (years)", type: "number" },
    { id: "stock", label: "Stock", type: "number" },
  ];

  // State to store form data
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

  // Fetch collections and products when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:3001/collections") // Fetch collections
      .then((res) => setCollections(res.data))
      .catch((err) => console.error("Failed to load collections", err));

    axios
      .get("http://localhost:3001/products") // Fetch products
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Failed to load products", err));
  }, []);

  // Handle changes in form inputs
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    let newValue: string | number = value;
    // Convert value to number if the input type is number
    if (type === "number") {  // Check if the input type is number
      newValue = parseFloat(value);// Convert the value to a number
    } else {
      newValue = value; // Otherwise, keep it as a string
    }

    setFormData({
      ...formData,
      [name]: newValue,// Update the formData state with the new value
    });
  };

  // Generate a new unique ID for the product
  const generateNewId = () => {
    const productId = product.map((productItem) => parseInt(productItem.id.replace("w", "")));// Extract numeric IDs from existing products
    // Find the maximum ID and increment it for the new product
    const maxId = productId.length > 0 ? Math.max(...productId) : 0;
    return `w${maxId + 1}`; // Generate a new ID
  };
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a new product object
    const newProduct = {
      id: generateNewId(),
      ...formData,
    };

    // Send a POST request to add the new product
    axios
      .post("http://localhost:3001/products", newProduct)
      .then((response) => {
        console.log("Product added successfully:", response.data);

        // Update the product list and reset the form
        setProduct([...product, response.data]);
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
      })
      .catch((err) => console.error("Failed to add product", err));
  };

  return (
    <div>
      <h2 className={clsx(styles.title)}>Add Watch Product</h2>
      <form className={clsx(styles.form)} onSubmit={handleSubmit}>
        {/* Render input fields dynamically */}
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

        {/* Dropdown for selecting a collection */}
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

        {/* Upload image component */}
        <UploadImage
          label="Product Image"
          onUploadSuccess={(url) => setFormData({ ...formData, imageUrl: url })}
        />

        {/* Submit button */}
        <button type="submit" className={clsx(styles.submitButton)}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
