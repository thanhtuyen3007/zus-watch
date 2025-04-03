import { createSlice } from "@reduxjs/toolkit";
interface ImageState {
  imageUrl: string
}

const initialState: ImageState = {
  imageUrl : ''}

export const upLoadImageSlice = createSlice({
  name: "upLoadImage",
  initialState,
  reducers: {
    addImageUrl: (state, action) => {
      state.imageUrl = action.payload.imageUrl;
    },
  },
});

export const { addImageUrl } = upLoadImageSlice.actions;
