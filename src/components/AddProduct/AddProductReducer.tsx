import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  Watch } from "../../dataType";
import { Products } from "../../data";

const initialState = Products; // Initial state for the collection of products
// Create a slice for managing product collections
export const addProductSlice = createSlice({
  name: "addProduct", // Name of the slice
  initialState,
  reducers: {
    // Reducer to add a new product to the appropriate collection
    //action : addProducts
    addProduct: (
      state,
      action: PayloadAction<{ categoryName: string; product: Watch }>
    ) => {
      const { categoryName, product } = action.payload;

      // Tìm danh mục có tên trùng với category của sản phẩm
      const category = state.find(
        (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
      );

      if (category) {
        // Thêm sản phẩm vào danh mục tương ứng
       category.watches.push(product);
      } else {
        console.warn(`Danh mục "${categoryName}" không tồn tại!`);
      }
    },
  },
});

// Xuất reducer và action
export const { addProduct } = addProductSlice.actions;
export default addProductSlice.reducer;
