import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

export const getUsersChildrenAsync = createAsyncThunk(
  "getChildren",
  async ({ email, databaseId, collectionId }, thunkAPI) => {
    try {
      const queryIndex = "parentEmail";
      const queryValue = email;

      const getChildrenDocuments = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
      );

      const { documents, total } = getChildrenDocuments;
      if (!total) return;

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
