import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchBookedSessionsUserAllBookingsAsync,
  fetchBookedSessionsUserFromTodayOnwardsAsync,
} from "./booked-sessions-user.thunks";

const INITIAL_STATE = {
  bookedSessionsUserIsLoading: false,
  bookedSessionsUser: [],
  bookedSessionsUserError: null,
};

const handleAsyncAction = (builder, asyncAction) => {
  builder
    .addCase(asyncAction.pending, (state) => {
      state.bookedSessionsUserIsLoading = true;
    })
    .addCase(asyncAction.fulfilled, (state, action) => {
      state.bookedSessionsUserIsLoading = false;
      state.bookedSessionsUser = action.payload;
      state.bookedSessionsUserError = null;
    })
    .addCase(asyncAction.rejected, (state, action) => {
      state.bookedSessionsUserIsLoading = false;
      state.bookedSessionsUser = [];
      state.bookedSessionsUserError = action.payload;
    });
};

export const bookedSessionsUserSlice = createSlice({
  name: "bookedSessionsUser",
  initialState: INITIAL_STATE,
  reducers: {
    resetBookSessionUserError(state) {
      state.bookedSessionsUserError = null;
    },
    resetBookedSessionsUserState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectBookedSessionsUserSelectors: createSelector(
      (state) => state.bookedSessionsUserIsLoading,
      (state) => state.bookedSessionsUser || [],
      (state) => state.bookedSessionsUserError,
      (
        bookedSessionsUserIsLoading,
        bookedSessionsUser,
        bookedSessionsUserError
      ) => {
        const formattedUserBookings = bookedSessionsUser.map((booking) => ({
          ...booking,
          dateAsDateObjectForSorting: new Date(booking.date),
        }));

        const sortedUserBookings = formattedUserBookings.sort(
          (bookingA, bookingB) => {
            const dateA = new Date(bookingA.dateAsDateObjectForSorting);
            const dateB = new Date(bookingB.dateAsDateObjectForSorting);

            return dateA - dateB;
          }
        );

        return {
          bookedSessionsUserIsLoading,
          bookedSessionsUser,
          sortedUserBookings,
          bookedSessionsUserError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    handleAsyncAction(builder, fetchBookedSessionsUserFromTodayOnwardsAsync);
    handleAsyncAction(builder, fetchBookedSessionsUserAllBookingsAsync);
  },
});

export const { resetBookedSessionsUserState, resetBookSessionUserError } =
  bookedSessionsUserSlice.actions;
export const { selectBookedSessionsUserSelectors } =
  bookedSessionsUserSlice.selectors;

export const bookedSessionsUserReducer = bookedSessionsUserSlice.reducer;
