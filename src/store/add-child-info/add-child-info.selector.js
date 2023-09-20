import { createSelector } from "reselect";

const selectAddChildInfoReducer = (state) => state.addChildInfo;

export const selectAddChildInfo = createSelector(
  [selectAddChildInfoReducer],
  (addChildInfoSlice) => addChildInfoSlice.childInfo
);
