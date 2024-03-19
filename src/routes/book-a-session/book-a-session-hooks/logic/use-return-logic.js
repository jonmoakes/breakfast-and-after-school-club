import { useCallback } from "react";
import { useSelector } from "react-redux";

import useSessionLogic from "./use-session-logic";

import { selectCurrentUserSelectors } from "../../../../store/user/user.slice";

const useReturnLogic = () => {
  const {
    updateBalanceResult,
    updateBalanceError,
    updateSessionError,
    updateSessionResult,
    resetSessionResult,
    resetSessionError,
    addSessionBookingInfoResult,
    addSessionBookingInfoError,
  } = useSessionLogic();
  const { currentUserWalletBalanceResult, currentUserWalletBalanceError } =
    useSelector(selectCurrentUserSelectors);

  const noActionsFiredYet = useCallback(() => {
    return !updateSessionResult &&
      !updateSessionError &&
      !updateBalanceResult &&
      !updateBalanceError &&
      !resetSessionResult &&
      !resetSessionError &&
      !addSessionBookingInfoResult &&
      !addSessionBookingInfoError &&
      !currentUserWalletBalanceResult &&
      !currentUserWalletBalanceError
      ? true
      : false;
  }, [
    resetSessionError,
    resetSessionResult,
    updateBalanceError,
    updateBalanceResult,
    updateSessionError,
    updateSessionResult,
    addSessionBookingInfoResult,
    addSessionBookingInfoError,
    currentUserWalletBalanceResult,
    currentUserWalletBalanceError,
  ]);

  return { noActionsFiredYet };
};

export default useReturnLogic;
