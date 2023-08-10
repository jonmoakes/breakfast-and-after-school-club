import { createSlice } from "@reduxjs/toolkit";

const defaultCardPaymentResult = {
  error: "",
  warning: "",
  showPrePayButton: false,
};
const initialState = {
  cardInputResult: defaultCardPaymentResult,
};

const cardInputResultSlice = createSlice({
  name: "cardInputResult",
  initialState,
  reducers: {
    setCardInputResult(state, action) {
      state.cardInputResult = action.payload;
    },
    resetCardInputState: () => {
      return initialState;
    },
  },
});

export const { setCardInputResult, resetCardInputState } =
  cardInputResultSlice.actions;

export const cardInputResultReducer = cardInputResultSlice.reducer;
