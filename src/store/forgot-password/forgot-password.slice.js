import { createSlice } from "@reduxjs/toolkit";

const defaultNewPasswordDetails = {
  newPassword: "",
  confirmNewPassword: "",
};
const INITIAL_STATE = {
  forgotPasswordEmail: "",
  newPasswordDetails: defaultNewPasswordDetails,
};

export const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState: INITIAL_STATE,
  reducers: {
    setForgotPasswordEmail(state, action) {
      state.forgotPasswordEmail = action.payload;
    },
    clearForgotPasswordEmail(state) {
      state.forgotPasswordEmail = "";
    },
    setNewPasswordDetails(state, action) {
      state.newPasswordDetails = action.payload;
    },
    clearNewPasswordDetails(state) {
      state.newPasswordDetails = defaultNewPasswordDetails;
    },
  },
});

export const {
  setForgotPasswordEmail,
  clearForgotPasswordEmail,
  setNewPasswordDetails,
  clearNewPasswordDetails,
  setForgotPasswordResultError,
  clearForgotPasswordResultError,
} = forgotPasswordSlice.actions;

export const forgotPasswordReducer = forgotPasswordSlice.reducer;
