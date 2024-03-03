import { createSelector, createSlice } from "@reduxjs/toolkit";

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
  selectors: {
    selectWalletFundsToAddSelectors: createSelector(
      (state) => state.walletFundsToAdd,
      (walletFundsToAdd) => {
        return {
          walletFundsToAdd,
        };
      }
    ),
  },
});

export const { setWalletFundsToAdd, resetWalletFundsToAddState } =
  walletFundsToAddSlice.actions;
export const { selectWalletFundsToAddSelectors } =
  walletFundsToAddSlice.selectors;

export const walletFundsToAddReducer = walletFundsToAddSlice.reducer;
