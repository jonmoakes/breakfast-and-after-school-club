import { createSelector } from "reselect";

const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.currentUser
);

export const selectIsUserLoading = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.isLoading
);

export const selectError = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.error
);

// export const selectCurrentUser = (state) => state.user.currentUser;
// export const selectIsUserLoading = (state) => state.user.isLoading;
// export const selectError = (state) => state.user.error;
