import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

export const deleteUserBookingAsync = createAsyncThunk(
  "deleteUserbooking",
  async (
    { userBookingToDelete, bookedSessionsCollectionId, databaseId },
    thunkAPI
  ) => {
    try {
      const { $id } = userBookingToDelete;
      const collectionId = bookedSessionsCollectionId;
      const queryIndex = "$id";
      const queryValue = $id;
      const documentId = $id;
      const data = userBookingToDelete;

      const getBookingDocuments = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
      );

      const { total } = getBookingDocuments;

      if (!total) return;

      await manageDatabaseDocument(
        "delete",
        databaseId,
        collectionId,
        documentId,
        data
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateSessionSpacesDocAsync = createAsyncThunk(
  "updateSessionSpacesDoc",
  async (
    {
      termDatesCollectionId,
      date,
      databaseId,
      sessionType,
      numberOfChildrenInBooking,
    },
    thunkAPI
  ) => {
    try {
      const collectionId = termDatesCollectionId;
      const queryIndex = "date";
      const queryValue = date;

      const getDateDocumentToUpdate = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
      );

      const dateDocument = getDateDocumentToUpdate.documents;

      if (!dateDocument.length) {
        return;
      } else {
        const { $id, morningSessionSpaces, afternoonSessionSpaces } =
          dateDocument[0];

        let updatedSessionSpaces = {};

        if (sessionType === "morning") {
          updatedSessionSpaces = {
            morningSessionSpaces:
              morningSessionSpaces + numberOfChildrenInBooking,
          };
        } else if (
          sessionType === "afternoonShort" ||
          sessionType === "afternoonLong"
        ) {
          updatedSessionSpaces = {
            afternoonSessionSpaces:
              afternoonSessionSpaces + numberOfChildrenInBooking,
          };
        } else if (
          sessionType === "morningAndAfternoonShort" ||
          sessionType === "morningAndAfternoonLong"
        ) {
          updatedSessionSpaces = {
            morningSessionSpaces:
              morningSessionSpaces + numberOfChildrenInBooking,
            afternoonSessionSpaces:
              afternoonSessionSpaces + numberOfChildrenInBooking,
          };
        }

        const documentId = $id;
        const data = updatedSessionSpaces;

        await manageDatabaseDocument(
          "update",
          databaseId,
          collectionId,
          documentId,
          data
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refundUserAsync = createAsyncThunk(
  "refundUser",
  async ({ id, databaseId, collectionId, refundPrice }, thunkAPI) => {
    try {
      throw new Error("oops");
      const queryIndex = "id";
      const queryValue = id;
      const documentId = id;

      const userDocument = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
      );

      const { total, documents } = userDocument;

      if (total && documents.length) {
        const { walletBalance } = documents[0];

        const data = { walletBalance: walletBalance + refundPrice };

        await manageDatabaseDocument(
          "update",
          databaseId,
          collectionId,
          documentId,
          data
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
