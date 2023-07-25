import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  walletFunds: 0,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState: INITIAL_STATE,
  reducers: {
    setWalletFunds(state, action) {
      state.walletFunds = action.payload;
    },
    clearWalletFunds(state) {
      state.walletFunds = 0;
    },
  },
});

export const { setWalletFunds, clearWalletFunds } = walletSlice.actions;

export const walletReducer = walletSlice.reducer;
