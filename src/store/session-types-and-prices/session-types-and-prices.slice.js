import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { createSessionTypesAndPricesObject } from "../../functions/create-session-types-and-prices-object";
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

      return createSessionTypesAndPricesObject(
        morningSessionPrice,
        afternoonShortSessionPrice,
        afternoonLongSessionPrice,
        morningAndAfternoonShortSessionPrice,
        morningAndAfternoonLongSessionPrice
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  isLoading: false,
  sessionTypesAndPrices: {},
  error: null,
};

export const sessionTypesAndPricesSlice = createSlice({
  name: "sessionTypesAndPrices",
  initialState: INITIAL_STATE,
  reducers: {
    setSessionTypesAndPrices(state, action) {
      state.sessionTypesAndPrices = action.payload;
    },
    resetSessionPricesError(state) {
      state.error = null;
    },
    resetSessionTypesAndPricesState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSessionPricesAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSessionPricesAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.sessionTypesAndPrices = action.payload;
        state.error = null;
      })
      .addCase(getSessionPricesAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.sessionTypesAndPrices = {};
        state.error = action.payload;
      });
  },
});

export const {
  setSessionTypesAndPrices,
  resetSessionPricesError,
  resetSessionTypesAndPricesState,
} = sessionTypesAndPricesSlice.actions;

export const sessionTypesAndPricesReducer = sessionTypesAndPricesSlice.reducer;
