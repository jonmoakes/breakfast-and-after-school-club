import { createSelector, createSlice } from "@reduxjs/toolkit";

import {
  getUserOnLoadAsync,
  signInAsync,
  signUpAsync,
  signOutAsync,
  getUsersWalletBalanceAsync,
} from "./user.thunks";
import { setEnvironmentVariables } from "./functions";

const initialState = {
  currentUser: null,
  currentUserIsLoading: false,
  currentUserError: null,
  currentUserEnvironmentVariables: {},
  currentUserWalletBalanceResult: "",
  currentUserWalletBalanceError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetCurrentUserErrorMessage(state) {
      state.currentUserError = null;
    },
    resetCurrentUserWalletBalanceResult(state) {
      state.currentUserWalletBalanceResult = "";
    },
    resetCurrentUserWalletBalanceError(state) {
      state.currentUserWalletBalanceError = null;
    },
  },
  selectors: {
    selectCurrentUserSelectors: createSelector(
      (state) => state.currentUser,
      (state) => state.currentUserIsLoading,
      (state) => state.currentUserError,
      (state) => state.currentUserEnvironmentVariables,
      (state) => state.currentUserWalletBalanceResult,
      (state) => state.currentUserWalletBalanceError,
      (
        currentUser,
        currentUserIsLoading,
        currentUserError,
        currentUserEnvironmentVariables,
        currentUserWalletBalanceResult,
        currentUserWalletBalanceError
      ) => {
        return {
          currentUser,
          currentUserIsLoading,
          currentUserError,
          currentUserEnvironmentVariables,
          currentUserWalletBalanceResult,
          currentUserWalletBalanceError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserOnLoadAsync.pending, (state) => {
        state.currentUserIsLoading = true;
      })
      .addCase(getUserOnLoadAsync.fulfilled, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUser = action.payload;
        state.currentUserError = null;
        const { schoolCode } = state.currentUser;
        state.currentUserEnvironmentVariables =
          setEnvironmentVariables(schoolCode);
      })
      .addCase(getUserOnLoadAsync.rejected, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUserError = action.payload;
      })
      .addCase(signInAsync.pending, (state) => {
        state.currentUserIsLoading = true;
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUser = action.payload;
        state.currentUserError = null;
        const { schoolCode } = state.currentUser;
        state.currentUserEnvironmentVariables =
          setEnvironmentVariables(schoolCode);
      })
      .addCase(signInAsync.rejected, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUserError = action.payload;
      })
      .addCase(signUpAsync.pending, (state) => {
        state.currentUserIsLoading = true;
      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUser = action.payload;
        state.currentUserError = null;
        const { schoolCode } = state.currentUser;
        state.currentUserEnvironmentVariables =
          setEnvironmentVariables(schoolCode);
      })
      .addCase(signUpAsync.rejected, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUserError = action.payload;
      })
      .addCase(signOutAsync.pending, (state) => {
        state.currentUserIsLoading = true;
      })
      .addCase(signOutAsync.fulfilled, (state) => {
        state.currentUserIsLoading = false;
        state.currentUser = null;
        state.currentUserError = null;
        state.currentUserEnvironmentVariables = {};
      })
      .addCase(signOutAsync.rejected, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUserError = action.payload;
      })
      .addCase(getUsersWalletBalanceAsync.pending, (state) => {
        state.currentUserIsLoading = true;
      })
      .addCase(getUsersWalletBalanceAsync.fulfilled, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUser.walletBalance = action.payload;
        state.currentUserWalletBalanceResult = "success";
      })
      .addCase(getUsersWalletBalanceAsync.rejected, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUserWalletBalanceResult = "rejected";
        state.currentUserWalletBalanceError = action.payload;
      });
  },
});

export const {
  resetCurrentUserErrorMessage,
  resetCurrentUserWalletBalanceResult,
  resetCurrentUserWalletBalanceError,
} = userSlice.actions;
export const { selectCurrentUserSelectors } = userSlice.selectors;

export const userReducer = userSlice.reducer;
