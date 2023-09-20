import { createSelector } from "reselect";

const selectAddChildInfoReducer = (state) => state.addChildInfo;
export const selectIsLoading = createSelector(
  [selectAddChildInfoReducer],
  (addChildInfoSlice) => addChildInfoSlice.isLoading
);

export const selectAddChildInfo = createSelector(
  [selectAddChildInfoReducer],
  (addChildInfoSlice) => addChildInfoSlice.childInfo
);

export const selectResult = createSelector(
  [selectAddChildInfoReducer],
  (addChildInfoSlice) => addChildInfoSlice.result
);

export const selectError = createSelector(
  [selectAddChildInfoReducer],
  (addChildInfoSlice) => addChildInfoSlice.error
);
