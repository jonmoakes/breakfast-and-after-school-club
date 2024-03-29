import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";
import { ID } from "appwrite";

import { datesUploadedToDatabaseSuccessMessage } from "../../strings/successes/successes-strings";

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
  uploadDatesToDatabaseIsLoading: false,
  uploadDatesToDatabaseSuccessMessage: "",
  uploadDatesToDatabaseError: null,
};

const uploadDatesToDatabaseSlice = createSlice({
  name: "uploadDatesToDatabase",
  initialState,
  reducers: {
    resetUploadDatesToDatabaseSuccessMessage(state) {
      state.uploadDatesToDatabaseSuccessMessage = "";
    },
    resetUploadDatesToDatabaseError(state) {
      state.uploadDatesToDatabaseError = "";
    },
  },
  selectors: {
    selectUploadDatesToDatabaseSelectors: createSelector(
      (state) => state.uploadDatesToDatabaseIsLoading,
      (state) => state.uploadDatesToDatabaseSuccessMessage,
      (state) => state.uploadDatesToDatabaseError,
      (
        uploadDatesToDatabaseIsLoading,
        uploadDatesToDatabaseSuccessMessage,
        uploadDatesToDatabaseError
      ) => {
        return {
          uploadDatesToDatabaseIsLoading,
          uploadDatesToDatabaseSuccessMessage,
          uploadDatesToDatabaseError,
        };
      }
    ),
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

export const {
  resetUploadDatesToDatabaseSuccessMessage,
  resetUploadDatesToDatabaseError,
} = uploadDatesToDatabaseSlice.actions;
export const { selectUploadDatesToDatabaseSelectors } =
  uploadDatesToDatabaseSlice.selectors;

export const uploadDatesToDatabaseReducer = uploadDatesToDatabaseSlice.reducer;
