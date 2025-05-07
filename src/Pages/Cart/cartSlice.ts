import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WatchType } from "../../types/types";

// Define the structure of the cart's state
interface CartState {
  cartItems: WatchType[]; // Array of items in the cart
  totalPrice: number; // Total price of all items in the cart
}

// Utility function to load cart items from local storage
const loadFromLocalStorage = (): WatchType[] => {
  try {
    const data = localStorage.getItem("cart"); // Retrieve cart data from local storage
    return data ? JSON.parse(data) : []; // Parse the data if it exists, otherwise return an empty array
  } catch {
    return []; // Return an empty array if there's an error (e.g., invalid JSON)
  }
};

// Initial state of the cart
const initialState: CartState = {
  cartItems: loadFromLocalStorage(), // Load initial cart items from local storage
  totalPrice: 0, // Initialize total price to 0
};

// Create a Redux slice for the cart
export const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState, // Initial state of the cart
  reducers: {
    // Action to add an item to the cart
    addToCart: (state, action: PayloadAction<WatchType>) => {
      state.cartItems.push(action.payload); // Add the new item to the cart
    },

    // Action to remove an item from the cart by its ID
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload // Keep only items that don't match the given ID
      );
    },
  },
});

// Export the action creators for use in components
export const { addToCart, removeFromCart } = cartSlice.actions;

// Export the reducer to be included in the Redux store
export default cartSlice.reducer;
