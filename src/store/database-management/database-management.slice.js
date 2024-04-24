import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  updateBookingClosingTimesAsync,
  updateSessionTimesAsync,
  updateSessionPriceAsync,
} from "./database-management-thunks";

const INITIAL_STATE = {
  databaseManagementIsLoading: false,
  newMorningBookingClosingTime: "",
  newAfternoonBookingClosingTime: "",
  newMorningSessionTime: "",
  newAfternoonShortSessionTime: "",
  newAfternoonLongSessionTime: "",
  newMorningSessionPrice: "",
  newAfternoonShortSessionPrice: "",
  newAfternoonLongSessionPrice: "",
  newMorningAndAfternoonShortSessionPrice: "",
  newMorningAndAfternoonLongSessionPrice: "",
  databaseManagementResult: "",
  databaseManagementError: null,
};

const handleAsyncAction = (builder, asyncAction) => {
  builder
    .addCase(asyncAction.pending, (state) => {
      state.databaseManagementIsLoading = true;
    })
    .addCase(asyncAction.fulfilled, (state) => {
      state.databaseManagementIsLoading = false;
      state.databaseManagementResult = "fulfilled";
      state.databaseManagementError = null;
    })
    .addCase(asyncAction.rejected, (state, action) => {
      state.databaseManagementIsLoading = false;
      state.databaseManagementResult = "rejected";
      state.databaseManagementError = action.payload;
    });
};

export const databaseManagementSlice = createSlice({
  name: "databaseManagement",
  initialState: INITIAL_STATE,
  reducers: {
    setNewMorningBookingClosingTime(state, action) {
      state.newMorningBookingClosingTime = action.payload;
    },
    resetNewMorningBookingClosingTime(state) {
      state.newMorningBookingClosingTime = "";
    },
    setNewAfternoonBookingClosingTime(state, action) {
      state.newAfternoonBookingClosingTime = action.payload;
    },
    resetNewAfternoonBookingClosingTime(state) {
      state.newAfternoonBookingClosingTime = "";
    },
    setNewMorningSessionTime(state, action) {
      state.newMorningSessionTime = action.payload;
    },
    setNewAfternoonShortSessionTime(state, action) {
      state.newAfternoonShortSessionTime = action.payload;
    },
    setNewAfternoonLongSessionTime(state, action) {
      state.newAfternoonLongSessionTime = action.payload;
    },
    resetNewSessionTimesDetails(state) {
      state.newMorningSessionTime = "";
      state.newAfternoonShortSessionTime = "";
      state.newAfternoonLongSessionTime = "";
    },
    setNewMorningSessionPrice(state, action) {
      state.newMorningSessionPrice = action.payload;
    },
    setNewAfternoonShortSessionPrice(state, action) {
      state.newAfternoonShortSessionPrice = action.payload;
    },
    setNewAfternoonLongSessionPrice(state, action) {
      state.newAfternoonLongSessionPrice = action.payload;
    },
    setNewMorningAndAfternoonShortSessionPrice(state, action) {
      state.newMorningAndAfternoonShortSessionPrice = action.payload;
    },
    setNewMorningAndAfternoonLongSessionPrice(state, action) {
      state.newMorningAndAfternoonLongSessionPrice = action.payload;
    },
    resetNewSessionPricesDetails(state) {
      state.newMorningSessionPrice = "";
      state.newAfternoonShortSessionPrice = "";
      state.newAfternoonLongSessionPrice = "";
      state.newMorningAndAfternoonShortSessionPrice = "";
      state.newMorningAndAfternoonLongSessionPrice = "";
    },
    resetDatabaseManagementError(state) {
      state.databaseManagementError = null;
    },
    resetDatabaseManagementResult(state) {
      state.databaseManagementResult = "";
    },
    resetDatabaseManagementState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectDatabaseManagementSelectors: createSelector(
      (state) => state.databaseManagementIsLoading,
      (state) => state.newMorningBookingClosingTime,
      (state) => state.newAfternoonBookingClosingTime,
      (state) => state.databaseManagementResult,
      (state) => state.databaseManagementError,
      (state) => state.newMorningSessionTime,
      (state) => state.newAfternoonShortSessionTime,
      (state) => state.newAfternoonLongSessionTime,
      (state) => state.newMorningSessionPrice,
      (state) => state.newAfternoonShortSessionPrice,
      (state) => state.newAfternoonLongSessionPrice,
      (state) => state.newMorningAndAfternoonShortSessionPrice,
      (state) => state.newMorningAndAfternoonLongSessionPrice,
      (
        databaseManagementIsLoading,
        newMorningBookingClosingTime,
        newAfternoonBookingClosingTime,
        databaseManagementResult,
        databaseManagementError,
        newMorningSessionTime,
        newAfternoonShortSessionTime,
        newAfternoonLongSessionTime,
        newMorningSessionPrice,
        newAfternoonShortSessionPrice,
        newAfternoonLongSessionPrice,
        newMorningAndAfternoonShortSessionPrice,
        newMorningAndAfternoonLongSessionPrice
      ) => {
        return {
          databaseManagementIsLoading,
          newMorningBookingClosingTime,
          newAfternoonBookingClosingTime,
          databaseManagementResult,
          databaseManagementError,
          newMorningSessionTime,
          newAfternoonShortSessionTime,
          newAfternoonLongSessionTime,
          newMorningSessionPrice,
          newAfternoonShortSessionPrice,
          newAfternoonLongSessionPrice,
          newMorningAndAfternoonShortSessionPrice,
          newMorningAndAfternoonLongSessionPrice,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    handleAsyncAction(builder, updateBookingClosingTimesAsync);
    handleAsyncAction(builder, updateSessionTimesAsync);
    handleAsyncAction(builder, updateSessionPriceAsync);
  },
});

export const {
  setNewMorningBookingClosingTime,
  resetNewMorningBookingClosingTime,
  setNewAfternoonBookingClosingTime,
  resetNewAfternoonBookingClosingTime,
  setNewMorningSessionTime,
  setNewAfternoonShortSessionTime,
  setNewAfternoonLongSessionTime,
  resetNewSessionTimesDetails,
  setNewMorningSessionPrice,
  setNewAfternoonShortSessionPrice,
  setNewAfternoonLongSessionPrice,
  setNewMorningAndAfternoonShortSessionPrice,
  setNewMorningAndAfternoonLongSessionPrice,
  resetNewSessionPricesDetails,
  resetDatabaseManagementError,
  resetDatabaseManagementResult,
  resetDatabaseManagementState,
} = databaseManagementSlice.actions;
export const { selectDatabaseManagementSelectors } =
  databaseManagementSlice.selectors;

export const databaseManagementReducer = databaseManagementSlice.reducer;
