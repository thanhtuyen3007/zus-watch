import clsx from "clsx";
import styles from "./AddProduct.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store.tsx";
import UploadImage from "../UploadImage/UploadImage";
// import { addProductSlice } from "./AddProductReducer.tsx";
import { Watch } from "../../dataType.ts";
import { v4 as uuid } from "uuid";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [theme, setTheme] = useState("classic");
  const [productDetails, setProductDetails] = useState("");
  const [warranty, setWarranty] = useState(0);
  const [stock, setstock] = useState(0);
  // const imageUrl: string = useSelector(
  //   (state: RootState) => state.addImageWatch.imageUrl
  // );

  // const dispatch = useDispatch();

  // const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const newWatch: Watch = {
  //     id: uuid(),
  //     name: name,
  //     price: price,
  //     description: description,
  //     category: theme,
  //     productDetails: productDetails,
  //     warranty: warranty,
  //     stock: stock,
  //     imageUrl: imageUrl,
  //   };
    // dispatch(
    //   addProductSlice.actions.addProduct({
    //     categoryName: theme,
    //     product: newWatch,
    //   })
    // );
  // };
  return (
    <div>
      <h2 className={clsx(styles.title)}>Add Watch Product</h2>
      <form  className={clsx(styles.form)}>
        <div className={clsx(styles.formGroup)}>
          <label htmlFor="name" className={clsx(styles.label)}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={clsx(styles.input)}
            required
            onChange={(e) => setName(e.target.value)}
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
            className={clsx(styles.input)}
            required
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
        </div>
        <div className={clsx(styles.formGroup)}>
          <label htmlFor="description" className={clsx(styles.label)}>
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            className={clsx(styles.textarea)}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={clsx(styles.formGroup)}>
          <label htmlFor="theme" className={clsx(styles.label)}>
            Theme:
          </label>
          <select
            onChange={(e) => setTheme(e.target.value)}
            id="theme"
            className={clsx(styles.select)}
            required
          >
            <option value="c1">Classic</option>
            <option value="c2">Contemporary</option>
            <option value="c3">watch by theme</option>
          </select>
        </div>

        <div className={clsx(styles.formGroup)}>
          <label htmlFor="productDetails" className={clsx(styles.label)}>
            Product Details:
          </label>
          <textarea
            id="productDetails"
            name="productDetails"
            className={clsx(styles.input)}
            required
            onChange={(e) => setProductDetails(e.target.value)}
          />
        </div>
        <div className={clsx(styles.formGroup)}>
          <label htmlFor="warranty" className={clsx(styles.label)}>
            Warranty (years):
          </label>
          <input
            type="number"
            id="warranty"
            name="warranty"
            className={clsx(styles.input)}
            required
            onChange={(e) => setWarranty(parseInt(e.target.value))}
          />
        </div>
        <div className={clsx(styles.formGroup)}>
          <label htmlFor="quantity" className={clsx(styles.label)}>
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className={clsx(styles.input)}
            required
            onChange={(e) => setstock(parseInt(e.target.value))}
          />
        </div>
        <UploadImage />
        {/* {imageUrl && <img src={imageUrl} alt="" width={100} />} */}

        <button type="submit" className={clsx(styles.submitButton)}>
          Add Product
        </button>
      </form>
    </div>
  );
};
export default AddProduct;
