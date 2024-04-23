import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  updateBookingClosingTimesAsync,
  updateSessionTimesAsync,
} from "./database-management-thunks";

const INITIAL_STATE = {
  databaseManagementIsLoading: false,
  newMorningBookingClosingTime: "",
  newAfternoonBookingClosingTime: "",
  newMorningSessionTime: "",
  newAfternoonShortSessionTime: "",
  newAfternoonLongSessionTime: "",
  databaseManagementResult: "",
  databaseManagementError: null,
};

const handleAsyncAction = (builder, asyncAction) => {
  builder
    .addCase(asyncAction.pending, (state) => {
      state.databaseManagementIsLoading = true;
    })
    .addCase(asyncAction.fulfilled, (state, action) => {
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
      (
        databaseManagementIsLoading,
        newMorningBookingClosingTime,
        newAfternoonBookingClosingTime,
        databaseManagementResult,
        databaseManagementError,
        newMorningSessionTime,
        newAfternoonShortSessionTime,
        newAfternoonLongSessionTime
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
        };
      }
    ),
  },
  extraReducers: (builder) => {
    handleAsyncAction(builder, updateBookingClosingTimesAsync);
    handleAsyncAction(builder, updateSessionTimesAsync);
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
  resetDatabaseManagementError,
  resetDatabaseManagementResult,
  resetDatabaseManagementState,
} = databaseManagementSlice.actions;
export const { selectDatabaseManagementSelectors } =
  databaseManagementSlice.selectors;

export const databaseManagementReducer = databaseManagementSlice.reducer;
