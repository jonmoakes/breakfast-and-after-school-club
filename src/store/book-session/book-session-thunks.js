import { createAsyncThunk } from "@reduxjs/toolkit";
import { ID } from "appwrite";

import { lastMinuteNoSessionsMessage } from "../../strings/strings";
import { createChildrenToAddToBooking } from "../../functions/create-children-to-add-to-booking";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

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

export const resetSessionDocAsync = createAsyncThunk(
  "resetSessionDoc",
  async (
    { childrenSelectedForBooking, date, databaseId, collectionId, sessionType },
    thunkAPI
  ) => {
    const numberOfSpacesToAdd = childrenSelectedForBooking.length
      ? childrenSelectedForBooking.length
      : 1;

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

export const addSessionBookingInfoAsync = createAsyncThunk(
  "addSessionBookingInfo",
  async (
    {
      usersChildren,
      date,
      sessionType,
      childrenSelectedForBooking,
      bookedSessionsCollectionId,
      databaseId,
    },
    thunkAPI
  ) => {
    // gets the child name if user has only one child;
    const oneChildChosen = childrenSelectedForBooking.join(" ");
    const namesToAddToBooking = childrenSelectedForBooking.join(", ");

    const { childName, parentEmail, parentName } = usersChildren[0];

    try {
      const sessionBooking = {
        date,
        sessionType,
        childrensName: createChildrenToAddToBooking(
          childrenSelectedForBooking,
          childName,
          oneChildChosen,
          namesToAddToBooking
        ),
        parentEmail,
        parentName,
      };

      const collectionId = bookedSessionsCollectionId;
      const documentId = ID.unique();
      const data = sessionBooking;

      await manageDatabaseDocument(
        "create",
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
