import { createAsyncThunk } from "@reduxjs/toolkit";
import { ID } from "appwrite";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

export const addChildInfoAsync = createAsyncThunk(
  "addChildInfo",
  async ({ childInfo, name, email, databaseId, collectionId }, thunkAPI) => {
    try {
      const {
        childName,
        age,
        medicalInfo,
        dietryRequirements,
        additionalInfo,
      } = childInfo;

      const documentId = ID.unique();

      const dataToAdd = {
        parentName: name,
        parentEmail: email,
        childName,
        age,
        medicalInfo,
        dietryRequirements,
        additionalInfo,
      };
      await manageDatabaseDocument(
        "create",
        databaseId,
        collectionId,
        documentId,
        dataToAdd
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
