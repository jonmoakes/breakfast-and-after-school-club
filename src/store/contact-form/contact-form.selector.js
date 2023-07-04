import { createSelector } from "reselect";

const selectContactFormReducer = (state) => state.contactForm;

export const selectContactFormDetails = createSelector(
  [selectContactFormReducer],
  (contactFormSlice) => contactFormSlice.contactFormDetails
);
