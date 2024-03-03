import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

export const fetchBookedSessionsUserAsync = createAsyncThunk(
  "fetchBookedSessionsUser",
  async ({ email, databaseId, bookedSessionsCollectionId }, thunkAPI) => {
    try {
      const queryIndex = "parentEmail";
      const queryValue = email;

      const collectionId = bookedSessionsCollectionId;

      const getBookingDocuments = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
      );

      const { documents, total } = getBookingDocuments;
      if (!total) return;

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
