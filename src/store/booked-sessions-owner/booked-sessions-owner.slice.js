import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchBookedSessionsOwnerAsync } from "./booked-sessions-owner.thunks";
import { format, parseISO } from "date-fns";

const INITIAL_STATE = {
  bookedSessionsOwnerIsLoading: false,
  bookedSessionsOwner: [],
  bookedSessionsOwnerError: null,
  showAllDates: false,
};

export const bookedSessionsOwnerSlice = createSlice({
  name: "bookedSessionsOwner",
  initialState: INITIAL_STATE,
  reducers: {
    setBookedSessionsOwner(state, action) {
      state.bookedSessionsOwner = action.payload;
    },
    setShowAllDates(state, action) {
      state.showAllDates = action.payload;
    },
    toggleShowAllDates(state) {
      state.showAllDates = !state.showAllDates;
    },
    resetBookedSessionsOwnerError(state) {
      state.bookedSessionsOwnerError = null;
    },
    resetBookedSessionsOwnerState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectBookedSessionsOwnerSelectors: createSelector(
      (state) => state.bookedSessionsOwnerIsLoading,
      (state) => state.bookedSessionsOwner || [],
      (state) => state.showAllDates,
      (state) => state.bookedSessionsOwnerError,

      (
        bookedSessionsOwnerIsLoading,
        bookedSessionsOwner,
        showAllDates,
        bookedSessionsOwnerError
      ) => {
        const formattedOwnerBookings = bookedSessionsOwner.map((booking) => ({
          ...booking,
          formattedDate: format(parseISO(booking.date), "EEEE dd MMMM yyyy"),
        }));

        const sortedOwnerBookings = formattedOwnerBookings.sort(
          (bookingA, bookingB) => {
            const dateA = new Date(bookingA.date);
            const dateB = new Date(bookingB.date);

            return dateA - dateB;
          }
        );
        return {
          bookedSessionsOwnerIsLoading,
          bookedSessionsOwner,
          showAllDates,
          bookedSessionsOwnerError,
          sortedOwnerBookings,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookedSessionsOwnerAsync.pending, (state) => {
        state.bookedSessionsOwnerIsLoading = true;
      })
      .addCase(fetchBookedSessionsOwnerAsync.fulfilled, (state, action) => {
        state.bookedSessionsOwnerIsLoading = false;
        state.bookedSessionsOwner = action.payload;
        state.bookedSessionsOwnerError = null;
      })
      .addCase(fetchBookedSessionsOwnerAsync.rejected, (state, action) => {
        state.bookedSessionsOwnerIsLoading = false;
        state.bookedSessionsOwner = [];
        state.bookedSessionsOwnerError = action.payload;
      });
  },
});

export const {
  setBookedSessionsOwner,
  resetBookedSessionsOwnerState,
  setShowAllDates,
  toggleShowAllDates,
  resetBookedSessionsOwnerError,
} = bookedSessionsOwnerSlice.actions;

export const { selectBookedSessionsOwnerSelectors } =
  bookedSessionsOwnerSlice.selectors;

export const bookedSessionsOwnerReducer = bookedSessionsOwnerSlice.reducer;
