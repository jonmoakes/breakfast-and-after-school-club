import { createSelector } from "reselect";

const selectBookSessionReducer = (state) => state.bookSession;

export const selectSessionType = createSelector(
  [selectBookSessionReducer],
  (bookSessionSlice) => bookSessionSlice.sessionType
);

export const selectBookSessionIsLoading = createSelector(
  [selectBookSessionReducer],
  (bookSessionSlice) => bookSessionSlice.isLoading
);

export const selectUpdateSessionDoc = createSelector(
  [selectBookSessionReducer],
  (bookSessionSlice) => bookSessionSlice.updateSessionDoc
);

export const selectUpdateUserDocBalance = createSelector(
  [selectBookSessionReducer],
  (bookSessionSlice) => bookSessionSlice.updateUserDocBalance
);

export const selectResetSessionDoc = createSelector(
  [selectBookSessionReducer],
  (bookSessionSlice) => bookSessionSlice.resetSessionDoc
);

export const selectAddSessionBookingInfo = createSelector(
  [selectBookSessionReducer],
  (bookSessionSlice) => bookSessionSlice.addSessionBookingInfo
);

export const selectChildrenSelectedForBooking = createSelector(
  [selectBookSessionReducer],
  (bookSessionSlice) => bookSessionSlice.childrenSelectedForBooking
);
