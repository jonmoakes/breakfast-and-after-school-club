import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchBookedSessionsOwnerFromTodayOnwardsAsync,
  fetchBookedSessionsOwnerAllBookingsAsync,
  updateRegistrationStatusAsync,
} from "./booked-sessions-owner.thunks";

const INITIAL_STATE = {
  bookedSessionsOwnerIsLoading: false,
  bookedSessionsOwner: [],
  bookedSessionsOwnerError: null,
  bookedSessionsOwnerShowAllDates: false,
  updateRegistrationError: null,
};

const handleAsyncAction = (builder, asyncAction) => {
  builder
    .addCase(asyncAction.pending, (state) => {
      state.bookedSessionsOwnerIsLoading = true;
    })
    .addCase(asyncAction.fulfilled, (state, action) => {
      state.bookedSessionsOwnerIsLoading = false;
      state.bookedSessionsOwner = action.payload;
      state.bookedSessionsOwnerError = null;
    })
    .addCase(asyncAction.rejected, (state, action) => {
      state.bookedSessionsOwnerIsLoading = false;
      state.bookedSessionsOwner = [];
      state.bookedSessionsOwnerError = action.payload;
    });
};

export const bookedSessionsOwnerSlice = createSlice({
  name: "bookedSessionsOwner",
  initialState: INITIAL_STATE,
  reducers: {
    setBookedSessionsOwner(state, action) {
      state.bookedSessionsOwner = action.payload;
    },
    setBookedSessionsOwnerShowAllDates(state, action) {
      state.bookedSessionsOwnerShowAllDates = action.payload;
    },
    resetBookedSessionsOwnerError(state) {
      state.bookedSessionsOwnerError = null;
    },
    resetUpdateRegistrationError(state) {
      state.updateRegistrationError = null;
    },
    resetBookedSessionsOwnerState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectBookedSessionsOwnerSelectors: createSelector(
      (state) => state.bookedSessionsOwnerIsLoading,
      (state) => state.bookedSessionsOwner || [],
      (state) => state.bookedSessionsOwnerShowAllDates,
      (state) => state.bookedSessionsOwnerError,
      (state) => state.updateRegistrationError,

      (
        bookedSessionsOwnerIsLoading,
        bookedSessionsOwner,
        bookedSessionsOwnerShowAllDates,
        bookedSessionsOwnerError,
        updateRegistrationError
      ) => {
        const formattedOwnerBookings = bookedSessionsOwner.map((booking) => {
          return {
            ...booking,
            dateAsDateObjectForSorting: new Date(booking.date),
          };
        });

        const sortedOwnerBookings = formattedOwnerBookings.sort(
          (bookingA, bookingB) => {
            const dateA = new Date(bookingA.dateAsDateObjectForSorting);
            const dateB = new Date(bookingB.dateAsDateObjectForSorting);

            return dateA - dateB;
          }
        );
        return {
          bookedSessionsOwnerIsLoading,
          bookedSessionsOwner,
          bookedSessionsOwnerShowAllDates,
          bookedSessionsOwnerError,
          sortedOwnerBookings,
          updateRegistrationError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    handleAsyncAction(builder, fetchBookedSessionsOwnerFromTodayOnwardsAsync);
    handleAsyncAction(builder, fetchBookedSessionsOwnerAllBookingsAsync);
    builder
      .addCase(updateRegistrationStatusAsync.pending, (state) => {
        state.bookedSessionsOwnerIsLoading = true;
      })
      .addCase(updateRegistrationStatusAsync.fulfilled, (state) => {
        state.bookedSessionsOwnerIsLoading = false;
        state.updateRegistrationError = null;
      })
      .addCase(updateRegistrationStatusAsync.rejected, (state, action) => {
        state.bookedSessionsOwnerIsLoading = false;
        state.updateRegistrationError = action.payload;
      });
  },
});

export const {
  setBookedSessionsOwner,
  resetBookedSessionsOwnerState,
  setBookedSessionsOwnerShowAllDates,
  resetBookedSessionsOwnerError,
  resetUpdateRegistrationError,
} = bookedSessionsOwnerSlice.actions;

export const { selectBookedSessionsOwnerSelectors } =
  bookedSessionsOwnerSlice.selectors;

export const bookedSessionsOwnerReducer = bookedSessionsOwnerSlice.reducer;
