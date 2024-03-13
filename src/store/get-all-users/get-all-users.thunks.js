import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsInACollection } from "../../utils/appwrite/appwrite-functions";

export const getAllUsersAsync = createAsyncThunk(
  "getAllUsersInUsersCollection",
  async ({ databaseId, collectionId, id }, thunkAPI) => {
    try {
      const getUsersDocuments = await listDocumentsInACollection(
        databaseId,
        collectionId
      );

      const { documents, total } = getUsersDocuments;
      if (!total) return;

      const documentsWithoutAppOwner = documents.filter((doc) => doc.id !== id);

      return documentsWithoutAppOwner;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
