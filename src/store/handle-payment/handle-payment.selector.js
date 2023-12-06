import { createSelector } from "reselect";

const selectHandlePaymentReducer = (state) => state.handlePayment;

export const selectHandlePaymentIsLoading = createSelector(
  [selectHandlePaymentReducer],
  (handlePaymentSlice) => handlePaymentSlice.isLoading
);

export const selectClientSecret = createSelector(
  [selectHandlePaymentReducer],
  (handlePaymentSlice) => handlePaymentSlice.client_secret
);

export const selectHandlePaymentError = createSelector(
  [selectHandlePaymentReducer],
  (handlePaymentSlice) => handlePaymentSlice.error
);

export const selectPaymentResult = createSelector(
  [selectHandlePaymentReducer],
  (handlePaymentSlice) => handlePaymentSlice.paymentResult
);

export const selectWalletFundsAddedResult = createSelector(
  [selectHandlePaymentReducer],
  (handlePaymentSlice) => handlePaymentSlice.walletFundsAddedResult
);

export const selectShowConfirmButton = createSelector(
  [selectHandlePaymentReducer],
  (handlePaymentSlice) => handlePaymentSlice.showConfirmButton
);
