import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  signUpFormDetails: {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
};

export const signUpFormSlice = createSlice({
  name: "signUpForm",
  initialState: INITIAL_STATE,
  reducers: {
    setSignUpFormDetails(state, action) {
      state.signUpFormDetails = action.payload;
    },
  },
});

export const { setSignUpFormDetails } = signUpFormSlice.actions;

export const signUpFormReducer = signUpFormSlice.reducer;
