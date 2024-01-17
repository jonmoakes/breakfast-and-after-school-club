import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SEND_CONTACT_FORM_MESSAGE_ENDPOINT } from "../../../netlify/api-endpoints/api-endpoints";

export const sendContactFormMessageAsync = createAsyncThunk(
  "contactForm",
  async (
    { currentUserEmail, appOwnerEmail, name, email, message },
    thunkAPI
  ) => {
    try {
      const getEmailToSendMessageTo = () => {
        let emailToSendMessageTo;

        if (currentUserEmail === appOwnerEmail || appOwnerEmail === undefined) {
          emailToSendMessageTo = import.meta.env.VITE_APP_ADMIN_EMAIL;
        } else {
          emailToSendMessageTo = appOwnerEmail;
        }
        return emailToSendMessageTo;
      };

      const sendTo = getEmailToSendMessageTo();

      const response = await axios.post(SEND_CONTACT_FORM_MESSAGE_ENDPOINT, {
        sendTo,
        name,
        email,
        message,
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
  selectors: {
    selectContactFormDetails: (state) => state.contactFormDetails,
    selectSendMessageIsLoading: (state) => state.isLoading,
    selectSendMessageResponseStatus: (state) => state.responseStatus,
    selectSendMessageError: (state) => state.error,
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
export const {
  selectContactFormDetails,
  selectSendMessageIsLoading,
  selectSendMessageResponseStatus,
  selectSendMessageError,
} = contactFormSlice.selectors;

export const contactFormReducer = contactFormSlice.reducer;
