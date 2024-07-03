import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  listDocumentsInACollection,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";
import { databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";

export const fetchBookedSessionsOwnerFromTodayOnwardsAsync = createAsyncThunk(
  "fetchBookedSessionsOwnerFromTodayOnwards",
  async ({ databaseId, collectionId }, thunkAPI) => {
    try {
      // Get today's date in local time zone
      const fromDate = new Date();
      fromDate.setHours(0, 0, 0, 0);

      // Manually construct the date string in yyyy-mm-dd format in local time zone
      const year = fromDate.getFullYear();
      const month = String(fromDate.getMonth() + 1).padStart(2, "0");
      const day = String(fromDate.getDate()).padStart(2, "0");
      const fromDateString = `${year}-${month}-${day}`;

      // sorting Asc here - ie closest date to current date first as if there are more documents than the limit,
      // we want to show the closest dates first as the user probably doesn't mind as much about bookings so far in advance.
      //Add note in table help in table to alert user to this.
      // We sort them furthest date away first in the table itself though.
      const getBookingDocuments = await databases.listDocuments(
        databaseId,
        collectionId,
        [
          Query.greaterThanEqual("date", fromDateString),
          Query.orderAsc("date"),
          Query.limit(500),
        ]
      );

      const { documents } = getBookingDocuments;

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// fetches max 1000 bookings. // warn user 1000 bookings max and to contact if they need more.
export const fetchBookedSessionsOwnerAllBookingsAsync = createAsyncThunk(
  "fetchBookedSessionsOwnerAllBookings",
  async ({ databaseId, collectionId }, thunkAPI) => {
    try {
      const getBookingDocuments = await listDocumentsInACollection(
        databaseId,
        collectionId,
        1000
      );

      const { documents, total } = getBookingDocuments;
      if (!total) return;
      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateRegistrationStatusAsync = createAsyncThunk(
  "updateRegistrationStatus",
  async (
    { attributeToUpdate, signInStatus, databaseId, collectionId, documentId },
    thunkAPI
  ) => {
    try {
      const dataToUpdate = {
        [attributeToUpdate]: signInStatus,
      };
      await manageDatabaseDocument(
        "update",
        databaseId,
        collectionId,
        documentId,
        dataToUpdate
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
