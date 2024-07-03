import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

export const getChosenEntryChildDetailsAsync = createAsyncThunk(
  "getChosenEntryChildDetails",
  async (
    { childrensNamesInChosenEntry, databaseId, collectionId },
    thunkAPI
  ) => {
    try {
      const searchIndex = "childName";
      const searchValue = childrensNamesInChosenEntry;

      const getChosenEntryChildDetailsDocuments =
        await listDocumentsByQueryOrSearch(
          databaseId,
          collectionId,
          searchIndex,
          searchValue,
          true,
          null
        );

      const { documents, total } = getChosenEntryChildDetailsDocuments;

      if (!total) return;

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
