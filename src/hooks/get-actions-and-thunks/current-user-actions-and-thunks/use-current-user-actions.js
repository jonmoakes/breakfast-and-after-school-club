import { useDispatch } from "react-redux";

import {
  resetCurrentUserErrorMessage,
  resetCurrentUserWalletBalanceError,
  resetCurrentUserWalletBalanceResult,
  resetWalletFundsToAdd,
  setWalletFundsToAdd,
  setWalletBalance,
} from "../../../store/user/user.slice";

const useCurrentUserActions = () => {
  const dispatch = useDispatch();

  const dispatchResetCurrentUserErrorMessage = () => {
    dispatch(resetCurrentUserErrorMessage());
  };

  const dispatchResetCurrentUserWalletBalanceResult = () => {
    dispatch(resetCurrentUserWalletBalanceResult());
  };

  const dispatchResetCurrentUserWalletBalanceError = () => {
    dispatch(resetCurrentUserWalletBalanceError());
  };

  const dispatchSetWalletFundsToAdd = (value) => {
    dispatch(setWalletFundsToAdd(value));
  };

  const dispatchResetWalletFundsToAdd = () => {
    dispatch(resetWalletFundsToAdd());
  };

  const dispatchSetWalletBalance = (walletBalance) => {
    dispatch(setWalletBalance(walletBalance));
  };

  return {
    dispatchResetCurrentUserErrorMessage,
    dispatchResetCurrentUserWalletBalanceResult,
    dispatchResetCurrentUserWalletBalanceError,
    dispatchSetWalletFundsToAdd,
    dispatchResetWalletFundsToAdd,
    dispatchSetWalletBalance,
  };
};

export default useCurrentUserActions;
