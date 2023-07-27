import { createSlice } from "@reduxjs/toolkit";

import PlaceholderImage from "../../assets/placeholder-image.jpeg";

const INITIAL_STATE = {
  imgSrc: PlaceholderImage,
};

export const progressiveImageSlice = createSlice({
  name: "progressiveImage",
  initialState: INITIAL_STATE,
  reducers: {
    setImgSrc(state, action) {
      state.imgSrc = action.payload;
    },
  },
});

export const { setImgSrc } = progressiveImageSlice.actions;

export const progressiveImageReducer = progressiveImageSlice.reducer;
