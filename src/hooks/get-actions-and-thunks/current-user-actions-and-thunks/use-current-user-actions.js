import { useDispatch } from "react-redux";

import {
  resetCurrentUserErrorMessage,
  resetCurrentUserWalletBalanceError,
  resetCurrentUserWalletBalanceResult,
  resetWalletFundsToAdd,
  setSchoolCodeForSocialLogin,
  setWalletFundsToAdd,
  setWalletBalance,
  resetSchoolCodeForSocialLogin,
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

  const dispatchSetSchoolCodeForSocialLogin = (event) => {
    dispatch(setSchoolCodeForSocialLogin(event.target.value));
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

  const dispatchResetSchoolCodeForSocialLogin = () => {
    dispatch(resetSchoolCodeForSocialLogin());
  };

  return {
    dispatchResetCurrentUserErrorMessage,
    dispatchResetCurrentUserWalletBalanceResult,
    dispatchResetCurrentUserWalletBalanceError,
    dispatchSetSchoolCodeForSocialLogin,
    dispatchSetWalletFundsToAdd,
    dispatchResetWalletFundsToAdd,
    dispatchSetWalletBalance,
    dispatchResetSchoolCodeForSocialLogin,
  };
};

export default useCurrentUserActions;
