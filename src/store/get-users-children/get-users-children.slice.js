import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getUsersChildrenAsync } from "./get-users-children.thunks";

const INITIAL_STATE = {
  getUsersChildrenIsLoading: false,
  usersChildren: [],
  getUsersChildrenError: null,
};

export const getUsersChildrenSlice = createSlice({
  name: "getUsersChildren",
  initialState: INITIAL_STATE,
  reducers: {
    setUsersChildren(state, action) {
      state.usersChildren = action.payload;
    },
    resetUsersChildrenError(state) {
      state.getUsersChildrenError = null;
    },
    resetUsersChildren(state) {
      state.usersChildren = [];
    },
    resetAllGetUsersChildrenState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectGetUsersChildrenSelectors: createSelector(
      (state) => state.getUsersChildrenIsLoading,
      (state) => state.usersChildren,
      (state) => state.getUsersChildrenError,
      (getUsersChildrenIsLoading, usersChildren, getUsersChildrenError) => {
        return {
          getUsersChildrenIsLoading,
          usersChildren,
          getUsersChildrenError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersChildrenAsync.pending, (state) => {
        state.getUsersChildrenIsLoading = true;
      })
      .addCase(getUsersChildrenAsync.fulfilled, (state, action) => {
        state.getUsersChildrenIsLoading = false;
        state.usersChildren = action.payload;
        state.getUsersChildrenError = null;
      })
      .addCase(getUsersChildrenAsync.rejected, (state, action) => {
        state.getUsersChildrenIsLoading = false;
        state.usersChildren = [];
        state.getUsersChildrenError = action.payload;
      });
  },
});

export const {
  setUsersChildren,
  resetUsersChildren,
  resetUsersChildrenError,
  resetAllGetUsersChildrenState,
} = getUsersChildrenSlice.actions;
export const { selectGetUsersChildrenSelectors } =
  getUsersChildrenSlice.selectors;

export const getUsersChildrenReducer = getUsersChildrenSlice.reducer;
