import { createSelector } from "reselect";

const selectSendEmailReducer = (state) => state.sendEmail;

export const selectSendEmailIsLoading = createSelector(
  [selectSendEmailReducer],
  (sendEmailSlice) => sendEmailSlice.isLoading
);

export const selectSendEmailStatusCode = createSelector(
  [selectSendEmailReducer],
  (sendEmailSlice) => sendEmailSlice.statusCode
);

export const selectSendEmailError = createSelector(
  [selectSendEmailReducer],
  (sendEmailSlice) => sendEmailSlice.error
);
