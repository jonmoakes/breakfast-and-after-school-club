import { createSelector } from "reselect";

const selectWalletFundsToAddReducer = (state) => state.walletFundsToAdd;

export const selectWalletFundsToAdd = createSelector(
  [selectWalletFundsToAddReducer],
  (walletFundsToAddSlice) => walletFundsToAddSlice.walletFundsToAdd
);
