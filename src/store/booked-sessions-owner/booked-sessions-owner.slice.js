import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchBookedSessionsOwnerFromTodayOnwardsAsync,
  fetchBookedSessionsOwnerAllBookingsAsync,
  updateChildSessionRegistrationStatusAsync,
} from "./booked-sessions-owner.thunks";

const INITIAL_STATE = {
  bookedSessionsOwnerIsLoading: false,
  bookedSessionsOwner: [],
  bookedSessionsOwnerError: null,
  bookedSessionsOwnerShowAllDates: false,
  registrationChangeError: null,
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
    resetRegistrationChangeError(state) {
      state.registrationChangeError = null;
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
      (state) => state.registrationChangeError,

      (
        bookedSessionsOwnerIsLoading,
        bookedSessionsOwner,
        bookedSessionsOwnerShowAllDates,
        bookedSessionsOwnerError,
        registrationChangeError
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
          registrationChangeError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    handleAsyncAction(builder, fetchBookedSessionsOwnerFromTodayOnwardsAsync);
    handleAsyncAction(builder, fetchBookedSessionsOwnerAllBookingsAsync);
    builder.addCase(
      updateChildSessionRegistrationStatusAsync.rejected,
      (state, action) => {
        state.registrationchangeError = action.payload;
      }
    );
  },
});

export const {
  setBookedSessionsOwner,
  resetBookedSessionsOwnerState,
  setBookedSessionsOwnerShowAllDates,
  resetBookedSessionsOwnerError,
  resetRegistrationChangeError,
} = bookedSessionsOwnerSlice.actions;

export const { selectBookedSessionsOwnerSelectors } =
  bookedSessionsOwnerSlice.selectors;

export const bookedSessionsOwnerReducer = bookedSessionsOwnerSlice.reducer;
