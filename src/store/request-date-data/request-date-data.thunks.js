import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  listDocumentsByQueryOrSearch,
  listDocumentsInACollection,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

export const requestDateDataAsync = createAsyncThunk(
  "requestDateData",
  async (
    { databaseId, termDatesCollectionId: collectionId, chosenDate },
    thunkAPI
  ) => {
    try {
      const queryIndex = "date";
      const queryValue = chosenDate;

      const getChosenDateDocument = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
      );

      const { documents } = getChosenDateDocument;
      if (!documents.length) {
        throw new Error("is not available");
      } else {
        const { $id, date, morningSessionSpaces, afternoonSessionSpaces } =
          documents[0];

        const requestedDateData = {
          $id,
          date,
          morningSessionSpaces,
          afternoonSessionSpaces,
        };
        return requestedDateData;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestEarlyFinishDatesAsync = createAsyncThunk(
  "requestEarlyFinishDates",
  async (
    { databaseId, earlyFinishDatesCollectionId: collectionId },
    thunkAPI
  ) => {
    try {
      const getEarlyFinishDates = await listDocumentsInACollection(
        databaseId,
        collectionId
      );

      const { documents, total } = getEarlyFinishDates;
      if (!total) return;

      const earlyFinishDatesAndTimes = documents.map((doc) => ({
        date: doc.date,
        finishTime: doc.finishTime,
      }));
      return earlyFinishDatesAndTimes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestBookingClosingTimesAsync = createAsyncThunk(
  "requestBookingClosingTimes",
  async (
    {
      databaseId,
      bookingClosingTimesCollectionId: collectionId,
      bookingClosingTimesDocumentId: documentId,
    },
    thunkAPI
  ) => {
    try {
      const getBookingClosingTimes = await manageDatabaseDocument(
        "get",
        databaseId,
        collectionId,
        documentId
      );

      const { morningSessionClosingTime, afternoonSessionClosingTime } =
        getBookingClosingTimes;

      return {
        morningSessionClosingTime,
        afternoonSessionClosingTime,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestSessionTimesAsync = createAsyncThunk(
  "requestSessionTimes",
  async (
    {
      databaseId,
      sessionTimesCollectionId: collectionId,
      sessionTimesDocumentId: documentId,
    },
    thunkAPI
  ) => {
    try {
      const getSessionTimes = await manageDatabaseDocument(
        "get",
        databaseId,
        collectionId,
        documentId
      );

      const {
        morningSessionTime,
        afternoonShortSessionTime,
        afternoonLongSessionTime,
      } = getSessionTimes;

      return {
        morningSessionTime,
        afternoonShortSessionTime,
        afternoonLongSessionTime,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
