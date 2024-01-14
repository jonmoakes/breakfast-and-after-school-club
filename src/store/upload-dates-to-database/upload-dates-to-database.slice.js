import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";
import { ID } from "appwrite";

import { datesUploadedToDatabaseSuccessMessage } from "../../strings/strings";

export const uploadDatesToDatabaseAsync = createAsyncThunk(
  "uploadDatesToDatabase",
  async ({ datesList, databaseId, collectionId }, thunkAPI) => {
    try {
      const uploadDates = [];

      for (const date of datesList) {
        const result = await databases.createDocument(
          databaseId,
          collectionId,
          ID.unique(),
          date
        );
        uploadDates.push(result);
      }
      return uploadDates;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isLoading: false,
  successMessage: "",
  error: "",
};

const uploadDatesToDatabaseSlice = createSlice({
  name: "uploadDatesToDatabase",
  initialState,
  reducers: {
    resetSuccessMessage(state) {
      state.successMessage = "";
    },
    resetErrorMessage(state) {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadDatesToDatabaseAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadDatesToDatabaseAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.successMessage = datesUploadedToDatabaseSuccessMessage;
        state.error = "";
      })
      .addCase(uploadDatesToDatabaseAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.successMessage = "";
        state.error = action.payload;
      });
  },
});

export const { resetSuccessMessage, resetErrorMessage } =
  uploadDatesToDatabaseSlice.actions;

export const uploadDatesToDatabaseReducer = uploadDatesToDatabaseSlice.reducer;
