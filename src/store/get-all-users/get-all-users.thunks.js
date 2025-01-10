import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsInACollection } from "../../utils/appwrite/appwrite-functions";

import { smallRateLimit } from "../../constants/constants";

export const getAllUsersAsync = createAsyncThunk(
  "getAllUsersInUsersCollection",
  async ({ databaseId, collectionId, id, appAdminId }, thunkAPI) => {
    try {
      const getUsersDocuments = await listDocumentsInACollection(
        databaseId,
        collectionId,
        smallRateLimit
      );

      const { documents, total } = getUsersDocuments;
      if (!total) return;

      const documentsWithoutAppOwner = documents.filter(
        (doc) => doc.id !== id && doc.id !== appAdminId
      );

      return documentsWithoutAppOwner;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
