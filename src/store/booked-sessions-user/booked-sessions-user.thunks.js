import { createAsyncThunk } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";

import { standardRateLimit, highRateLimit } from "../../constants/constants";
// This fetches up to the limit of bookings from the constants file above from the current day onwards only.
// see bookedSessionOwnerThunks for explanation of what we're doing here.
export const fetchBookedSessionsUserFromTodayOnwardsAsync = createAsyncThunk(
  "fetchBookedSessionsUserFromTodayOnwards",
  async ({ id, databaseId, bookedSessionsCollectionId }, thunkAPI) => {
    try {
      const queryIndex = "parentsUserId";
      const queryValue = id;

      const fromDate = new Date();
      fromDate.setHours(0, 0, 0, 0);

      const year = fromDate.getFullYear();
      const month = String(fromDate.getMonth() + 1).padStart(2, "0");
      const day = String(fromDate.getDate()).padStart(2, "0");
      const fromDateString = `${year}-${month}-${day}`;

      const getBookingDocuments = await databases.listDocuments(
        databaseId,
        bookedSessionsCollectionId,
        [
          Query.equal(queryIndex, queryValue),
          Query.greaterThanEqual("date", fromDateString),
          Query.orderAsc("date"),
          Query.limit(standardRateLimit),
        ]
      );

      const { documents } = getBookingDocuments;

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchBookedSessionsUserAllBookingsAsync = createAsyncThunk(
  "fetchBookedSessionsUserAllBookings",
  async ({ id, databaseId, bookedSessionsCollectionId }, thunkAPI) => {
    try {
      const queryIndex = "parentsUserId";
      const queryValue = id;

      // see bookedSessionOwnerThunks for explanation of what we're doing here.
      const getBookingDocuments = await databases.listDocuments(
        databaseId,
        bookedSessionsCollectionId,
        [
          Query.equal(queryIndex, queryValue),
          Query.orderAsc("date"),
          Query.limit(highRateLimit),
        ]
      );

      const { documents } = getBookingDocuments;

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
