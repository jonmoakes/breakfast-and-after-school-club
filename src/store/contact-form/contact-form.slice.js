import { createSelector, createSlice } from "@reduxjs/toolkit";
import { sendContactFormMessageAsync } from "./contact-form.thunks";

const INITIAL_STATE = {
  contactFormIsLoading: false,
  responseStatus: null,
  contactFormError: null,
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
    setContactFormDefaultName(state, action) {
      state.contactFormDetails.name = action.payload;
    },
    setContactFormDefaultEmail(state, action) {
      state.contactFormDetails.email = action.payload;
    },
    resetContactFormState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectContactFormSelectors: createSelector(
      (state) => state.contactFormIsLoading,
      (state) => state.contactFormDetails,
      (state) => state.responseStatus,
      (state) => state.contactFormError,
      (
        contactFormIsLoading,
        contactFormDetails,
        responseStatus,
        contactFormError
      ) => {
        return {
          contactFormIsLoading,
          contactFormDetails,
          responseStatus,
          contactFormError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactFormMessageAsync.pending, (state) => {
        state.contactFormIsLoading = true;
      })
      .addCase(sendContactFormMessageAsync.fulfilled, (state, action) => {
        state.contactFormIsLoading = false;
        state.responseStatus = action.payload;
        state.contactFormError = null;
      })
      .addCase(sendContactFormMessageAsync.rejected, (state, action) => {
        state.contactFormIsLoading = false;
        state.contactFormError = action.payload;
      });
  },
});

export const {
  setContactFormDetails,
  resetContactFormState,
  setContactFormDefaultName,
  setContactFormDefaultEmail,
} = contactFormSlice.actions;
export const { selectContactFormSelectors } = contactFormSlice.selectors;

export const contactFormReducer = contactFormSlice.reducer;
