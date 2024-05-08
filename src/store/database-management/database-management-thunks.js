import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";
import { ID } from "appwrite";
import { updateWalletBalance } from "./database-management-functions";

export const updateBookingClosingTimesAsync = createAsyncThunk(
  "updateBookingClosingTimes",
  async (
    { attributeToUpdate, newTime, databaseId, collectionId, documentId },
    thunkAPI
  ) => {
    try {
      const dataToUpdate = {
        [attributeToUpdate]: newTime,
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

export const updateSessionTimesAsync = createAsyncThunk(
  "updateSessionTimes",
  async (
    { attributeToUpdate, newTime, databaseId, collectionId, documentId },
    thunkAPI
  ) => {
    try {
      const dataToUpdate = {
        [attributeToUpdate]: newTime,
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

export const updateSessionPriceAsync = createAsyncThunk(
  "updateSessionPrice",
  async (
    { attributeToUpdate, newPrice, databaseId, collectionId, documentId },
    thunkAPI
  ) => {
    try {
      //db expects a double for its attribute
      const newPriceAsDouble = parseFloat(newPrice);
      const dataToUpdate = {
        [attributeToUpdate]: newPriceAsDouble,
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

export const updateUsersBalanceAsync = createAsyncThunk(
  "updateUsersBalance",
  async (
    { usersDocumentId, databaseId, userCollectionId, refundPrice },
    thunkAPI
  ) => {
    try {
      await updateWalletBalance(
        usersDocumentId,
        databaseId,
        userCollectionId,
        refundPrice
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const manuallyAddBookingDataAfterErrorAsync = createAsyncThunk(
  "manuallyAddBookingDataAfterError",
  async ({ databaseId, collectionId, bookingData }, thunkAPI) => {
    try {
      const {
        date,
        sessionType,
        childrenInBooking,
        parentName,
        parentPhoneNumber,
        parentsUserId,
        parentEmail,
      } = bookingData;

      const dataToUpdate = {
        date,
        sessionType,
        childrensName: childrenInBooking,
        parentName,
        parentPhoneNumber,
        parentsUserId,
        parentEmail,
      };

      await manageDatabaseDocument(
        "create",
        databaseId,
        collectionId,
        ID.unique(),
        dataToUpdate
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
      numberOfChildrenInBooking,
      date,
      databaseId,
      termDatesCollectionId,
      sessionType,
    },
    thunkAPI
  ) => {
    try {
      const numberOfChildrenAsNumber =
        typeof numberOfChildrenInBooking === "string"
          ? Number(numberOfChildrenInBooking)
          : numberOfChildrenInBooking;

      const queryIndexDate = "date";
      const queryValueDate = date;

      const getDateDocumentToUpdate = await listDocumentsByQueryOrSearch(
        databaseId,
        termDatesCollectionId,
        queryIndexDate,
        queryValueDate
      );

      const dateDocument = getDateDocumentToUpdate.documents;

      if (!dateDocument.length) {
        throw new Error("Date document not found");
      }

      const { $id, morningSessionSpaces, afternoonSessionSpaces } =
        dateDocument[0];

      let updatedSessionSpaces = {};

      switch (sessionType) {
        case "morning":
          updatedSessionSpaces = {
            morningSessionSpaces:
              morningSessionSpaces + numberOfChildrenAsNumber,
          };
          break;
        case "afternoonShort":
        case "afternoonlong":
          updatedSessionSpaces = {
            afternoonSessionSpaces:
              afternoonSessionSpaces + numberOfChildrenAsNumber,
          };
          break;
        case "morningAndAfternoonShort":
        case "morningAndAfternoonLong":
          updatedSessionSpaces = {
            morningSessionSpaces:
              morningSessionSpaces + numberOfChildrenAsNumber,
            afternoonSessionSpaces:
              afternoonSessionSpaces + numberOfChildrenAsNumber,
          };
          break;
        default:
          return;
      }

      const documentId = $id;
      const data = updatedSessionSpaces;

      await manageDatabaseDocument(
        "update",
        databaseId,
        termDatesCollectionId,
        documentId,
        data
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDocumentAsync = createAsyncThunk(
  "deletDocument",
  async ({ databaseId, collectionId, documentId }, thunkAPI) => {
    try {
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
