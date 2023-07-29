import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  signInPasswordIsVisible: false,
  signUpPasswordIsVisible: false,
  signUpConfirmPasswordIsVisible: false,
  resetPasswordIsVisible: false,
  resetPasswordConfirmPasswordIsVisible: false,
  updateEmailPasswordIsVisible: false,
};

export const passwordIsVisibleSlice = createSlice({
  name: "togglePasswordIsVisible",
  initialState: INITIAL_STATE,
  reducers: {
    toggleSignInPasswordIsVisible(state) {
      state.signInPasswordIsVisible = !state.signInPasswordIsVisible;
    },
    hideSignInPasswordIsVisible(state) {
      state.signInPasswordIsVisible = false;
    },
    toggleSignUpPasswordIsVisible(state) {
      state.signUpPasswordIsVisible = !state.signUpPasswordIsVisible;
    },
    hideSignUpPasswordIsVisible(state) {
      state.signUpPasswordIsVisible = false;
    },
    toggleSignUpConfirmPasswordIsVisible(state) {
      state.signUpConfirmPasswordIsVisible =
        !state.signUpConfirmPasswordIsVisible;
    },
    hideSignUpConfirmPasswordIsVisible(state) {
      state.signUpConfirmPasswordIsVisible = false;
    },
    toggleResetPasswordIsVisible(state) {
      state.resetPasswordIsVisible = !state.resetPasswordIsVisible;
    },
    hideResetPasswordIsVisible(state) {
      state.resetPasswordIsVisible = false;
    },
    toggleResetPasswordConfirmPasswordIsVisible(state) {
      state.resetPasswordConfirmPasswordIsVisible =
        !state.resetPasswordConfirmPasswordIsVisible;
    },
    hideResetPasswordConfirmPasswordIsVisible(state) {
      state.resetPasswordConfirmPasswordIsVisible = false;
    },
    toggleUpdateEmailPasswordIsVisible(state) {
      state.updateEmailPasswordIsVisible = !state.updateEmailPasswordIsVisible;
    },
    hideUpdateEmailPasswordIsVisible(state) {
      state.updateEmailPasswordIsVisible = false;
    },
  },
});

export const {
  toggleSignInPasswordIsVisible,
  hideSignInPasswordIsVisible,
  toggleSignUpPasswordIsVisible,
  hideSignUpPasswordIsVisible,
  toggleSignUpConfirmPasswordIsVisible,
  hideSignUpConfirmPasswordIsVisible,
  toggleResetPasswordIsVisible,
  hideResetPasswordIsVisible,
  toggleResetPasswordConfirmPasswordIsVisible,
  hideResetPasswordConfirmPasswordIsVisible,
  toggleUpdateEmailPasswordIsVisible,
  hideUpdateEmailPasswordIsVisible,
} = passwordIsVisibleSlice.actions;

export const passwordIsVisibleReducer = passwordIsVisibleSlice.reducer;
