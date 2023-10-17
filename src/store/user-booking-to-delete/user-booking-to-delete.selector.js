import { createSelector } from "reselect";

const selectUserBookingToDeleteReducer = (state) => state.userBookingToDelete;

export const selectIsLoading = createSelector(
  [selectUserBookingToDeleteReducer],
  (userBookingToDeleteSlice) => userBookingToDeleteSlice.isLoading
);

export const selectUserBookingToDelete = createSelector(
  [selectUserBookingToDeleteReducer],
  (userBookingToDeleteSlice) => userBookingToDeleteSlice.userBookingToDelete[0]
);

export const selectUpdateBookingsDoc = createSelector(
  [selectUserBookingToDeleteReducer],
  (bookSessionSlice) => bookSessionSlice.updateBookingsDoc
);

export const selectUpdateUserDocBalance = createSelector(
  [selectUserBookingToDeleteReducer],
  (bookSessionSlice) => bookSessionSlice.updateUserDocBalance
);
