import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

export const getUsersChildrenAsync = createAsyncThunk(
  "getChildren",
  async ({ id, databaseId, collectionId }, thunkAPI) => {
    try {
      const queryIndex = "parentsUserId";
      const queryValue = id;

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
