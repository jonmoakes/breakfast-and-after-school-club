import { createSlice } from "@reduxjs/toolkit";
import {
  sendEmailBookingConfirmationAsync,
  sendBookingCancellationConfirmationEmailAsync,
  sendEmailWithErrorAsync,
  sendEmailBookingNotAddedToDatabaseAsync,
  sendEmailResetSessionSpacesErrorAsync,
} from "./send-email-thunks";

const INITIAL_STATE = {
  isLoading: false,
  statusCode: "",
  error: null,
};

const handleAsyncAction = (builder, asyncAction) => {
  builder
    .addCase(asyncAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(asyncAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.statusCode = action.payload;
      state.error = null;
    })
    .addCase(asyncAction.rejected, (state, action) => {
      state.isLoading = false;
      state.statusCode = "";
      state.error = action.payload;
    });
};

export const sendEmailSlice = createSlice({
  name: "sendEmail",
  initialState: INITIAL_STATE,
  reducers: {
    resetSendEmailState: () => INITIAL_STATE,
  },
  extraReducers: (builder) => {
    handleAsyncAction(builder, sendEmailBookingConfirmationAsync);
    handleAsyncAction(builder, sendEmailBookingNotAddedToDatabaseAsync);
    handleAsyncAction(builder, sendEmailResetSessionSpacesErrorAsync);
    handleAsyncAction(builder, sendBookingCancellationConfirmationEmailAsync);
    handleAsyncAction(builder, sendEmailWithErrorAsync);
  },
});

export const { resetSendEmailState } = sendEmailSlice.actions;

export const sendEmailReducer = sendEmailSlice.reducer;
