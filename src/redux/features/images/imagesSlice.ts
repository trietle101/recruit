import { createSlice } from "@reduxjs/toolkit";
import { getImages } from "../../actions/imagesActionThunk";

interface ImagesState {
  images: any;
}

const initialState: ImagesState = {
  images: null
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        state.images = null;
      })
      .addCase(getImages.fulfilled, (state, action: any) => {
        state.images = action.payload;
      })
      .addCase(getImages.rejected, (state) => {
        state.images = null;
      });
  }
});
export default imagesSlice.reducer;
