import { createSelector, createSlice } from "@reduxjs/toolkit";

const defaultSignInFormDetails = {
  email: "",
  schoolCode: "",
  password: "",
};
const INITIAL_STATE = {
  signInFormDetails: defaultSignInFormDetails,
  showSocialSignInForm: false,
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
    setShowSocialSignInForm(state, action) {
      state.showSocialSignInForm = action.payload;
    },
    resetSignInFormDetails(state) {
      state.signInFormDetails = defaultSignInFormDetails;
    },
  },
  selectors: {
    selectSignInFormSelectors: createSelector(
      (state) => state.signInFormDetails,
      (state) => state.showSocialSignInForm,
      (signInFormDetails, showSocialSignInForm) => {
        return {
          signInFormDetails,
          showSocialSignInForm,
        };
      }
    ),
  },
});

export const {
  setSignInFormDetails,
  resetSignInFormState,
  setShowSocialSignInForm,
  resetSignInFormDetails,
} = signInFormSlice.actions;
export const { selectSignInFormSelectors } = signInFormSlice.selectors;

export const signInFormReducer = signInFormSlice.reducer;
