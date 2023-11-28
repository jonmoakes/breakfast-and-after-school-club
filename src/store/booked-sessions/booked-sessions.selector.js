import { format, parseISO } from "date-fns";
import { createSelector } from "reselect";

const selectBookedSessionsReducer = (state) => state.bookedSessions;

export const selectIsLoading = createSelector(
  [selectBookedSessionsReducer],
  (getBookedSessionsSlice) => getBookedSessionsSlice.isLoading
);

export const selectBookedSessions = createSelector(
  [selectBookedSessionsReducer],
  (getBookedSessionsSlice) => getBookedSessionsSlice.bookedSessions || []
);

export const selectBookedSessionWithFormattedDate = createSelector(
  [selectBookedSessionsReducer],
  (getBookedSessionsSlice) => {
    const bookedSessions = getBookedSessionsSlice.bookedSessions || [];

    const formattedBookings = bookedSessions.map((booking) => ({
      ...booking,
      formattedDate: format(parseISO(booking.date), "EEEE dd MMMM yyyy"),
    }));

    const sortedBookings = formattedBookings.sort((bookingA, bookingB) => {
      const dateA = new Date(bookingA.date);
      const dateB = new Date(bookingB.date);

      return dateA - dateB;
    });

    return sortedBookings;
  }
);

export const selectError = createSelector(
  [selectBookedSessionsReducer],
  (getBookedSessionsSlice) => getBookedSessionsSlice.error
);

export const selectShowAllDates = createSelector(
  [selectBookedSessionsReducer],
  (getBookedSessionsSlice) => getBookedSessionsSlice.showAllDates
);
