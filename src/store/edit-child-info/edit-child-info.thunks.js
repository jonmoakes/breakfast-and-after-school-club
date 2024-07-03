import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

export const editChildInfoAsync = createAsyncThunk(
  "editChildInfo",
  async ({ $id, databaseId, collectionId, updatedChildInfo }, thunkAPI) => {
    try {
      const queryIndex = "$id";
      const queryValue = $id;
      const documentId = $id;
      const dataToUpdate = updatedChildInfo;

      const getChildrenDocuments = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue,
        false,
        null
      );

      const { total } = getChildrenDocuments;

      if (!total) return;

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
