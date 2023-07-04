import { createSelector } from "reselect";

const selectSignUpFormReducer = (state) => state.signUpForm;

export const selectSignUpFormDetails = createSelector(
  [selectSignUpFormReducer],
  (signUpFormSlice) => signUpFormSlice.signUpFormDetails
);
