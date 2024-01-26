import { createSlice } from "@reduxjs/toolkit";
import {
  sendEmailBookingConfirmationAsync,
  sendBookingCancellationConfirmationEmailAsync,
  sendEmailBookingNotAddedToDatabaseAsync,
  sendEmailResetSessionSpacesErrorAsync,
  sendEmailResetSessionSpacesAndBalanceErrorAsync,
  sendEmailBalanceNotUpdatedErrorAsync,
  sendEmailWalletFundsNotAddedErrorAsync,
  sendEmailToAdminCloseAccountRequestAsync,
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
    resetSendEmailState: () => {
      return INITIAL_STATE;
    },
    resetErrorMessage(state) {
      state.error = null;
    },
  },
  selectors: {
    selectSendEmailIsLoading: (state) => state.isLoading,
    selectSendEmailStatusCode: (state) => state.statusCode,
    selectSendEmailError: (state) => state.error,
  },
  extraReducers: (builder) => {
    handleAsyncAction(builder, sendEmailBookingConfirmationAsync);
    handleAsyncAction(builder, sendEmailBookingNotAddedToDatabaseAsync);
    handleAsyncAction(builder, sendEmailResetSessionSpacesErrorAsync);
    handleAsyncAction(builder, sendBookingCancellationConfirmationEmailAsync);
    handleAsyncAction(builder, sendEmailResetSessionSpacesAndBalanceErrorAsync);
    handleAsyncAction(builder, sendEmailBalanceNotUpdatedErrorAsync);
    handleAsyncAction(builder, sendEmailWalletFundsNotAddedErrorAsync);
    handleAsyncAction(builder, sendEmailToAdminCloseAccountRequestAsync);
  },
});

export const { resetSendEmailState, resetErrorMessage } =
  sendEmailSlice.actions;
export const {
  selectSendEmailError,
  selectSendEmailIsLoading,
  selectSendEmailStatusCode,
} = sendEmailSlice.selectors;

export const sendEmailReducer = sendEmailSlice.reducer;
