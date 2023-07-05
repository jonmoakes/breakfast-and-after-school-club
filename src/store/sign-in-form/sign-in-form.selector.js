import { createSelector } from "reselect";

const selectSignInFormReducer = (state) => state.signInForm;

export const selectSignInFormDetails = createSelector(
  [selectSignInFormReducer],
  (signInFormSlice) => signInFormSlice.signInFormDetails
);
