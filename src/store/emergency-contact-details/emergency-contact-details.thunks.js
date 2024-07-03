import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

export const getEmergencyContactDetailsAsync = createAsyncThunk(
  "getEmergencyContactDetails",
  async ({ id, databaseId, collectionId }, thunkAPI) => {
    try {
      const queryIndex = "id";
      const queryValue = id;

      const getEmergencyContactDetails = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue,
        false,
        null
      );

      const { documents, total } = getEmergencyContactDetails;
      if (!total) return;

      const { emergencyContactDetails, emergencyContactDetailsTwo } =
        documents[0];

      return { emergencyContactDetails, emergencyContactDetailsTwo };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const manageEmergencyContactDetailsAsync = createAsyncThunk(
  "manageEmergencyContactDetails",
  async (
    { attributeToUpdate, details, databaseId, collectionId, documentId },
    thunkAPI
  ) => {
    try {
      const dataToUpdate = {
        [attributeToUpdate]: details,
      };
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
