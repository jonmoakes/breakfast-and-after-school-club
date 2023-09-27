import { createSelector } from "reselect";

const selectDeleteChildInfoReducer = (state) => state.deleteChildInfo;

export const selectIsLoading = createSelector(
  [selectDeleteChildInfoReducer],
  (deleteChildInfoSlice) => deleteChildInfoSlice.isLoading
);

export const selectDeleteChildInfo = createSelector(
  [selectDeleteChildInfoReducer],
  (deleteChildInfoSlice) => deleteChildInfoSlice.childToDeleteInfo[0]
);

export const selectResult = createSelector(
  [selectDeleteChildInfoReducer],
  (deleteChildInfoSlice) => deleteChildInfoSlice.result
);

export const selectError = createSelector(
  [selectDeleteChildInfoReducer],
  (deleteChildInfoSlice) => deleteChildInfoSlice.error
);
