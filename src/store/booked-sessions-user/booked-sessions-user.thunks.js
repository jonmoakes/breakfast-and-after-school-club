import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

export const fetchBookedSessionsUserAsync = createAsyncThunk(
  "fetchBookedSessionsUser",
  async ({ id, databaseId, bookedSessionsCollectionId }, thunkAPI) => {
    try {
      const queryIndex = "parentsUserId";
      const queryValue = id;

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
