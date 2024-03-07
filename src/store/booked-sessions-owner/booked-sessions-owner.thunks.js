import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsInACollection } from "../../utils/appwrite/appwrite-functions";

export const fetchBookedSessionsOwnerAsync = createAsyncThunk(
  "fetchBookedSessionsOwner",
  async ({ databaseId, collectionId }, thunkAPI) => {
    try {
      const getBookingDocuments = await listDocumentsInACollection(
        databaseId,
        collectionId
      );

      const { documents, total } = getBookingDocuments;
      if (!total) return;
      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
