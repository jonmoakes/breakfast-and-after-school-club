import { createSelector } from "reselect";

const selectWalletReducer = (state) => state.wallet;

export const selectWalletFunds = createSelector(
  [selectWalletReducer],
  (walletSlice) => walletSlice.walletFunds
);
