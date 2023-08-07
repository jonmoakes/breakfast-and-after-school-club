import { createSelector } from "reselect";

const selectForgotPasswordRequestReducer = (state) =>
  state.forgotPasswordRequest;

export const selectForgotPasswordRequestEmail = createSelector(
  [selectForgotPasswordRequestReducer],
  (forgotPasswordRequestSlice) =>
    forgotPasswordRequestSlice.forgotPasswordRequestEmail
);

export const selectForgotPasswordRequestIsLoading = createSelector(
  [selectForgotPasswordRequestReducer],
  (forgotPasswordRequestSlice) => forgotPasswordRequestSlice.isLoading
);

export const selectForgotPasswordRequestResult = createSelector(
  [selectForgotPasswordRequestReducer],
  (forgotPasswordRequestSlice) => forgotPasswordRequestSlice.requestResult
);

export const selectForgotPasswordRequestError = createSelector(
  [selectForgotPasswordRequestReducer],
  (forgotPasswordRequestSlice) => forgotPasswordRequestSlice.error
);
