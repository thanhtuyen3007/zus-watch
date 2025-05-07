import { configureStore } from "@reduxjs/toolkit";
import { upLoadImageSlice } from "../components/UploadImage/UploadImageSlice"; // Reducer for handling image uploads
import productListSlice from "../components/ListProducts/ProductListSlice"; // Reducer for managing the product list
import cartReducer from "../Pages/Cart/cartSlice"; // Reducer for managing the cart

// Configure the Redux store
export const store = configureStore({
  reducer: {
    addImageWatch: upLoadImageSlice.reducer, // Reducer for image upload functionality
    productList: productListSlice, // Reducer for the product list
    cart: cartReducer, // Reducer for the shopping cart
  },
});

// Subscribe to store changes
store.subscribe(() => {
  const state = store.getState(); // Get the current state of the store
  localStorage.setItem("cart", JSON.stringify(state.cart.cartItems)); // Save cart items to local storage whenever the state changes
});

// Define the type for the root state of the store
export type RootState = ReturnType<typeof store.getState>; // This allows TypeScript to infer the shape of the state
