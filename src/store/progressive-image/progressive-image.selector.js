import { createSelector } from "reselect";

const selectProgressiveImageReducer = (state) => state.progressiveImage;

export const selectProgressiveImageSrc = createSelector(
  [selectProgressiveImageReducer],
  (progressiveImageSlice) => progressiveImageSlice.imgSrc
);
