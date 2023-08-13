import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  signInPasswordIsVisible: false,
  signUpPasswordIsVisible: false,
  signUpConfirmPasswordIsVisible: false,
  resetPasswordIsVisible: false,
  resetPasswordConfirmPasswordIsVisible: false,
  updateEmailPasswordIsVisible: false,
  updatePasswordIsVisible: false,
  updatePasswordConfirmPasswordIsVisible: false,
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
    toggleSignUpConfirmPasswordIsVisible(state) {
      state.signUpConfirmPasswordIsVisible =
        !state.signUpConfirmPasswordIsVisible;
    },
    hideSignUpPasswordIsVisible(state) {
      state.signUpPasswordIsVisible = false;
    },
    hideSignUpConfirmPasswordIsVisible(state) {
      state.signUpConfirmPasswordIsVisible = false;
    },
    toggleResetPasswordIsVisible(state) {
      state.resetPasswordIsVisible = !state.resetPasswordIsVisible;
    },
    toggleResetPasswordConfirmPasswordIsVisible(state) {
      state.resetPasswordConfirmPasswordIsVisible =
        !state.resetPasswordConfirmPasswordIsVisible;
    },
    hideResetPasswordIsVisible(state) {
      state.resetPasswordIsVisible = false;
    },
    hideResetPasswordConfirmPasswordIsVisible(state) {
      state.resetPasswordConfirmPasswordIsVisible = false;
    },
    toggleUpdateEmailPasswordIsVisible(state) {
      state.updateEmailPasswordIsVisible = !state.updateEmailPasswordIsVisible;
    },
    hideUpdatePasswordIsVisible(state) {
      state.resetPasswordIsVisible = false;
    },
    toggleUpdatePasswordIsVisible(state) {
      state.updatePasswordIsVisible = !state.updatePasswordIsVisible;
    },
    toggleUpdatePasswordConfirmPasswordIsVisible(state) {
      state.updatePasswordConfirmPasswordIsVisible =
        !state.updatePasswordConfirmPasswordIsVisible;
    },
    hideUpdateEmailPasswordIsVisible(state) {
      state.updateEmailPasswordIsVisible = false;
    },
    hideUpdatePasswordConfirmPasswordIsVisible(state) {
      state.updatePasswordConfirmPasswordIsVisible = false;
    },
  },
});

export const {
  toggleSignInPasswordIsVisible,
  hideSignInPasswordIsVisible,
  toggleSignUpPasswordIsVisible,
  toggleSignUpConfirmPasswordIsVisible,
  hideSignUpPasswordIsVisible,
  hideSignUpConfirmPasswordIsVisible,
  toggleResetPasswordIsVisible,
  toggleResetPasswordConfirmPasswordIsVisible,
  hideResetPasswordIsVisible,
  hideResetPasswordConfirmPasswordIsVisible,
  toggleUpdateEmailPasswordIsVisible,
  hideUpdateEmailPasswordIsVisible,
  toggleUpdatePasswordIsVisible,
  toggleUpdatePasswordConfirmPasswordIsVisible,
  hideUpdatePasswordIsVisible,
  hideUpdatePasswordConfirmPasswordIsVisible,
} = passwordIsVisibleSlice.actions;

export const passwordIsVisibleReducer = passwordIsVisibleSlice.reducer;
