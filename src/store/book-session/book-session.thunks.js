import { createAsyncThunk } from "@reduxjs/toolkit";
import { ID } from "appwrite";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

import { lastMinuteNoSessionsMessage } from "../../strings/errors/errors-strings";
import { createChildrenToAddToBooking } from "../../functions/create-children-to-add-to-booking";

//decrease the no of sessions in the database
export const updateSessionDocAsync = createAsyncThunk(
  "updateSessionDoc",
  async (
    {
      date,
      databaseId,
      termDatesCollectionId,
      childrenSelectedForBooking,
      sessionType,
    },
    thunkAPI
  ) => {
    try {
      const collectionId = termDatesCollectionId;
      const queryIndex = "date";
      const queryValue = date;

      const getChosenDateDocument = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
      );

      const dateDocument = getChosenDateDocument.documents;

      if (!dateDocument.length) {
        return;
      } else {
        const { $id, morningSessionSpaces, afternoonSessionSpaces } =
          dateDocument[0];

        const numberOfSpacesToDeduct = childrenSelectedForBooking.length
          ? childrenSelectedForBooking.length
          : 1;

        if (
          (sessionType === "morning" && !morningSessionSpaces) ||
          (sessionType === "afternoonShort" && !afternoonSessionSpaces) ||
          (sessionType === "afternoonLong" && !afternoonSessionSpaces) ||
          (sessionType === "morningAndAfternoonShort" &&
            !morningSessionSpaces) ||
          (sessionType === "morningAndAfternoonShort" &&
            !afternoonSessionSpaces) ||
          (sessionType === "morningAndAfternoonLong" &&
            !morningSessionSpaces) ||
          (sessionType === "morningAndAfternoonLong" && !afternoonSessionSpaces)
        ) {
          throw new Error(lastMinuteNoSessionsMessage);
        }

        let updatedSessionSpaces = {};

        if (sessionType === "morning") {
          updatedSessionSpaces = {
            morningSessionSpaces: morningSessionSpaces - numberOfSpacesToDeduct,
          };
        } else if (
          sessionType === "afternoonShort" ||
          sessionType === "afternoonLong"
        ) {
          updatedSessionSpaces = {
            afternoonSessionSpaces:
              afternoonSessionSpaces - numberOfSpacesToDeduct,
          };
        } else if (
          sessionType === "morningAndAfternoonShort" ||
          sessionType === "morningAndAfternoonLong"
        ) {
          updatedSessionSpaces = {
            morningSessionSpaces: morningSessionSpaces - numberOfSpacesToDeduct,
            afternoonSessionSpaces:
              afternoonSessionSpaces - numberOfSpacesToDeduct,
          };
        }

        const documentId = $id;
        const dataToUpdate = updatedSessionSpaces;

        await manageDatabaseDocument(
          "update",
          databaseId,
          collectionId,
          documentId,
          dataToUpdate
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// updates wallet balance in the database. If this fails, resetSessionDocAsync runs to reset the session spaces to what they were before updateSessionDocAsync above.
export const updateUserDocBalanceAsync = createAsyncThunk(
  "updateUserDocBalance",
  async ({ id, databaseId, collectionId, price }, thunkAPI) => {
    try {
      const queryIndex = "$id";
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

        const dataToUpdate = { walletBalance: walletBalance - price };

        await manageDatabaseDocument(
          "update",
          databaseId,
          collectionId,
          documentId,
          dataToUpdate
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// add the booking to the database. If successful, sendEmailBookingConfirmationAsync from the sendEmail Reducer runs. If that is successful, the user is redirected to the bookings page. If addSessionBookingInfoAsync fails, sendAddBookingInfoErrorEmail from the EmailReducer runs, telling the appOwner to update the database manually.
export const addSessionBookingInfoAsync = createAsyncThunk(
  "addSessionBookingInfo",
  async (
    {
      id,
      date,
      sessionType,
      childrenSelectedForBooking,
      usersChildren,
      name,
      phoneNumber,
      bookedSessionsCollectionId,
      databaseId,
    },
    thunkAPI
  ) => {
    try {
      let sessionBookings = [];

      if (
        sessionType === "morningAndAfternoonShort" ||
        sessionType === "morningAndAfternoonLong"
      ) {
        // Create separate session bookings for morning and afternoon - for easier searching in table.
        const morningBooking = {
          parentsUserId: id,
          date,
          sessionType: "morning",
          childrensName: createChildrenToAddToBooking(
            childrenSelectedForBooking,
            usersChildren
          ),
          parentName: name,
          parentPhoneNumber: phoneNumber,
        };
        const afternoonBooking = {
          parentsUserId: id,
          date,
          sessionType:
            sessionType === "morningAndAfternoonShort"
              ? "afternoonShort"
              : "afternoonLong",
          childrensName: createChildrenToAddToBooking(
            childrenSelectedForBooking,
            usersChildren
          ),
          parentName: name,
          parentPhoneNumber: phoneNumber,
        };

        sessionBookings = [morningBooking, afternoonBooking];
      } else {
        // For other session types, create a single session booking
        const sessionBooking = {
          parentsUserId: id,
          date,
          sessionType,
          childrensName: createChildrenToAddToBooking(
            childrenSelectedForBooking,
            usersChildren
          ),
          parentName: name,
          parentPhoneNumber: phoneNumber,
        };

        sessionBookings = [sessionBooking];
      }

      // Create documents for each session booking
      const collectionId = bookedSessionsCollectionId;
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

// runs if updateUserDocBalanceAsync fails above. If resetSessionDocAsync fails, we fire sendEmailResetSessionSpacesErrorAsync from the emailReducer, which emails the app owner, telling them to update the session spaces manually with the date, sessionType and numberOfSpacesToAdd contained within the email. If the sending of the email fails, the user is told to contact the school.
export const resetSessionDocAsync = createAsyncThunk(
  "resetSessionDoc",
  async (
    { date, databaseId, collectionId, sessionType, numberOfSpacesToAdd },
    thunkAPI
  ) => {
    try {
      const queryIndex = "date";
      const queryValue = date;
      const getChosenDateDocument = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
      );
      const dateDocument = getChosenDateDocument.documents;

      if (!dateDocument.length) {
        return;
      } else {
        const { $id, morningSessionSpaces, afternoonSessionSpaces } =
          dateDocument[0];

        let updatedSessionSpaces = {};

        if (sessionType === "morning") {
          updatedSessionSpaces = {
            morningSessionSpaces: morningSessionSpaces + numberOfSpacesToAdd,
          };
        } else if (
          sessionType === "afternoonShort" ||
          sessionType === "afternoonLong"
        ) {
          updatedSessionSpaces = {
            afternoonSessionSpaces:
              afternoonSessionSpaces + numberOfSpacesToAdd,
          };
        } else if (
          sessionType === "morningAndAfternoonShort" ||
          sessionType === "morningAndAfternoonLong"
        ) {
          updatedSessionSpaces = {
            morningSessionSpaces: morningSessionSpaces + numberOfSpacesToAdd,
            afternoonSessionSpaces:
              afternoonSessionSpaces + numberOfSpacesToAdd,
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
