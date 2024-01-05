import { createSlice } from "@reduxjs/toolkit";

const defaultSignInFormDetails = {
  email: "",
  schoolCode: "",
  password: "",
};
const INITIAL_STATE = {
  signInFormDetails: defaultSignInFormDetails,
};

export const signInFormSlice = createSlice({
  name: "signInForm",
  initialState: INITIAL_STATE,
  reducers: {
    setSignInFormDetails(state, action) {
      state.signInFormDetails = action.payload;
    },
    clearSignInFormDetails(state) {
      state.signInFormDetails = defaultSignInFormDetails;
    },
  },
});

export const { setSignInFormDetails, clearSignInFormDetails } =
  signInFormSlice.actions;

export const signInFormReducer = signInFormSlice.reducer;
