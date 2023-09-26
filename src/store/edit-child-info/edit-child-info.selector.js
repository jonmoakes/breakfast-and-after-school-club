import { createSelector } from "reselect";

const selectEditChildInfoReducer = (state) => state.editChildInfo;

export const selectIsLoading = createSelector(
  [selectEditChildInfoReducer],
  (editChildInfoSlice) => editChildInfoSlice.isLoading
);

export const selectEditChildInfo = createSelector(
  [selectEditChildInfoReducer],
  (editChildInfoSlice) => editChildInfoSlice.childToEditInfo[0]
);

export const selectResult = createSelector(
  [selectEditChildInfoReducer],
  (editChildInfoSlice) => editChildInfoSlice.result
);

export const selectError = createSelector(
  [selectEditChildInfoReducer],
  (editChildInfoSlice) => editChildInfoSlice.error
);
