import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  shouldShowElement: false,
};

export const shouldShowElementSlice = createSlice({
  name: "shouldShowElement",
  initialState: INITIAL_STATE,
  reducers: {
    showElement(state) {
      state.shouldShowElement = true;
    },
    hideElement(state) {
      state.shouldShowElement = false;
    },
    toggleShowElement(state) {
      state.shouldShowElement = !state.shouldShowElement;
    },
  },
});

export const { showElement, hideElement, toggleShowElement } =
  shouldShowElementSlice.actions;

export const shouldShowElementReducer = shouldShowElementSlice.reducer;
