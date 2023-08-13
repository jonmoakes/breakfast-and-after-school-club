import { createSelector } from "reselect";

const selectUpdatePasswordResultReducer = (state) => state.updatePasswordResult;

export const selectUpdatePasswordResultIsLoading = createSelector(
  [selectUpdatePasswordResultReducer],
  (updatePasswordResultSlice) => updatePasswordResultSlice.isLoading
);

export const selectUpdatePasswordDetails = createSelector(
  [selectUpdatePasswordResultReducer],
  (updatePasswordResultSlice) => updatePasswordResultSlice.updatePasswordDetails
);

export const selectUpdatePasswordResult = createSelector(
  [selectUpdatePasswordResultReducer],
  (updatePasswordResultSlice) => updatePasswordResultSlice.result
);

export const selectUpdatePasswordResultError = createSelector(
  [selectUpdatePasswordResultReducer],
  (updatePasswordResultSlice) => updatePasswordResultSlice.error
);
