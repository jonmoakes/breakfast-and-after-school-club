import { createSelector, createSlice } from "@reduxjs/toolkit";

import {
  getUserOnLoadAsync,
  signInAsync,
  signUpAsync,
  signOutAsync,
  getUsersWalletBalanceAsync,
} from "./user.thunks";

import { getSchoolCodeAndSetEnvVariables } from "./functions";
import { account } from "../../utils/appwrite/appwrite-config";

const initialState = {
  currentUser: null,
  currentUserIsLoading: false,
  currentUserError: null,
  currentUserEnvironmentVariables: {},
  currentUserWalletBalanceResult: "",
  currentUserWalletBalanceError: null,
  loadStripeKey: null,
  walletFundsToAdd: 0,
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
    setLoadStripeKey(state, action) {
      state.loadStripeKey = action.payload;
    },
    setWalletFundsToAdd(state, action) {
      state.walletFundsToAdd = action.payload;
    },
    resetWalletFundsToAdd(state) {
      state.walletFundsToAdd = 0;
    },
    setWalletBalance(state, action) {
      state.currentUser.walletBalance = action.payload;
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
      (state) => state.loadStripeKey,
      (state) => state.walletFundsToAdd,
      (
        currentUser,
        currentUserIsLoading,
        currentUserError,
        currentUserEnvironmentVariables,
        currentUserWalletBalanceResult,
        currentUserWalletBalanceError,
        loadStripeKey,
        walletFundsToAdd
      ) => {
        return {
          currentUser,
          currentUserIsLoading,
          currentUserError,
          currentUserEnvironmentVariables,
          currentUserWalletBalanceResult,
          currentUserWalletBalanceError,
          loadStripeKey,
          walletFundsToAdd,
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
        // This is if the users email and password are correct, but the school code isn't ( although it IS one of the school codes in the list ).
        // In this case, getUserOnLoadAsync will be fulfilled as the email and password are correct, but retrievedUser from getUserOnLoadAsync will be undefined as no user will have been matched as the school code is wrong. We need to reset the envVariables as they will have been set as a result of the fulfilled action, and a session will have been created too which needs to be deleted.
        if (
          action.payload === "no user found" ||
          state.currentUser === undefined
        ) {
          state.currentUserIsLoading = false;
          state.currentUserError = "action fulfilled but no user";
          state.currentUserEnvironmentVariables = {};
          const deleteSession = async () => {
            await account.deleteSession("current");
          };
          deleteSession();
        } else {
          state.currentUserIsLoading = false;
          state.currentUser = action.payload;
          state.currentUserError = null;
          getSchoolCodeAndSetEnvVariables(state);
        }
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
        getSchoolCodeAndSetEnvVariables(state);
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
        getSchoolCodeAndSetEnvVariables(state);
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
        state.loadStripeKey = null;
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
  setLoadStripeKey,
  setWalletFundsToAdd,
  resetWalletFundsToAdd,
  setWalletBalance,
} = userSlice.actions;
export const { selectCurrentUserSelectors } = userSlice.selectors;

export const userReducer = userSlice.reducer;
