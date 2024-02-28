import { useCallback } from "react";
import { useSelector } from "react-redux";

import { selectBookSessionSelectors } from "../../../store/book-session/book-session.slice";
import {
  selectWalletBalanceResult,
  selectWalletBalanceError,
} from "../../../store/user/user.selector";

const useReturnLogic = () => {
  const {
    updateSessionDoc,
    updateUserDocBalance,
    resetSessionDoc,
    addSessionBookingInfo,
  } = useSelector(selectBookSessionSelectors);

  const updateSessionResult = updateSessionDoc.result;
  const updateSessionError = updateSessionDoc.error;

  const updateBalanceResult = updateUserDocBalance.result;
  const updateBalanceError = updateUserDocBalance.error;

  const resetSessionResult = resetSessionDoc.result;
  const resetSessionError = resetSessionDoc.error;

  const addSessionBookingInfoResult = addSessionBookingInfo.result;
  const addSessionBookingInfoError = addSessionBookingInfo.error;

  const walletBalanceResult = useSelector(selectWalletBalanceResult);
  const walletBalanceError = useSelector(selectWalletBalanceError);

  const noActionsFiredYet = useCallback(() => {
    return !updateSessionResult &&
      !updateSessionError &&
      !updateBalanceResult &&
      !updateBalanceError &&
      !resetSessionResult &&
      !resetSessionError &&
      !addSessionBookingInfoResult &&
      !addSessionBookingInfoError &&
      !walletBalanceResult &&
      !walletBalanceError
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
    walletBalanceResult,
    walletBalanceError,
  ]);

  return { noActionsFiredYet };
};

export default useReturnLogic;
