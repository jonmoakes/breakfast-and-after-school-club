import { createSlice } from "@reduxjs/toolkit";

import {
  sendEmailBookingConfirmationAsync,
  sendBookingCancellationConfirmationEmailAsync,
  sendEmailWithErrorAsync,
} from "./send-email-thunks";

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
        state.statusCode = "";
        state.error = action.payload;
      })
      .addCase(
        sendBookingCancellationConfirmationEmailAsync.pending,
        (state) => {
          state.isLoading = true;
        }
      )
      .addCase(
        sendBookingCancellationConfirmationEmailAsync.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.statusCode = action.payload;
          state.error = null;
        }
      )
      .addCase(
        sendBookingCancellationConfirmationEmailAsync.rejected,
        (state, action) => {
          state.isLoading = false;
          state.statusCode = "";
          state.error = action.payload;
        }
      )
      .addCase(sendEmailWithErrorAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendEmailWithErrorAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.statusCode = action.payload;
        state.error = null;
      })
      .addCase(sendEmailWithErrorAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.statusCode = "";
        state.error = action.payload;
      });
  },
});

export const { resetSendEmailState } = sendEmailSlice.actions;

export const sendEmailReducer = sendEmailSlice.reducer;
