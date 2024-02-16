import { createSelector, createSlice } from "@reduxjs/toolkit";

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
  selectors: {
    selectCardInputResult: createSelector(
      (state) => state.cardInputResult,
      (cardInputResult) => {
        return {
          cardInputResult,
        };
      }
    ),
  },
});

export const { setCardInputResult, resetCardInputState } =
  cardInputResultSlice.actions;
export const { selectCardInputResult } = cardInputResultSlice.selectors;

export const cardInputResultReducer = cardInputResultSlice.reducer;
