import axios from "axios";
import clsx from "clsx"; 
import { useState } from "react";
import styles from "./UploadImage.module.scss"; 

// Props interface for the UploadImage component
interface UploadImageProps {
  label: string; // Label for the input field
  onUploadSuccess: (url: string) => void; // Callback function triggered after a successful upload
}

// Functional component for uploading an image
const UploadImage: React.FC<UploadImageProps> = ({
  label,
  onUploadSuccess,
}) => {
  const [imageUrl, setImageUrl] = useState(""); // State to store the uploaded image URL

  // Function to handle image upload
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the selected file
    if (!file) return; // Exit if no file is selected

    const formData = new FormData(); // Create a FormData object to send the file
    formData.append("file", file); // Append the file to the FormData object
    formData.append("upload_preset", "product_image"); // Append the upload preset (specific to Cloudinary)

    try {
      // Send a POST request to the Cloudinary API
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/djka3a0ah/image/upload",
        formData
      );

      const url = response.data.secure_url; // Extract the secure URL of the uploaded image
      setImageUrl(url); // Update the state with the uploaded image URL
      onUploadSuccess(url); // Trigger the callback function with the uploaded image URL
      console.log("Image uploaded successfully:", url); // Log the success message
    } catch (error) {
      console.error("Error uploading image:", error); // Log any errors
    }
  };

  return (
    <div className={clsx(styles.formGroup)}>
      {/* Label for the file input */}
      <label htmlFor="imageUrl" className={clsx(styles.label)}>
        {label}:
      </label>

      {/* File input for selecting an image */}
      <input
        type="file"
        id="imageUrl"
        name="imageUrl"
        className={clsx(styles.fileInput)}
        accept="image/*" // Restrict file types to images only
        required // Make the input field required
        onChange={handleUpload} // Handle file selection
      />

      {/* Display a preview of the uploaded image */}
      {imageUrl && <img src={imageUrl} alt="Preview" width="200px" />}
    </div>
  );
};

export default UploadImage;
