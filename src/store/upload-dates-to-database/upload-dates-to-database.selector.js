import { createSelector } from "reselect";

const selectUploadDatesToDatabaseReducer = (state) =>
  state.uploadDatesToDatabase;

export const selectUploadDatesToDatabaseIsLoading = createSelector(
  [selectUploadDatesToDatabaseReducer],
  (uploadDatesToDatabaseSlice) => uploadDatesToDatabaseSlice.isLoading
);

export const selectUploadDatesToDatabaseSuccessMessage = createSelector(
  [selectUploadDatesToDatabaseReducer],
  (uploadDatesToDatabaseSlice) => uploadDatesToDatabaseSlice.successMessage
);

export const selectUploadDatesToDatabaseErrorMessage = createSelector(
  [selectUploadDatesToDatabaseReducer],
  (uploadDatesToDatabaseSlice) => uploadDatesToDatabaseSlice.error
);
