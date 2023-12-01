import { createAsyncThunk } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";
import { Query, ID } from "appwrite";
import { getUserDocument } from "../user/functions";

import { lastMinuteNoSessionsMessage } from "../../strings/strings";
import { createChildrenToAddToBooking } from "../../functions/create-children-to-add-to-booking";

export const updateSessionDocAsync = createAsyncThunk(
  "updateSessionDoc",
  async ({ date, sessionType, childrenSelectedForBooking }, thunkAPI) => {
    try {
      const getChosenDateDocument = await databases.listDocuments(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_2023_2024_TERM_DATES_COLLECTION_ID,
        [Query.equal("date", date)]
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

        await databases.updateDocument(
          import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
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

export const updateUserDocBalanceAsync = createAsyncThunk(
  "updateUserDocBalance",
  async ({ id, price }, thunkAPI) => {
    try {
      const userDocument = await getUserDocument();
      const { total, documents } = userDocument;

      if (total && documents.length) {
        const { walletBalance } = documents[0];
        await databases.updateDocument(
          import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
          import.meta.env.VITE_USER_COLLECTION_ID,
          id,
          { walletBalance: walletBalance - price }
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
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
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
          import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
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

export const addSessionBookingInfoAsync = createAsyncThunk(
  "addSessionBookingInfo",
  async (
    { date, sessionType, usersChildren, childrenSelectedForBooking },
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

      await databases.createDocument(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_BOOKED_SESSIONS_COLLECTION_ID,
        ID.unique(),
        sessionBooking
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
