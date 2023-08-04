import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  shouldShowElement: false,
  shouldShowSecondElement: false,
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
    showSecondElement(state) {
      state.shouldShowSecondElement = true;
    },
    hideSecondElement(state) {
      state.shouldShowSecondElement = false;
    },
    toggleShowSecondElement(state) {
      state.shouldShowSecondElement = !state.shouldShowSecondElement;
    },
    clearShouldShowElementsState(state) {
      state.shouldShowElement = false;
      state.shouldShowSecondElement = false;
    },
  },
});

export const {
  showElement,
  hideElement,
  toggleShowElement,
  showSecondElement,
  hideSecondElement,
  toggleShowSecondElement,
  clearShouldShowElementsState,
} = shouldShowElementSlice.actions;

export const shouldShowElementReducer = shouldShowElementSlice.reducer;
