import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  sendEmailBookingConfirmationAsync,
  sendEmailBookingCancellationConfirmationAsync,
  sendEmailBookingNotAddedToDatabaseAsync,
  sendEmailResetSessionSpacesErrorAsync,
  sendEmailResetSessionSpacesAndBalanceErrorAsync,
  sendEmailBalanceNotUpdatedErrorAsync,
  sendEmailWalletFundsNotAddedErrorAsync,
  sendEmailToAdminCloseAccountRequestAsync,
  sendEmailUpdateLatestBookingsAndChildrensParentEmailAsync,
  dbManageSendEmailBookingConfirmationAsync,
  dbManageSendEmailBookingCancellationConfirmationAsync,
} from "./send-email.thunks";

const INITIAL_STATE = {
  sendEmailIsLoading: false,
  sendEmailStatusCode: "",
  sendEmailError: null,
};

const handleAsyncAction = (builder, asyncAction) => {
  builder
    .addCase(asyncAction.pending, (state) => {
      state.sendEmailIsLoading = true;
    })
    .addCase(asyncAction.fulfilled, (state, action) => {
      state.sendEmailIsLoading = false;
      state.sendEmailStatusCode = action.payload;
      state.sendEmailError = null;
    })
    .addCase(asyncAction.rejected, (state, action) => {
      state.sendEmailIsLoading = false;
      state.sendEmailStatusCode = "";
      state.sendEmailError = action.payload;
    });
};

export const sendEmailSlice = createSlice({
  name: "sendEmail",
  initialState: INITIAL_STATE,
  reducers: {
    resetSendEmailState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectSendEmailSelectors: createSelector(
      (state) => state.sendEmailIsLoading,
      (state) => state.sendEmailStatusCode,
      (state) => state.sendEmailError,
      (sendEmailIsLoading, sendEmailStatusCode, sendEmailError) => {
        return {
          sendEmailIsLoading,
          sendEmailStatusCode,
          sendEmailError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    handleAsyncAction(builder, sendEmailBookingConfirmationAsync);
    handleAsyncAction(builder, sendEmailBookingNotAddedToDatabaseAsync);
    handleAsyncAction(builder, sendEmailResetSessionSpacesErrorAsync);
    handleAsyncAction(builder, sendEmailBookingCancellationConfirmationAsync);
    handleAsyncAction(builder, sendEmailResetSessionSpacesAndBalanceErrorAsync);
    handleAsyncAction(builder, sendEmailBalanceNotUpdatedErrorAsync);
    handleAsyncAction(builder, sendEmailWalletFundsNotAddedErrorAsync);
    handleAsyncAction(builder, sendEmailToAdminCloseAccountRequestAsync);
    handleAsyncAction(
      builder,
      sendEmailUpdateLatestBookingsAndChildrensParentEmailAsync
    );
    handleAsyncAction(builder, dbManageSendEmailBookingConfirmationAsync);
    handleAsyncAction(
      builder,
      dbManageSendEmailBookingCancellationConfirmationAsync
    );
  },
});

export const { resetSendEmailState } = sendEmailSlice.actions;
export const { selectSendEmailSelectors } = sendEmailSlice.selectors;

export const sendEmailReducer = sendEmailSlice.reducer;
