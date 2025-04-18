import { configureStore } from "@reduxjs/toolkit";
// import { addProductSlice } from "../components/AddProduct/AddProductReducer";
import { upLoadImageSlice } from "../components/UploadImage/UploadImageSlice";
import  productListSlice  from "../components/ListProducts/ProductListSlice";


export const store = configureStore({
    reducer: {
        addImageWatch : upLoadImageSlice.reducer,
        // addProductSlice: addProductSlice.reducer,
        productList: productListSlice,
    }
})
export type RootState = ReturnType<typeof store.getState>;
