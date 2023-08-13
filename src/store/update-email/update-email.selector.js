import { createSelector } from "reselect";

const selectUpdateEmailReducer = (state) => state.updateEmail;

export const selectUpdateEmailIsLoading = createSelector(
  [selectUpdateEmailReducer],
  (updateEmailSlice) => updateEmailSlice.isLoading
);

export const selectUpdateEmailDetails = createSelector(
  [selectUpdateEmailReducer],
  (updateEmailSlice) => updateEmailSlice.updateEmailDetails
);

export const selectUpdateEmailResult = createSelector(
  [selectUpdateEmailReducer],
  (updateEmailSlice) => updateEmailSlice.result
);

export const selectUpdateEmailError = createSelector(
  [selectUpdateEmailReducer],
  (updateEmailSlice) => updateEmailSlice.error
);
