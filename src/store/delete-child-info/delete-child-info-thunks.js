import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

export const deleteChildInfoAsync = createAsyncThunk(
  "deleteChild",
  async ({ childToDeleteInfo, databaseId, collectionId }, thunkAPI) => {
    try {
      const { $id } = childToDeleteInfo;
      const documentId = $id;
      const queryIndex = "$id";
      const queryValue = $id;
      const dataToDelete = childToDeleteInfo;

      const getChildrenDocuments = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
      );

      const { total } = getChildrenDocuments;

      if (!total) return;

      await manageDatabaseDocument(
        "delete",
        databaseId,
        collectionId,
        documentId,
        dataToDelete
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
