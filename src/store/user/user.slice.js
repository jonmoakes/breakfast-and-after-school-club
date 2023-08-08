import { createSlice } from "@reduxjs/toolkit";

import {
  signInAsync,
  signUpAsync,
  requestFacebookSignInAsync,
  requestGoogleSignInAsync,
  signInWithSocialAsync,
  signInMagicUrlAsync,
  getUserOnLoadAsync,
  signOutAsync,
} from "./user.actions";
import {
  errorRequestingFacebookSignIn,
  errorRequestingGoogleSignIn,
} from "../../strings/strings";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    resetErrorMessage(state) {
      state.error = null;
    },
    setWalletBalance(state, action) {
      state.currentUser.walletBalance = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(signInAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(signUpAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(signUpAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(requestFacebookSignInAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(requestFacebookSignInAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(requestFacebookSignInAsync.rejected, (state) => {
        state.isLoading = false;
        state.error = errorRequestingFacebookSignIn;
      })
      .addCase(requestGoogleSignInAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(requestGoogleSignInAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(requestGoogleSignInAsync.rejected, (state) => {
        state.isLoading = false;
        state.error = errorRequestingGoogleSignIn;
      })
      .addCase(signInWithSocialAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInWithSocialAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signInWithSocialAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(signInMagicUrlAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInMagicUrlAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(signInMagicUrlAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getUserOnLoadAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserOnLoadAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(getUserOnLoadAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(signOutAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOutAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.currentUser = null;
        state.error = null;
      })
      .addCase(signOutAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetErrorMessage, setCurrentUser, setWalletBalance } =
  userSlice.actions;

export const userReducer = userSlice.reducer;
