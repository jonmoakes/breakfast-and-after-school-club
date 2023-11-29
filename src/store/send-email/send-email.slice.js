import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { emailToSend } from "./email-to-send";
import { SEND_EMAIL_ENDPOINT } from "../../../netlify/api-endpoints/api-endpoints";

export const sendEmailBookingConfirmationAsync = createAsyncThunk(
  "sendEmailBookingConfirmation",
  async (
    { email, subject, name, date, sessionType, childrenInBooking },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(SEND_EMAIL_ENDPOINT, {
        email,
        subject,
        message: emailToSend(name, date, sessionType, childrenInBooking),
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
  statusCode: "",
  error: null,
};

export const sendEmailSlice = createSlice({
  name: "sendEmail",
  initialState: INITIAL_STATE,
  reducers: {
    resetSendEmailState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendEmailBookingConfirmationAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendEmailBookingConfirmationAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.statusCode = action.payload;
        state.error = null;
      })
      .addCase(sendEmailBookingConfirmationAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.statusCode = action.payload;
        state.error = action.payload;
      });
  },
});

export const { resetSendEmailState } = sendEmailSlice.actions;

export const sendEmailReducer = sendEmailSlice.reducer;
