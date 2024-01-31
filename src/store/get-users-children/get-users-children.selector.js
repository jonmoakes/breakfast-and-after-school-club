import { createSelector } from "reselect";

const selectGetUsersChildrenReducer = (state) => state.getUsersChildren;

export const selectIsLoading = createSelector(
  [selectGetUsersChildrenReducer],
  (getUsersChildrenSlice) => getUsersChildrenSlice.isLoading
);

export const selectUsersChildren = createSelector(
  [selectGetUsersChildrenReducer],
  (getUsersChildrenSlice) => getUsersChildrenSlice.usersChildren
);

export const selectResult = createSelector(
  [selectGetUsersChildrenReducer],
  (getUsersChildrenSlice) => getUsersChildrenSlice.result
);

export const selectGetUsersChildrenError = createSelector(
  [selectGetUsersChildrenReducer],
  (getUsersChildrenSlice) => getUsersChildrenSlice.error
);
