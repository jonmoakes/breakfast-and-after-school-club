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

export const selectError = createSelector(
  [selectBookedSessionsReducer],
  (getBookedSessionsSlice) => getBookedSessionsSlice.error
);
