import { createSelector } from "reselect";

const selectCloseAccountReducer = (state) => state.closeAccount;

export const selectCloseAccountIsLoading = createSelector(
  [selectCloseAccountReducer],
  (closeAccountSlice) => closeAccountSlice.isLoading
);

export const selectCloseAccountSuccessMessage = createSelector(
  [selectCloseAccountReducer],
  (closeAccountSlice) => closeAccountSlice.successMessage
);

export const selectCloseAccountError = createSelector(
  [selectCloseAccountReducer],
  (closeAccountSlice) => closeAccountSlice.error
);
