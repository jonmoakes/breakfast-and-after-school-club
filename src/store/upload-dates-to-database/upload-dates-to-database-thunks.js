import { createAsyncThunk } from "@reduxjs/toolkit";
import { ID } from "appwrite";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

// FOR USE ONLY BY SOLARIS APPS
export const uploadDatesToDatabaseAsync = createAsyncThunk(
  "uploadDatesToDatabase",
  async ({ datesList }, thunkAPI) => {
    try {
      const uploadDates = [];
      //set  databaseId and collectionId manually here

      // const databaseId =
      // const collectionId =

      for (const date of datesList) {
        const result = await manageDatabaseDocument(
          "create",
          // databaseId,
          // collectionId,
          ID.unique(),
          date
        );

        uploadDates.push(result);
      }
      return uploadDates;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
