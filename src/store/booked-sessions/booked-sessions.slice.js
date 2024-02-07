import { createSlice } from "@reduxjs/toolkit";
import { format, parseISO } from "date-fns";
import { getBookedSessionsAsync } from "./booked-sessions-thunks";

const INITIAL_STATE = {
  isLoading: false,
  bookedSessions: [],
  bookedSessionsError: null,
  showAllDates: false,
};

export const getBookedSessionsSlice = createSlice({
  name: "getBookedSessions",
  initialState: INITIAL_STATE,
  reducers: {
    setBookedSessions(state, action) {
      state.bookedSessions = action.payload;
    },
    setShowAllDates(state, action) {
      state.showAllDates = action.payload;
    },
    toggleShowAllDates(state) {
      state.showAllDates = !state.showAllDates;
    },
    resetBookedSessionsState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectBookedSessionsIsLoading: (state) => state.isLoading,
    selectBookedSessions: (state) => state.bookedSessions || [],
    selectShowAllDates: (state) => state.showAllDates,
    selectBookedSessionWithFormattedDate: (state) =>
      state.bookedSessions.map((booking) => ({
        ...booking,
        formattedDate: format(parseISO(booking.date), "EEEE dd MMMM yyyy"),
      })),
    selectBookedSessionsError: (state) => state.bookedSessionsError,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookedSessionsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookedSessionsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookedSessions = action.payload;
        state.bookedSessionsError = null;
      })
      .addCase(getBookedSessionsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.bookedSessions = [];
        state.bookedSessionsError = action.payload;
      });
  },
});

export const {
  setBookedSessions,
  resetBookedSessionsState,
  setShowAllDates,
  toggleShowAllDates,
} = getBookedSessionsSlice.actions;

export const {
  selectBookedSessionsIsLoading,
  selectBookedSessions,
  selectShowAllDates,
  selectBookedSessionWithFormattedDate,
  selectBookedSessionsError,
} = getBookedSessionsSlice.selectors;

export const getBookedSessionsReducer = getBookedSessionsSlice.reducer;
