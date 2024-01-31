import { format, parseISO } from "date-fns";
import { createSelector } from "reselect";

const selectUserBookingsReducer = (state) => state.userBookings;

export const selectIsLoading = createSelector(
  [selectUserBookingsReducer],
  (userBookingsSlice) => userBookingsSlice.isLoading
);

export const selectUserBookings = createSelector(
  [selectUserBookingsReducer],
  (userBookingsSlice) => userBookingsSlice.userBookings || []
);

export const selectUserBookingsWithFormattedDate = createSelector(
  [selectUserBookingsReducer],
  (userBookingsSlice) => {
    const userBookings = userBookingsSlice.userBookings || [];

    const formattedUserBookings = userBookings.map((booking) => ({
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

    return sortedUserBookings;
  }
);

export const selectGetUserBookingsError = createSelector(
  [selectUserBookingsReducer],
  (userBookingsSlice) => userBookingsSlice.error
);
