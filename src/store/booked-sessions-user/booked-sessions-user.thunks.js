import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

// This fetches bookings from the current day onwards only
export const fetchBookedSessionsUserFromTodayOnwardsAsync = createAsyncThunk(
  "fetchBookedSessionsUserFromTodayOnwards",
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

      const documentsFromTodayOnwards = documents.filter((doc) => {
        const docDate = new Date(doc.date);
        docDate.setHours(0, 0, 0, 0);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        return docDate >= currentDate;
      });

      return documentsFromTodayOnwards;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Fetches ALL users bookings
export const fetchBookedSessionsUserAllBookingsAsync = createAsyncThunk(
  "fetchBookedSessionsUserAllBookings",
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
