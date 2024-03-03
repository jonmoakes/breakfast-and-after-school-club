import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchBookedSessionsUserAsync } from "./booked-sessions-user.thunks";
import { format, parseISO } from "date-fns";

const INITIAL_STATE = {
  bookedSessionsUserIsLoading: false,
  bookedSessionsUser: [],
  bookedSessionsUserError: null,
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
          formattedDate: format(parseISO(booking.date), "EEEE dd MMMM yyyy"),
        }));

        const sortedUserBookings = formattedUserBookings.sort(
          (bookingA, bookingB) => {
            const dateA = new Date(bookingA.date);
            const dateB = new Date(bookingB.date);

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
    builder
      .addCase(fetchBookedSessionsUserAsync.pending, (state) => {
        state.bookedSessionsUserIsLoading = true;
      })
      .addCase(fetchBookedSessionsUserAsync.fulfilled, (state, action) => {
        state.bookedSessionsUserIsLoading = false;
        state.bookedSessionsUser = action.payload;
        state.bookedSessionsUserError = null;
      })
      .addCase(fetchBookedSessionsUserAsync.rejected, (state, action) => {
        state.bookedSessionsUserIsLoading = false;
        state.bookedSessionsUser = [];
        state.bookedSessionsUserError = action.payload;
      });
  },
});

export const { resetBookedSessionsUserState, resetBookSessionUserError } =
  bookedSessionsUserSlice.actions;
export const { selectBookedSessionsUserSelectors } =
  bookedSessionsUserSlice.selectors;

export const bookedSessionsUserReducer = bookedSessionsUserSlice.reducer;
