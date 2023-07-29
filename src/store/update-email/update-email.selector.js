import { createSelector } from "reselect";

const selectUpdateEmailReducer = (state) => state.updateEmail;

export const selectUpdateEmailDetails = createSelector(
  [selectUpdateEmailReducer],
  (updateEmailSlice) => updateEmailSlice.updateEmailDetails
);
