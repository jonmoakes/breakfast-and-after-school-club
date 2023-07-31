import { createSelector } from "reselect";

const selectUpdatePasswordReducer = (state) => state.updatePassword;

export const selectUpdatePasswordDetails = createSelector(
  [selectUpdatePasswordReducer],
  (updatePasswordSlice) => updatePasswordSlice.updatePasswordDetails
);
