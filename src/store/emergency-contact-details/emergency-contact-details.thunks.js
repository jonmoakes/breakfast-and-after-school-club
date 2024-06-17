import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

export const manageEmergencyContactDetailsAsync = createAsyncThunk(
  "manageEmergencyContactDetails",
  async (
    {
      attributeToUpdate,
      emergencyContactDetails,
      databaseId,
      collectionId,
      documentId,
    },
    thunkAPI
  ) => {
    try {
      const dataToUpdate = {
        [attributeToUpdate]: emergencyContactDetails,
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
        queryValue
      );

      const { documents, total } = getEmergencyContactDetails;
      if (!total) return;

      const { emergencyContactDetails } = documents[0];
      return emergencyContactDetails;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
