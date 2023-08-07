import { createSelector } from "reselect";

const selectForgotPasswordResultReducer = (state) => state.forgotPasswordResult;

export const selectNewPasswordDetails = createSelector(
  [selectForgotPasswordResultReducer],
  (forgotPasswordResultSlice) => forgotPasswordResultSlice.newPasswordDetails
);

export const selectForgotPasswordResultError = createSelector(
  [selectForgotPasswordResultReducer],
  (forgotPasswordResultSlice) => forgotPasswordResultSlice.error
);

export const selectForgotPasswordResultIsLoading = createSelector(
  [selectForgotPasswordResultReducer],
  (forgotPasswordResultSlice) => forgotPasswordResultSlice.isLoading
);

export const selectForgotPasswordResult = createSelector(
  [selectForgotPasswordResultReducer],
  (forgotPasswordResultSlice) => forgotPasswordResultSlice.result
);
