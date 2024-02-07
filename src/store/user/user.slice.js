import { createSlice } from "@reduxjs/toolkit";

import {
  getUserOnLoadAsync,
  signInAsync,
  signUpAsync,
  signOutAsync,
  getUsersWalletBalanceAsync,
} from "./user.thunks";

import { setEnvironmentVariables } from "../../functions/set-environment-variables";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
  environmentVariables: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserErrorMessage(state) {
      state.error = null;
    },
    setWalletBalance(state, action) {
      state.currentUser.walletBalance = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserOnLoadAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserOnLoadAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        state.error = null;
        const { schoolCode } = state.currentUser;
        state.environmentVariables = setEnvironmentVariables(schoolCode);
      })
      .addCase(getUserOnLoadAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(signInAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        state.error = null;
        const { schoolCode } = state.currentUser;
        state.environmentVariables = setEnvironmentVariables(schoolCode);
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
        const { schoolCode } = state.currentUser;
        state.environmentVariables = setEnvironmentVariables(schoolCode);
      })
      .addCase(signUpAsync.rejected, (state, action) => {
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
        state.environmentVariables = {};
      })
      .addCase(signOutAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getUsersWalletBalanceAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsersWalletBalanceAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser.walletBalance = action.payload;
      })
      .addCase(getUsersWalletBalanceAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetUserErrorMessage, setWalletBalance } = userSlice.actions;

export const userReducer = userSlice.reducer;
