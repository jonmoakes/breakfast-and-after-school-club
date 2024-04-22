import { createSelector, createSlice } from "@reduxjs/toolkit";
import { updateBookingClosingTimesAsync } from "./database-management-thunks";

const INITIAL_STATE = {
  databaseManagementIsLoading: false,
  newMorningBookingClosingTime: "",
  databaseManagementResult: "",
  databaseManagementError: null,
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
      (state) => state.databaseManagementResult,
      (state) => state.databaseManagementError,

      (
        databaseManagementIsLoading,
        newMorningBookingClosingTime,
        databaseManagementResult,
        databaseManagementError
      ) => {
        return {
          databaseManagementIsLoading,
          newMorningBookingClosingTime,
          databaseManagementResult,
          databaseManagementError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateBookingClosingTimesAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(updateBookingClosingTimesAsync.fulfilled, (state) => {
        state.databaseManagementIsLoading = false;
        state.databaseManagementResult = "fulfilled";
        state.databaseManagementError = null;
      })
      .addCase(updateBookingClosingTimesAsync.rejected, (state, action) => {
        state.databaseManagementIsLoading = false;
        state.databaseManagementResult = "rejected";
        state.databaseManagementError = action.payload;
      });
  },
});

export const {
  setNewMorningBookingClosingTime,
  resetNewMorningBookingClosingTime,
  resetDatabaseManagementError,
  resetDatabaseManagementResult,
  resetDatabaseManagementState,
} = databaseManagementSlice.actions;
export const { selectDatabaseManagementSelectors } =
  databaseManagementSlice.selectors;

export const databaseManagementReducer = databaseManagementSlice.reducer;
