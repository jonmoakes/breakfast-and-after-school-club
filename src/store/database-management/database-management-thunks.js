import { createAsyncThunk } from "@reduxjs/toolkit";
import { ID } from "appwrite";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

import { updateWalletBalance } from "./database-management-functions";

import { lastMinuteNoSessionsMessage } from "../../strings/errors/errors-strings";
import { bookSessionRoute } from "../../strings/routes/routes-strings";

import { generateUniqueId } from "../../functions/generate-unique-id";

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

export const updateSessionSpacesDocAsync = createAsyncThunk(
  "updateSessionSpacesDoc",
  async (
    {
      numberOfChildrenInBooking,
      date,
      databaseId,
      termDatesCollectionId,
      route,
      sessionType,
      operation,
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

      if (
        route === bookSessionRoute &&
        ((sessionType === "morning" && !morningSessionSpaces) ||
          (sessionType === "afternoonShort" && !afternoonSessionSpaces) ||
          (sessionType === "afternoonLong" && !afternoonSessionSpaces) ||
          (sessionType === "morningAndAfternoonShort" &&
            !morningSessionSpaces) ||
          (sessionType === "morningAndAfternoonShort" &&
            !afternoonSessionSpaces) ||
          (sessionType === "morningAndAfternoonLong" &&
            !morningSessionSpaces) ||
          (sessionType === "morningAndAfternoonLong" &&
            !afternoonSessionSpaces))
      ) {
        throw new Error(lastMinuteNoSessionsMessage);
      }

      let updatedSessionSpaces = {};

      switch (sessionType) {
        case "morning":
          updatedSessionSpaces = {
            morningSessionSpaces:
              operation === "add"
                ? morningSessionSpaces + numberOfChildrenAsNumber
                : morningSessionSpaces - numberOfChildrenAsNumber,
          };
          break;
        case "afternoonShort":
        case "afternoonLong":
          updatedSessionSpaces = {
            afternoonSessionSpaces:
              operation === "add"
                ? afternoonSessionSpaces + numberOfChildrenAsNumber
                : afternoonSessionSpaces - numberOfChildrenAsNumber,
          };
          break;
        case "morningAndAfternoonShort":
        case "morningAndAfternoonLong":
          updatedSessionSpaces = {
            morningSessionSpaces:
              operation === "add"
                ? morningSessionSpaces + numberOfChildrenAsNumber
                : morningSessionSpaces - numberOfChildrenAsNumber,
            afternoonSessionSpaces:
              operation === "add"
                ? afternoonSessionSpaces + numberOfChildrenAsNumber
                : afternoonSessionSpaces - numberOfChildrenAsNumber,
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

export const updateUsersBalanceAsync = createAsyncThunk(
  "updateUsersBalance",
  async (
    { usersDocumentId, databaseId, userCollectionId, sessionPrice, operation },
    thunkAPI
  ) => {
    try {
      await updateWalletBalance(
        usersDocumentId,
        databaseId,
        userCollectionId,
        sessionPrice,
        operation
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBookingDataAsync = createAsyncThunk(
  "addBookingData",
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

      let sessionBookings = [];

      if (
        sessionType === "morningAndAfternoonShort" ||
        sessionType === "morningAndAfternoonLong"
      ) {
        // Create separate session bookings for morning and afternoon - for easier searching in table.
        const morningBooking = {
          parentsUserId,
          date,
          sessionType: "morning",
          childrensName: childrenInBooking,
          parentName,
          parentEmail,
          parentPhoneNumber,
        };
        const afternoonBooking = {
          parentsUserId,
          date,
          sessionType:
            sessionType === "morningAndAfternoonShort"
              ? "afternoonShort"
              : "afternoonLong",
          childrensName: childrenInBooking,
          parentName,
          parentEmail,
          parentPhoneNumber,
        };

        sessionBookings = [morningBooking, afternoonBooking];
      } else {
        // For other session types, create a single session booking
        const sessionBooking = {
          parentsUserId,
          date,
          sessionType,
          childrensName: childrenInBooking,
          parentName,
          parentEmail,
          parentPhoneNumber,
        };

        sessionBookings = [sessionBooking];
      }

      // Create documents for each session booking
      for (const booking of sessionBookings) {
        const documentId = ID.unique();
        await manageDatabaseDocument(
          "create",
          databaseId,
          collectionId,
          documentId,
          booking
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDocumentAsync = createAsyncThunk(
  "deleteDocument",
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

export const createUserDocumentAsync = createAsyncThunk(
  "createUserDocument",
  async (
    {
      parentName,
      parentEmail,
      schoolCode,
      parentPhoneNumber,
      databaseId,
      collectionId,
    },
    thunkAPI
  ) => {
    try {
      const id = generateUniqueId(20);

      const data = {
        id,
        name: parentName.toLowerCase(),
        email: parentEmail.toLowerCase(),
        createdAt: new Date(),
        walletBalance: null,
        schoolCode,
        phoneNumber: parentPhoneNumber,
      };

      await manageDatabaseDocument(
        "create",
        databaseId,
        collectionId,
        id,
        data
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createChildDocumentAsync = createAsyncThunk(
  "createChildDocument",
  async (
    {
      childAge,
      childName,
      consent,
      medicalInfo,
      dietryRequirements,
      additionalInfo,
      parentName,
      parentEmail,
      parentPhoneNumber,
      parentsUserId,
      databaseId,
      collectionId,
    },
    thunkAPI
  ) => {
    try {
      const id = generateUniqueId(20);
      const ageOfChildAsNumber =
        typeof childAge === "string" ? Number(childAge) : childAge;

      const data = {
        childName: childName.toLowerCase(),
        age: ageOfChildAsNumber,
        consent,
        medicalInfo,
        dietryRequirements,
        additionalInfo,
        parentName: parentName.toLowerCase(),
        parentEmail: parentEmail.toLowerCase(),
        parentPhoneNumber,
        parentsUserId: parentsUserId.toLowerCase(),
      };

      await manageDatabaseDocument(
        "create",
        databaseId,
        collectionId,
        id,
        data
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUsersLatestBookingsWithNewEmailAsync = createAsyncThunk(
  "updateUsersLatestBookingsWithNewEmail",
  async (
    { parentsUserId, bookedSessionsCollectionId, databaseId, parentEmail },
    thunkAPI
  ) => {
    try {
      const queryIndex = "parentsUserId";
      const queryValue = parentsUserId;

      const collectionId = bookedSessionsCollectionId;

      const getBookingDocuments = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
      );

      const { documents, total } = getBookingDocuments;

      if (!total) return;

      const setToMidnight = (date) => {
        const midnightDate = new Date(date);
        midnightDate.setHours(0, 0, 0, 0);
        return midnightDate;
      };

      const currentDate = setToMidnight(new Date());

      const documentsToUpdate = documents.filter((doc) => {
        const bookingDate = setToMidnight(new Date(doc.date));
        return bookingDate >= currentDate;
      });

      if (!documentsToUpdate.length) return;

      for (const doc of documentsToUpdate) {
        await manageDatabaseDocument(
          "update",
          databaseId,
          collectionId,
          doc.$id,
          { parentEmail: parentEmail }
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateChildrensListParentEmailWithNewEmailAsync = createAsyncThunk(
  "updateChildrensListParentEmailWithNewEmailAsync",
  async (
    { parentsUserId, childrenCollectionId, databaseId, parentEmail },
    thunkAPI
  ) => {
    try {
      const queryIndex = "parentsUserId";
      const queryValue = parentsUserId;

      const collectionId = childrenCollectionId;

      const getChildrenDocuments = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
      );

      const { documents, total } = getChildrenDocuments;

      if (!total) return;

      for (const doc of documents) {
        await manageDatabaseDocument(
          "update",
          databaseId,
          collectionId,
          doc.$id,
          { parentEmail: parentEmail }
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
