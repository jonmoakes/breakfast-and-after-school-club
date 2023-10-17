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

export const selectError = createSelector(
  [selectUserBookingsReducer],
  (userBookingsSlice) => userBookingsSlice.error
);
