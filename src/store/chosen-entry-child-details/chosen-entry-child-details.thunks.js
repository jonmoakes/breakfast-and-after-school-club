import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

export const getChosenEntryChildDetailsAsync = createAsyncThunk(
  "getChosenEntryChildDetails",
  async ({ childrensNamesInBooking, databaseId, collectionId }, thunkAPI) => {
    try {
      const queryIndex = "childName";

      const queryValue = childrensNamesInBooking
        .split(",")
        .map((name) => name.trim());

      const getChosenEntryChildDetailsDocuments =
        await listDocumentsByQueryOrSearch(
          databaseId,
          collectionId,
          queryIndex,
          queryValue,
          false,
          null
        );

      const { documents, total } = getChosenEntryChildDetailsDocuments;

      if (!total) return [];
      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
