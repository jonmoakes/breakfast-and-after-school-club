import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsInACollection } from "../../utils/appwrite/appwrite-functions";

export const getAllChildrenAsync = createAsyncThunk(
  "getAllChildrenInChildrenCollection",
  async ({ databaseId, collectionId }, thunkAPI) => {
    try {
      throw new Error("argghh");
      const getChildrenDocuments = await listDocumentsInACollection(
        databaseId,
        collectionId
      );

      const { documents, total } = getChildrenDocuments;
      if (!total) return;

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
