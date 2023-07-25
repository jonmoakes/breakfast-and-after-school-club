import { createSlice } from "@reduxjs/toolkit";

const defaultCardPaymentResult = {
  error: "",
  warning: "",
  showButton: false,
};
const initialState = {
  cardInputResult: defaultCardPaymentResult,
  paymentIsProcessing: false,
};

const cardInputResultSlice = createSlice({
  name: "cardInputResult",
  initialState,
  reducers: {
    setCardInputResult(state, action) {
      state.cardInputResult = action.payload;
    },
    startPaymentIsProcessing(state) {
      state.paymentIsProcessing = true;
    },
    stopPaymentIsProcessing(state) {
      state.paymentIsProcessing = false;
    },
    clearCardInputResult(state) {
      state.cardInputResult = defaultCardPaymentResult;
    },
  },
});

export const {
  setCardInputResult,
  startPaymentIsProcessing,
  stopPaymentIsProcessing,
  clearCardInputResult,
} = cardInputResultSlice.actions;

export const cardInputResultReducer = cardInputResultSlice.reducer;
