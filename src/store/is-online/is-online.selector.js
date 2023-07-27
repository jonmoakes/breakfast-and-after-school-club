import { createSelector } from "reselect";

const selectIsOnlineReducer = (state) => state.isOnline;

export const selectIsOnline = createSelector(
  [selectIsOnlineReducer],
  (isOnlineSlice) => isOnlineSlice.isOnline
);
