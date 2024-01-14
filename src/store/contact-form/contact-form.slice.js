import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { emailToSend } from "./email-to-send";
import { capitalizeString } from "../../functions/capitalize-string";

import { SEND_CONTACT_FORM_MESSAGE_ENDPOINT } from "../../../netlify/api-endpoints/api-endpoints";

export const sendContactFormMessageAsync = createAsyncThunk(
  "contactForm",
  async ({ name, email, message }, thunkAPI) => {
    try {
      const response = await axios.post(SEND_CONTACT_FORM_MESSAGE_ENDPOINT, {
        message: emailToSend(
          capitalizeString(name),
          email,
          capitalizeString(message)
        ),
      });

      const { status } = response;
      return status;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  isLoading: false,
  responseStatus: null,
  error: null,
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
    resetErrorMessage(state) {
      state.error = null;
    },
    resetContactFormState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactFormMessageAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendContactFormMessageAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.responseStatus = action.payload;
        state.error = null;
      })
      .addCase(sendContactFormMessageAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setContactFormDetails,
  resetContactFormFields,
  resetErrorMessage,
  resetContactFormState,
} = contactFormSlice.actions;

export const contactFormReducer = contactFormSlice.reducer;
