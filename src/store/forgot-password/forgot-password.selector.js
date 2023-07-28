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

export const selectForgotPasswordResultError = createSelector(
  [selectForgotPasswordReducer],
  (forgotPasswordSlice) => forgotPasswordSlice.forgotPasswordResultError
);
