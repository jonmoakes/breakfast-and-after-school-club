import { createSelector } from "reselect";

const selectForgotPasswordReducer = (state) => state.forgotPassword;

export const selectForgotPasswordEmail = createSelector(
  [selectForgotPasswordReducer],
  (forgotPasswordSlice) => forgotPasswordSlice.forgotPasswordEmail
);

export const selectNewPasswordDetails = createSelector(
  [selectForgotPasswordReducer],
  (forgotPasswordSlice) => forgotPasswordSlice.newPasswordDetails
);

export const selectForgotPasswordRequestError = createSelector(
  [selectForgotPasswordReducer],
  (forgotPasswordSlice) => forgotPasswordSlice.error
);

export const selectForgotPasswordIsLoading = createSelector(
  [selectForgotPasswordReducer],
  (forgotPasswordSlice) => forgotPasswordSlice.isLoading
);

export const selectForgotPasswordRequestResult = createSelector(
  [selectForgotPasswordReducer],
  (forgotPasswordSlice) => forgotPasswordSlice.requestResult
);
