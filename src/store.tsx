import { configureStore } from "@reduxjs/toolkit";
import { addProductSlice } from "./components/AddProduct/AddProductReducer";
import { upLoadImageSlice } from "./components/UploadImage/UploadImageSlice";

export const store = configureStore({
    reducer: {
        addImageWatch : upLoadImageSlice.reducer,
        productsList: addProductSlice.reducer,
    }
})
export type RootState = ReturnType<typeof store.getState>;
