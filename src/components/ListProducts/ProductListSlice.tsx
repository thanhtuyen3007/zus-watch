import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// fetch danh sách sản phẩm từ API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:3001/product"); // Replace with your API endpoint
    return response.data; // return danh sach sản phẩm
  }
);

const productListSlice = createSlice({
  name: "productList",
  initialState: {
    status: "idle", // Initial status
    items: [], // Initial collection of products
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"; // Set loading state
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload; // Update the state with the fetched products
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.error("Failed to fetch products:", action.error.message);
      });
  },
});

export default productListSlice.reducer;
