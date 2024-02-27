import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getSessionPricesAsync } from "./session-types-and-prices.thunks";

const INITIAL_STATE = {
  sessionTypesAndPricesIsLoading: false,
  sessionTypesAndPrices: {},
  sessionTypesAndPricesError: null,
};

export const sessionTypesAndPricesSlice = createSlice({
  name: "sessionTypesAndPrices",
  initialState: INITIAL_STATE,
  reducers: {
    setSessionTypesAndPrices(state, action) {
      state.sessionTypesAndPrices = action.payload;
    },
    resetSessionPricesError(state) {
      state.sessionTypesAndPricesError = null;
    },
    resetSessionTypesAndPricesState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectSessionTypesAndPricesSelectors: createSelector(
      (state) => state.sessionTypesAndPricesIsLoading,
      (state) => state.sessionTypesAndPrices,
      (state) => state.sessionTypesAndPricesError,
      (
        sessionTypesAndPricesIsLoading,
        sessionTypesAndPrices,
        sessionTypesAndPricesError
      ) => {
        const morningSessionType =
          sessionTypesAndPrices?.morningSession?.sessionType ?? "";
        const morningSessionPrice =
          sessionTypesAndPrices?.morningSession?.price ?? null;
        const afternoonShortSessionType =
          sessionTypesAndPrices?.afternoonShortSession?.sessionType ?? "";
        const afternoonShortSessionPrice =
          sessionTypesAndPrices?.afternoonShortSession?.price ?? null;
        const afternoonLongSessionType =
          sessionTypesAndPrices?.afternoonLongSession?.sessionType ?? "";
        const afternoonLongSessionPrice =
          sessionTypesAndPrices?.afternoonLongSession?.price ?? null;
        const morningAndAfternoonShortSessionType =
          sessionTypesAndPrices?.morningAndAfternoonShortSession?.sessionType ??
          "";
        const morningAndAfternoonShortSessionPrice =
          sessionTypesAndPrices?.morningAndAfternoonShortSession?.price ?? null;
        const morningAndAfternoonLongSessionType =
          sessionTypesAndPrices?.morningAndAfternoonLongSession?.sessionType ??
          "";
        const morningAndAfternoonLongSessionPrice =
          sessionTypesAndPrices?.morningAndAfternoonLongSession?.price ?? null;
        return {
          sessionTypesAndPricesIsLoading,
          sessionTypesAndPrices,
          sessionTypesAndPricesError,
          morningSessionType,
          morningSessionPrice,
          afternoonShortSessionType,
          afternoonShortSessionPrice,
          afternoonLongSessionType,
          afternoonLongSessionPrice,
          morningAndAfternoonShortSessionType,
          morningAndAfternoonShortSessionPrice,
          morningAndAfternoonLongSessionType,
          morningAndAfternoonLongSessionPrice,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSessionPricesAsync.pending, (state) => {
        state.sessionTypesAndPricesIsLoading = true;
      })
      .addCase(getSessionPricesAsync.fulfilled, (state, action) => {
        state.sessionTypesAndPricesIsLoading = false;
        state.sessionTypesAndPrices = action.payload;
        state.sessionTypesAndPricesError = null;
      })
      .addCase(getSessionPricesAsync.rejected, (state, action) => {
        state.sessionTypesAndPricesIsLoading = false;
        state.sessionTypesAndPrices = {};
        state.sessionTypesAndPricesError = action.payload;
      });
  },
});

export const {
  setSessionTypesAndPrices,
  resetSessionPricesError,
  resetSessionTypesAndPricesState,
} = sessionTypesAndPricesSlice.actions;
export const { selectSessionTypesAndPricesSelectors } =
  sessionTypesAndPricesSlice.selectors;

export const sessionTypesAndPricesReducer = sessionTypesAndPricesSlice.reducer;
