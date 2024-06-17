import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  listDocumentsInACollection,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

// This fetches bookings from the current day onwards only
export const fetchBookedSessionsOwnerFromTodayOnwardsAsync = createAsyncThunk(
  "fetchBookedSessionsOwnerFromTodayOnwards",
  async ({ databaseId, collectionId }, thunkAPI) => {
    try {
      const getBookingDocuments = await listDocumentsInACollection(
        databaseId,
        collectionId
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

// fetches ALL bookings
export const fetchBookedSessionsOwnerAllBookingsAsync = createAsyncThunk(
  "fetchBookedSessionsOwnerAllBookings",
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
