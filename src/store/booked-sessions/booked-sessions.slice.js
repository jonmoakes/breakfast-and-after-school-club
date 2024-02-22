import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getBookedSessionsAsync } from "./booked-sessions.thunks";

const INITIAL_STATE = {
  bookedSessionsIsLoading: false,
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
    selectBookedSessionsSelectors: createSelector(
      (state) => state.bookedSessionsIsLoading,
      (state) => state.bookedSessions || [],
      (state) => state.showAllDates,
      (state) => state.bookedSessionsError,
      (
        bookedSessionsIsLoading,
        bookedSessions,
        showAllDates,
        bookedSessionsError
      ) => {
        return {
          bookedSessionsIsLoading,
          bookedSessions,
          showAllDates,
          bookedSessionsError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookedSessionsAsync.pending, (state) => {
        state.bookedSessionsIsLoading = true;
      })
      .addCase(getBookedSessionsAsync.fulfilled, (state, action) => {
        state.bookedSessionsIsLoading = false;
        state.bookedSessions = action.payload;
        state.bookedSessionsError = null;
      })
      .addCase(getBookedSessionsAsync.rejected, (state, action) => {
        state.bookedSessionsIsLoading = false;
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

export const { selectBookedSessionsSelectors } =
  getBookedSessionsSlice.selectors;

export const getBookedSessionsReducer = getBookedSessionsSlice.reducer;
