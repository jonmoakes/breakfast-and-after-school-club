import { createSelector } from "reselect";

const selectPasswordIsVisibleReducer = (state) => state.passwordIsVisible;

export const selectSignInPasswordIsVisible = createSelector(
  [selectPasswordIsVisibleReducer],
  (passwordIsVisibleSlice) => passwordIsVisibleSlice.signInPasswordIsVisible
);

export const selectSignUpPasswordIsVisible = createSelector(
  [selectPasswordIsVisibleReducer],
  (passwordIsVisibleSlice) => passwordIsVisibleSlice.signUpPasswordIsVisible
);

export const selectSignUpConfirmPasswordIsVisible = createSelector(
  [selectPasswordIsVisibleReducer],
  (passwordIsVisibleSlice) =>
    passwordIsVisibleSlice.signUpConfirmPasswordIsVisible
);
