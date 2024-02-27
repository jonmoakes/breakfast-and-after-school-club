import { createAsyncThunk } from "@reduxjs/toolkit";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

export const getSessionPricesAsync = createAsyncThunk(
  "getSessionPrices",
  async ({ databaseId, collectionId, documentId }, thunkAPI) => {
    try {
      const getPrices = await manageDatabaseDocument(
        "get",
        databaseId,
        collectionId,
        documentId
      );
      const {
        morningSessionPrice,
        afternoonShortSessionPrice,
        afternoonLongSessionPrice,
        morningAndAfternoonShortSessionPrice,
        morningAndAfternoonLongSessionPrice,
      } = getPrices;

      return {
        morningSession: {
          sessionType: "morning",
          price: morningSessionPrice,
        },
        afternoonShortSession: {
          sessionType: "afternoonShort",
          price: afternoonShortSessionPrice,
        },
        afternoonLongSession: {
          sessionType: "afternoonLong",
          price: afternoonLongSessionPrice,
        },
        morningAndAfternoonShortSession: {
          sessionType: "morningAndAfternoonShort",
          price: morningAndAfternoonShortSessionPrice,
        },
        morningAndAfternoonLongSession: {
          sessionType: "morningAndAfternoonLong",
          price: morningAndAfternoonLongSessionPrice,
        },
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
