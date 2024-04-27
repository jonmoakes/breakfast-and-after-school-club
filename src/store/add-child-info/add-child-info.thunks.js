import { createAsyncThunk } from "@reduxjs/toolkit";
import { ID } from "appwrite";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

export const addChildInfoAsync = createAsyncThunk(
  "addChildInfo",
  async (
    { childInfo, id, name, email, phoneNumber, databaseId, collectionId },
    thunkAPI
  ) => {
    try {
      const {
        childName,
        age,
        consent,
        medicalInfo,
        dietryRequirements,
        additionalInfo,
      } = childInfo;

      const ageAsNumber = Number(age);
      const documentId = ID.unique();

      const dataToAdd = {
        parentsUserId: id,
        childName: childName.toLowerCase(),
        age: ageAsNumber,
        consent,
        medicalInfo,
        dietryRequirements,
        additionalInfo,
        parentName: name,
        parentEmail: email,
        parentPhoneNumber: phoneNumber,
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
