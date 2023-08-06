import { createSelector } from "reselect";

const selectContactFormReducer = (state) => state.contactForm;

export const selectContactFormDetails = createSelector(
  [selectContactFormReducer],
  (contactFormSlice) => contactFormSlice.contactFormDetails
);

export const selectSendMessageIsLoading = createSelector(
  [selectContactFormReducer],
  (contactFormSlice) => contactFormSlice.isLoading
);

export const selectSendMessageResponseStatus = createSelector(
  [selectContactFormReducer],
  (contactFormSlice) => contactFormSlice.responseStatus
);

export const selectSendMessageError = createSelector(
  [selectContactFormReducer],
  (contactFormSlice) => contactFormSlice.error
);
