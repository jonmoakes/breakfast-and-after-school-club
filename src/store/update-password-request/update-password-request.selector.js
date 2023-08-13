import { createSelector } from "reselect";

const selectUpdatePasswordRequestReducer = (state) =>
  state.updatePasswordRequest;

export const selectUpdatePasswordRequestIsLoading = createSelector(
  [selectUpdatePasswordRequestReducer],
  (updatePasswordRequestSlice) => updatePasswordRequestSlice.isLoading
);

export const selectUpdatePasswordRequestResult = createSelector(
  [selectUpdatePasswordRequestReducer],
  (updatePasswordRequestSlice) => updatePasswordRequestSlice.result
);

export const selectUpdatePasswordRequestError = createSelector(
  [selectUpdatePasswordRequestReducer],
  (updatePasswordRequestSlice) => updatePasswordRequestSlice.error
);
