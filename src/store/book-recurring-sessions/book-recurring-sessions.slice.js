import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  updateRecurringSessionSpacesDocAsync,
  addRecurringSessionsBookingDataAsync,
} from "./book-recurring-sessions-thunks";

const INITIAL_STATE = {
  bookRecurringSessionsIsLoading: false,
  updateSessionSpacesResult: "",
  updateSessionSpacesError: null,
  addRecurringBookingsResult: "",
  addRecurringBookingsError: null,
};

export const bookRecurringSessionsSlice = createSlice({
  name: "bookRecurringSessions",
  initialState: INITIAL_STATE,
  reducers: {
    resetUpdateSessionSpacesResult(state) {
      state.updateSessionSpacesResult = "";
    },
    resetUpdateSessionSpacesError(state) {
      state.updateSessionSpacesError = null;
    },
    resetAddRecurringBookingsResult(state) {
      state.addRecurringBookingsResult = "";
    },
    resetAddRecurringBookingsError(state) {
      state.addRecurringBookingsError = null;
    },
    resetBookRecurringSessionsState() {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectBookRecurringSessionsSelectors: createSelector(
      (state) => state.bookRecurringSessionsIsLoading,
      (state) => state.updateSessionSpacesResult,
      (state) => state.updateSessionSpacesError,
      (state) => state.addRecurringBookingsResult,
      (state) => state.addRecurringBookingsError,
      (
        bookRecurringSessionsIsLoading,
        updateSessionSpacesResult,
        updateSessionSpacesError,
        addRecurringBookingsResult,
        addRecurringBookingsError
      ) => {
        return {
          bookRecurringSessionsIsLoading,
          updateSessionSpacesResult,
          updateSessionSpacesError,
          addRecurringBookingsResult,
          addRecurringBookingsError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateRecurringSessionSpacesDocAsync.pending, (state) => {
        state.bookRecurringSessionsIsLoading = true;
      })
      .addCase(updateRecurringSessionSpacesDocAsync.fulfilled, (state) => {
        state.bookRecurringSessionsIsLoading = false;
        state.updateSessionSpacesResult = "fulfilled";
        state.updateSessionSpacesError = null;
      })
      .addCase(
        updateRecurringSessionSpacesDocAsync.rejected,
        (state, action) => {
          state.bookRecurringSessionsIsLoading = false;
          state.updateSessionSpacesResult = "rejected";
          state.updateSessionSpacesError = action.payload;
        }
      )
      .addCase(addRecurringSessionsBookingDataAsync.pending, (state) => {
        state.bookRecurringSessionsIsLoading = true;
      })
      .addCase(addRecurringSessionsBookingDataAsync.fulfilled, (state) => {
        state.bookRecurringSessionsIsLoading = false;
        state.addRecurringBookingsResult = "fulfilled";
        state.addRecurringBookingsError = null;
      })
      .addCase(
        addRecurringSessionsBookingDataAsync.rejected,
        (state, action) => {
          state.bookRecurringSessionsIsLoading = false;
          state.addRecurringBookingsResult = "rejected";
          state.addRecurringBookingsError = action.payload;
        }
      );
  },
});

export const {
  resetUpdateSessionSpacesResult,
  resetUpdateSessionSpacesError,
  resetAddRecurringBookingsResult,
  resetAddRecurringBookingsError,
  resetBookRecurringSessionsState,
} = bookRecurringSessionsSlice.actions;

export const { selectBookRecurringSessionsSelectors } =
  bookRecurringSessionsSlice.selectors;

export const bookRecurringSessionsReducer = bookRecurringSessionsSlice.reducer;
