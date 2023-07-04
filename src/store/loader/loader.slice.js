import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isLoading: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState: INITIAL_STATE,
  reducers: {
    startLoader(state) {
      state.isLoading = true;
    },
    stopLoader(state, action) {
      state.isLoading = false;
    },
  },
});

export const { startLoader, stopLoader } = loaderSlice.actions;

export const loaderReducer = loaderSlice.reducer;
