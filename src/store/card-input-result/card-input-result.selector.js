import { createSelector } from "reselect";

const selectCardInputResultReducer = (state) => state.cardInputResult;

export const selectCardInputResult = createSelector(
  [selectCardInputResultReducer],
  (cardInputResultSlice) => cardInputResultSlice.cardInputResult
);

export const selectPaymentIsProcessing = createSelector(
  [selectCardInputResultReducer],
  (cardInputResultSlice) => cardInputResultSlice.paymentIsProcessing
);
