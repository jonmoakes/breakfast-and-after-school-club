import { createAsyncThunk } from "@reduxjs/toolkit";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

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
