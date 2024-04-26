import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";
import { ID } from "appwrite";

export const updateBookingClosingTimesAsync = createAsyncThunk(
  "updateBookingClosingTimes",
  async (
    { attributeToUpdate, newTime, databaseId, collectionId, documentId },
    thunkAPI
  ) => {
    try {
      const dataToUpdate = {
        [attributeToUpdate]: newTime,
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

export const updateSessionTimesAsync = createAsyncThunk(
  "updateSessionTimes",
  async (
    { attributeToUpdate, newTime, databaseId, collectionId, documentId },
    thunkAPI
  ) => {
    try {
      const dataToUpdate = {
        [attributeToUpdate]: newTime,
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

export const updateSessionPriceAsync = createAsyncThunk(
  "updateSessionPrice",
  async (
    { attributeToUpdate, newPrice, databaseId, collectionId, documentId },
    thunkAPI
  ) => {
    //db expects a double for its attribute
    const newPriceAsDouble = parseFloat(newPrice);
    try {
      const dataToUpdate = {
        [attributeToUpdate]: newPriceAsDouble,
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

export const updateUsersBalanceAfterErrorEmailAsync = createAsyncThunk(
  "updateUsersBalanceAfterErrorEmail",
  async ({ documentId, databaseId, collectionId, refundPrice }, thunkAPI) => {
    try {
      const queryIndex = "$id";
      const queryValue = documentId;

      const getUsersDocument = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
      );

      const { documents, total } = getUsersDocument;

      if (!total) {
        throw new Error("no document found");
      }

      const { walletBalance } = documents[0];
      //db expects a double for its attribute
      const refundPriceAsDoubleInPence = parseFloat(refundPrice);
      const dataToUpdate = {
        walletBalance: walletBalance + refundPriceAsDoubleInPence,
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

export const manuallyAddBookingDataAfterErrorAsync = createAsyncThunk(
  "manuallyAddBookingDataAfterError",
  async ({ databaseId, collectionId, bookingData }, thunkAPI) => {
    try {
      const {
        date,
        sessionType,
        childrenInBooking,
        parentName,
        parentPhoneNumber,
        parentsUserId,
        parentEmail,
      } = bookingData;

      const dataToUpdate = {
        date,
        sessionType,
        childrensName: childrenInBooking,
        parentName,
        parentPhoneNumber,
        parentsUserId,
        parentEmail,
      };

      await manageDatabaseDocument(
        "create",
        databaseId,
        collectionId,
        ID.unique(),
        dataToUpdate
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
