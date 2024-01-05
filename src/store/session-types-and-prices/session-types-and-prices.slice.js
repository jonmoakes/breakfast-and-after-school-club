import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";

import { createSessionTypesAndPricesObject } from "../../functions/create-session-types-and-prices-object";

export const getSessionPricesAsync = createAsyncThunk(
  "getSessionPrices",
  async (_, thunkAPI) => {
    try {
      const getPrices = await databases.getDocument(
        `${import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID}`,
        `${import.meta.env.VITE_SESSION_PRICES_COLLECTION_ID}`,
        `${import.meta.env.VITE_SESSION_PRICES_DOCUMENT_ID}`
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

export const { setSessionTypesAndPrices, resetSessionPricesError } =
  sessionTypesAndPricesSlice.actions;

export const sessionTypesAndPricesReducer = sessionTypesAndPricesSlice.reducer;
