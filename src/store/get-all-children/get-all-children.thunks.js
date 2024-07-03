import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsInACollection } from "../../utils/appwrite/appwrite-functions";
import { standardRateLimit } from "../../constants/constants";

export const getAllChildrenAsync = createAsyncThunk(
  "getAllChildrenInChildrenCollection",
  async ({ databaseId, collectionId }, thunkAPI) => {
    try {
      const getChildrenDocuments = await listDocumentsInACollection(
        databaseId,
        collectionId,
        standardRateLimit
      );

      const { documents, total } = getChildrenDocuments;
      if (!total) return;

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
