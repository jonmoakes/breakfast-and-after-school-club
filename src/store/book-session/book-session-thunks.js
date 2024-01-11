import { createAsyncThunk } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";
import { Query, ID } from "appwrite";
// import { getUserDocument } from "../user/functions";

import { lastMinuteNoSessionsMessage } from "../../strings/strings";
import { createChildrenToAddToBooking } from "../../functions/create-children-to-add-to-booking";
import {
  listDocumentsByQuery,
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

      const getChosenDateDocument = await listDocumentsByQuery(
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
      // const userDocument = await getUserDocument(schoolCode);
      const queryIndex = "$id";
      const queryValue = id;
      const documentId = id;

      const userDocument = await listDocumentsByQuery(
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
  async ({ date, sessionType, childrenSelectedForBooking }, thunkAPI) => {
    const numberOfSpacesToAdd = childrenSelectedForBooking.length
      ? childrenSelectedForBooking.length
      : 1;

    try {
      const getChosenDateDocument = await databases.listDocuments(
        import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
        import.meta.env.VITE_2023_2024_TERM_DATES_COLLECTION_ID,
        [Query.equal("date", date)]
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

        await databases.updateDocument(
          import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
          import.meta.env.VITE_2023_2024_TERM_DATES_COLLECTION_ID,
          $id,
          updatedSessionSpaces
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// adds the booking data to the database
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

      // await databases.createDocument(
      //   import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
      //   import.meta.env.VITE_BOOKED_SESSIONS_COLLECTION_ID,
      //   ID.unique(),
      //   sessionBooking
      // );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
