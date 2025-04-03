import clsx from "clsx";
import axios from "axios";
import { useState } from "react";
import styles from "./UploadImage.module.scss";
import { useDispatch } from "react-redux";
import { addImageUrl } from "./UploadImageSlice";

const UploadImage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState(""); // State to store the uploaded image URL
  const dispatch = useDispatch(); // Redux dispatch function to send actions to the store

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the first selected file
    if (!file) return; // Exit if no file is selected

    const formData = new FormData(); // Create a FormData object to hold the file data
    formData.append("file", file); // Append the file to the FormData object
    formData.append("upload_preset", "product_image"); // Cloudinary preset for image upload

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/djka3a0ah/image/upload", // Cloudinary upload URL
        formData
      );
      const imageUrl = response.data.secure_url; // Extract the secure URL from the response
      setImageUrl(imageUrl); // Update the state with the uploaded image URL
      dispatch(addImageUrl(imageUrl)); // Dispatch the image URL to the Redux store
      console.log("Image uploaded successfully:", response.data); // Log the successful upload
      console.log("Image URL:", response.data.secure_url); // Log the image URL
    } catch (error) {
      console.error("Error uploading image:", error); // Log any errors during the upload
      if (axios.isAxiosError(error) && error.response) {
        console.error("Response data:", error.response.data); // Log detailed error response
      }
    }
  };

  return (
    <div className={clsx(styles.formGroup)}>
      {/* Label for the file input */}
      <label htmlFor="imageUrl" className={clsx(styles.label)}>
        Image URL:
      </label>
      {/* File input for selecting an image */}
      <input
        type="file"
        id="imageUrl"
        name="imageUrl"
        multiple
        className={clsx(styles.fileInput)}
        accept="image/*" // Restrict file types to images
        required
        onChange={handleUpload} // Trigger the upload handler on file selection
      />
      {/* Display the uploaded image if available */}
      {imageUrl && <img src={imageUrl} alt="" width="200px" />}
    </div>
  );
};
export default UploadImage;
