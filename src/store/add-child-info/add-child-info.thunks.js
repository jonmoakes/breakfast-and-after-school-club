import { createAsyncThunk } from "@reduxjs/toolkit";
import { ID } from "appwrite";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

export const addChildInfoAsync = createAsyncThunk(
  "addChildInfo",
  async ({ childInfo, id, name, databaseId, collectionId }, thunkAPI) => {
    try {
      const {
        childName,
        age,
        consent,
        medicalInfo,
        dietryRequirements,
        additionalInfo,
      } = childInfo;

      const documentId = ID.unique();

      const dataToAdd = {
        parentsUserId: id,
        childName,
        age,
        consent,
        medicalInfo,
        dietryRequirements,
        additionalInfo,
        parentName: name,
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
