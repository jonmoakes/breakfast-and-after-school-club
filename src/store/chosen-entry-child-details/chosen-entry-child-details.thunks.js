import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

export const getChosenEntryChildDetailsAsync = createAsyncThunk(
  "getChosenEntryChildDetails",
  async ({ chosenEntry, databaseId, collectionId }, thunkAPI) => {
    try {
      const searchForChildNames = chosenEntry.length
        ? chosenEntry[0].childrensName
        : null;

      const searchIndex = "childName";
      const searchValue = searchForChildNames;

      const getChosenEntryChildDetailsDocuments =
        await listDocumentsByQueryOrSearch(
          databaseId,
          collectionId,
          searchIndex,
          searchValue,
          true
        );

      const { documents, total } = getChosenEntryChildDetailsDocuments;

      if (!total) return;

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
