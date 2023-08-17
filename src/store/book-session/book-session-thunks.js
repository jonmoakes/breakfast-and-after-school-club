import { createAsyncThunk } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";
import { getUserDocument } from "../user/functions";
import { lastMinuteNoSessionsMessage } from "../../strings/strings";

export const updateSessionDocAsync = createAsyncThunk(
  "updateSessionDoc",
  async ({ date, sessionType }, thunkAPI) => {
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

        if (sessionType === "morning") {
          updatedSessionSpaces = {
            morningSessionSpaces: morningSessionSpaces - 1,
          };
        } else if (
          sessionType === "afternoonShort" ||
          sessionType === "afternoonLong"
        ) {
          updatedSessionSpaces = {
            afternoonSessionSpaces: afternoonSessionSpaces - 1,
          };
        } else if (
          sessionType === "morningAndAfternoonShort" ||
          sessionType === "morningAndAfternoonLong"
        ) {
          updatedSessionSpaces = {
            morningSessionSpaces: morningSessionSpaces - 1,
            afternoonSessionSpaces: afternoonSessionSpaces - 1,
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
  async ({ date, sessionType }, thunkAPI) => {
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
            morningSessionSpaces: morningSessionSpaces + 1,
          };
        } else if (
          sessionType === "afternoonShort" ||
          sessionType === "afternoonLong"
        ) {
          updatedSessionSpaces = {
            afternoonSessionSpaces: afternoonSessionSpaces + 1,
          };
        } else if (
          sessionType === "morningAndAfternoonShort" ||
          sessionType === "morningAndAfternoonLong"
        ) {
          updatedSessionSpaces = {
            morningSessionSpaces: morningSessionSpaces + 1,
            afternoonSessionSpaces: afternoonSessionSpaces + 1,
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
      const errorMessage = `error updating sessions - ${error.message}`;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
