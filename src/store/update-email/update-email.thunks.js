import { createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

export const updateEmailAsync = createAsyncThunk(
  "updateEmail",
  async ({ id, newEmail, password, databaseId, collectionId }, thunkAPI) => {
    try {
      const documentId = id;
      const dataToUpdate = { email: newEmail };
      await account.updateEmail(newEmail, password);
      await manageDatabaseDocument(
        "update",
        databaseId,
        collectionId,
        documentId,
        dataToUpdate
      );
      await account.deleteSessions();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
