import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  walletFundsToAdd: 0,
};

export const walletFundsToAddSlice = createSlice({
  name: "walletFundsToAdd",
  initialState: INITIAL_STATE,
  reducers: {
    setWalletFundsToAdd(state, action) {
      state.walletFundsToAdd = action.payload;
    },
    resetWalletFundsToAddState: () => {
      return INITIAL_STATE;
    },
  },
});

export const { setWalletFundsToAdd, resetWalletFundsToAddState } =
  walletFundsToAddSlice.actions;

export const walletFundsToAddReducer = walletFundsToAddSlice.reducer;
