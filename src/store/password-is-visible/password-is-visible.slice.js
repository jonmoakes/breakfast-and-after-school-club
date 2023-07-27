import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  signInPasswordIsVisible: false,
  signUpPasswordIsVisible: false,
  signUpConfirmPasswordIsVisible: false,
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
  },
});

export const {
  toggleSignInPasswordIsVisible,
  hideSignInPasswordIsVisible,
  toggleSignUpPasswordIsVisible,
  hideSignUpPasswordIsVisible,
  toggleSignUpConfirmPasswordIsVisible,
  hideSignUpConfirmPasswordIsVisible,
} = passwordIsVisibleSlice.actions;

export const passwordIsVisibleReducer = passwordIsVisibleSlice.reducer;
