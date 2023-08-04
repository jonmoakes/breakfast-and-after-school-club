import { createSelector } from "reselect";

const selectShouldShowElementReducer = (state) => state.shouldShowElement;

export const selectShouldShowElement = createSelector(
  [selectShouldShowElementReducer],
  (shouldShowElementSlice) => shouldShowElementSlice.shouldShowElement
);

export const selectShouldShowSecondElement = createSelector(
  [selectShouldShowElementReducer],
  (shouldShowElementSlice) => shouldShowElementSlice.shouldShowSecondElement
);
