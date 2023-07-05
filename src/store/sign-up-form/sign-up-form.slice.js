import { createSlice } from "@reduxjs/toolkit";

const defaultSignUpFormDetails = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const INITIAL_STATE = {
  signUpFormDetails: defaultSignUpFormDetails,
};

export const signUpFormSlice = createSlice({
  name: "signUpForm",
  initialState: INITIAL_STATE,
  reducers: {
    setSignUpFormDetails(state, action) {
      state.signUpFormDetails = action.payload;
    },
    clearSignUpFormDetails(state) {
      state.signUpFormDetails = defaultSignUpFormDetails;
    },
  },
});

export const { setSignUpFormDetails, clearSignUpFormDetails } =
  signUpFormSlice.actions;

export const signUpFormReducer = signUpFormSlice.reducer;
