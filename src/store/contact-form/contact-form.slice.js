import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contactFormDetails: {
    name: "",
    email: "",
    message: "",
  },
};

export const contactFormSlice = createSlice({
  name: "contactForm",
  initialState: INITIAL_STATE,
  reducers: {
    setContactFormDetails(state, action) {
      state.contactFormDetails = action.payload;
    },
    resetContactFormFields(state) {
      state.contactFormDetails = INITIAL_STATE;
    },
  },
});

export const { setContactFormDetails, resetContactFormFields } =
  contactFormSlice.actions;

export const contactFormReducer = contactFormSlice.reducer;
