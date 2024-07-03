import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

export const deleteUserBookingAsync = createAsyncThunk(
  "deleteUserbooking",
  async ({ $id, bookedSessionsCollectionId, databaseId }, thunkAPI) => {
    try {
      const queryIndex = "$id";
      const queryValue = $id;
      const documentId = $id;
      const collectionId = bookedSessionsCollectionId;

      const getBookingDocuments = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue,
        false,
        null
      );

      const { total } = getBookingDocuments;

      if (!total) {
        throw new Error("booking not found");
      }

      await manageDatabaseDocument(
        "delete",
        databaseId,
        collectionId,
        documentId
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// session spaces  and balance update thunk is handled in database management thunks as it is shared in other cases.
