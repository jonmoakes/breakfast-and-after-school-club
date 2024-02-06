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

export const selectEnvironmentVariables = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.environmentVariables
);

export const selectUserError = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.error
);
