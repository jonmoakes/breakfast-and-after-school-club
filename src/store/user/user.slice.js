import { createSelector, createSlice } from "@reduxjs/toolkit";

import {
  getUserOnLoadAsync,
  signInAsync,
  signUpAsync,
  signOutAsync,
  getUsersWalletBalanceAsync,
  requestFacebookSignInAsync,
  requestGoogleSignInAsync,
} from "./user.thunks";

import { getSchoolCodeAndSetEnvVariables } from "./functions";

import {
  errorRequestingFacebookSignIn,
  errorRequestingGoogleSignIn,
} from "../../strings/errors/errors-strings";

const initialState = {
  currentUser: null,
  currentUserIsLoading: false,
  currentUserError: null,
  currentUserEnvironmentVariables: {},
  currentUserWalletBalanceResult: "",
  currentUserWalletBalanceError: null,
  loadStripeKey: null,
  schoolCodeForSocialLogin: "",
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
    setSchoolCodeForSocialLogin(state, action) {
      state.schoolCodeForSocialLogin = action.payload;
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
    resetSchoolCodeForSocialLogin(state) {
      state.schoolCodeForSocialLogin = "";
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
      (state) => state.schoolCodeForSocialLogin,
      (state) => state.walletFundsToAdd,
      (
        currentUser,
        currentUserIsLoading,
        currentUserError,
        currentUserEnvironmentVariables,
        currentUserWalletBalanceResult,
        currentUserWalletBalanceError,
        loadStripeKey,
        schoolCodeForSocialLogin,
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
          schoolCodeForSocialLogin,
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
        state.currentUserIsLoading = false;
        state.currentUser = action.payload;
        state.currentUserError = null;
        getSchoolCodeAndSetEnvVariables(state);
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
      })
      .addCase(requestFacebookSignInAsync.pending, (state) => {
        state.currentUserIsLoading = true;
      })
      .addCase(requestFacebookSignInAsync.fulfilled, (state) => {
        state.currentUserIsLoading = false;
        state.currentUserError = null;
      })
      .addCase(requestFacebookSignInAsync.rejected, (state) => {
        state.currentUserIsLoading = false;
        state.currentUserError = errorRequestingFacebookSignIn;
      })
      .addCase(requestGoogleSignInAsync.pending, (state) => {
        state.currentUserIsLoading = true;
      })
      .addCase(requestGoogleSignInAsync.fulfilled, (state) => {
        state.currentUserIsLoading = false;
        state.currentUserError = null;
      })
      .addCase(requestGoogleSignInAsync.rejected, (state) => {
        state.currentUserIsLoading = false;
        state.currentUserError = errorRequestingGoogleSignIn;
      });
  },
});

export const {
  resetCurrentUserErrorMessage,
  resetCurrentUserWalletBalanceResult,
  resetCurrentUserWalletBalanceError,
  setLoadStripeKey,
  setSchoolCodeForSocialLogin,
  setWalletFundsToAdd,
  resetWalletFundsToAdd,
  setWalletBalance,
  resetSchoolCodeForSocialLogin,
} = userSlice.actions;
export const { selectCurrentUserSelectors } = userSlice.selectors;

export const userReducer = userSlice.reducer;
