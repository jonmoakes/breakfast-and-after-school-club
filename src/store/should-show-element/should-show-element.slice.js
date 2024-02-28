import { createSelector, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  shouldShowElement: false,
  shouldShowSecondElement: false,
};

export const shouldShowElementSlice = createSlice({
  name: "shouldShowElement",
  initialState: INITIAL_STATE,
  reducers: {
    hideElement(state) {
      state.shouldShowElement = false;
    },
    toggleShowElement(state) {
      state.shouldShowElement = !state.shouldShowElement;
    },
    hideSecondElement(state) {
      state.shouldShowSecondElement = false;
    },
    toggleShowSecondElement(state) {
      state.shouldShowSecondElement = !state.shouldShowSecondElement;
    },
    resetShouldShowElementState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectShouldShowElementSelectors: createSelector(
      (state) => state.shouldShowElement,
      (state) => state.shouldShowSecondElement,
      (shouldShowElement, shouldShowSecondElement) => {
        return {
          shouldShowElement,
          shouldShowSecondElement,
        };
      }
    ),
  },
});

export const {
  hideElement,
  toggleShowElement,
  hideSecondElement,
  toggleShowSecondElement,
  resetShouldShowElementState,
} = shouldShowElementSlice.actions;
export const { selectShouldShowElementSelectors } =
  shouldShowElementSlice.selectors;

export const shouldShowElementReducer = shouldShowElementSlice.reducer;
