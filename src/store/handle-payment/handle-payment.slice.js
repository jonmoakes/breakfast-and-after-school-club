import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  getClientSecretAsync,
  getPaymentResultObjectAsync,
  addWalletFundsToDatabaseAsync,
} from "./handle-payment.thunks";

const initialState = {
  handlePaymentIsLoading: false,
  client_secret: "",
  handlePaymentError: null,
  showConfirmButton: false,
  userHasConfirmedPayment: false,
  paymentResultObject: {},
  walletFundsAddedResult: "",
};

const handlePaymentSlice = createSlice({
  name: "handlePayment",
  initialState,
  reducers: {
    resetClientSecret(state) {
      state.client_secret = "";
    },
    resetPreResultHandlePaymentState(state) {
      state.handlePaymentIsLoading = false;
      state.client_secret = "";
      state.handlePaymentError = null;
      state.userHasConfirmedPayment = false;
      state.showConfirmButton = false;
    },
    resetAllHandlePaymentState: () => {
      return initialState;
    },
  },
  selectors: {
    selectHandlePaymentSelectors: createSelector(
      (state) => state.handlePaymentIsLoading,
      (state) => state.client_secret,
      (state) => state.handlePaymentError,
      (state) => state.userHasConfirmedPayment,
      (state) => state.paymentResultObject,
      (state) => state.walletFundsAddedResult,
      (state) => state.showConfirmButton,
      (
        handlePaymentIsLoading,
        client_secret,
        handlePaymentError,
        userHasConfirmedPayment,
        paymentResultObject,
        walletFundsAddedResult,
        showConfirmButton
      ) => {
        return {
          handlePaymentIsLoading,
          client_secret,
          handlePaymentError,
          userHasConfirmedPayment,
          paymentResultObject,
          walletFundsAddedResult,
          showConfirmButton,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClientSecretAsync.pending, (state) => {
        state.handlePaymentIsLoading = true;
      })
      .addCase(getClientSecretAsync.fulfilled, (state, action) => {
        state.handlePaymentIsLoading = false;
        state.client_secret = action.payload;
        state.showConfirmButton = true;
        state.handlePaymentError = null;
      })
      .addCase(getClientSecretAsync.rejected, (state, action) => {
        state.handlePaymentIsLoading = false;
        state.client_secret = "";
        state.handlePaymentError = action.payload;
        state.showConfirmButton = false;
      })
      .addCase(getPaymentResultObjectAsync.pending, (state) => {
        state.handlePaymentIsLoading = true;
        state.userHasConfirmedPayment = true;
      })
      .addCase(getPaymentResultObjectAsync.fulfilled, (state, action) => {
        state.handlePaymentIsLoading = false;
        state.client_secret = "";
        state.paymentResultObject = action.payload;
        state.showConfirmButton = false;
      })
      .addCase(getPaymentResultObjectAsync.rejected, (state, action) => {
        state.handlePaymentIsLoading = false;
        state.client_secret = "";
        state.handlePaymentError = action.payload;
        state.showConfirmButton = false;
      })
      .addCase(addWalletFundsToDatabaseAsync.pending, (state) => {
        state.handlePaymentIsLoading = true;
        state.paymentResultObject = {};
      })
      .addCase(addWalletFundsToDatabaseAsync.fulfilled, (state) => {
        state.handlePaymentIsLoading = false;
        state.walletFundsAddedResult = "succeeded";
      })
      .addCase(addWalletFundsToDatabaseAsync.rejected, (state, action) => {
        state.handlePaymentIsLoading = false;
        state.walletFundsAddedResult = "rejected";
        state.handlePaymentError = action.payload;
      });
  },
});

export const {
  resetClientSecret,
  resetPreResultHandlePaymentState,
  resetAllHandlePaymentState,
} = handlePaymentSlice.actions;
export const { selectHandlePaymentSelectors } = handlePaymentSlice.selectors;

export const handlePaymentReducer = handlePaymentSlice.reducer;
