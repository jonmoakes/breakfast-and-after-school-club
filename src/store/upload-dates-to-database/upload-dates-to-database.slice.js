import { createSelector, createSlice } from "@reduxjs/toolkit";

import { uploadDatesToDatabaseAsync } from "./upload-dates-to-database-thunks";

const initialState = {
  uploadDatesToDatabaseIsLoading: false,
  uploadDatesToDatabaseResult: "",
  uploadDatesToDatabaseError: null,
};

const uploadDatesToDatabaseSlice = createSlice({
  name: "uploadDatesToDatabase",
  initialState,
  reducers: {
    resetUploadDatesToDatabaseResult(state) {
      state.uploadDatesToDatabaseResult = "";
    },
    resetUploadDatesToDatabaseError(state) {
      state.uploadDatesToDatabaseError = null;
    },
  },
  selectors: {
    selectUploadDatesToDatabaseSelectors: createSelector(
      (state) => state.uploadDatesToDatabaseIsLoading,
      (state) => state.uploadDatesToDatabaseResult,
      (state) => state.uploadDatesToDatabaseError,
      (
        uploadDatesToDatabaseIsLoading,
        uploadDatesToDatabaseResult,
        uploadDatesToDatabaseError
      ) => {
        return {
          uploadDatesToDatabaseIsLoading,
          uploadDatesToDatabaseResult,
          uploadDatesToDatabaseError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadDatesToDatabaseAsync.pending, (state) => {
        state.uploadDatesToDatabaseIsLoading = true;
      })
      .addCase(uploadDatesToDatabaseAsync.fulfilled, (state) => {
        state.uploadDatesToDatabaseIsLoading = false;
        state.uploadDatesToDatabaseResult = "fulfilled";
        state.uploadDatesToDatabaseError = null;
      })
      .addCase(uploadDatesToDatabaseAsync.rejected, (state, action) => {
        state.uploadDatesToDatabaseIsLoading = false;
        state.uploadDatesToDatabaseResult = "failed";
        state.uploadDatesToDatabaseError = action.payload;
      });
  },
});

export const {
  resetUploadDatesToDatabaseResult,
  resetUploadDatesToDatabaseError,
} = uploadDatesToDatabaseSlice.actions;
export const { selectUploadDatesToDatabaseSelectors } =
  uploadDatesToDatabaseSlice.selectors;

export const uploadDatesToDatabaseReducer = uploadDatesToDatabaseSlice.reducer;
