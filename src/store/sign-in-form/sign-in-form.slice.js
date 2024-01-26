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
    resetSignInFormState: () => {
      return INITIAL_STATE;
    },
  },
});

export const { setSignInFormDetails, resetSignInFormState } =
  signInFormSlice.actions;

export const signInFormReducer = signInFormSlice.reducer;
