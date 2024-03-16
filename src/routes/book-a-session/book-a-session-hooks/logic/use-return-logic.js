import { useCallback } from "react";
import { useSelector } from "react-redux";

import useGetBookSessionSelectors from "../../../../hooks/get-selectors/use-get-book-session-selectors";

import { selectCurrentUserSelectors } from "../../../../store/user/user.slice";

const useReturnLogic = () => {
  const {
    updateSessionDoc,
    updateUserDocBalance,
    resetSessionDoc,
    addSessionBookingInfo,
  } = useGetBookSessionSelectors();

  const { currentUserWalletBalanceResult, currentUserWalletBalanceError } =
    useSelector(selectCurrentUserSelectors);

  const updateSessionResult = updateSessionDoc.result;
  const updateSessionError = updateSessionDoc.error;

  const updateBalanceResult = updateUserDocBalance.result;
  const updateBalanceError = updateUserDocBalance.error;

  const resetSessionResult = resetSessionDoc.result;
  const resetSessionError = resetSessionDoc.error;

  const addSessionBookingInfoResult = addSessionBookingInfo.result;
  const addSessionBookingInfoError = addSessionBookingInfo.error;

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
