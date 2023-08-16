import { useCallback } from "react";
import { useSelector } from "react-redux";

import {
  selectResetSessionDoc,
  selectUpdateSessionDoc,
  selectUpdateUserDocBalance,
} from "../../../../store/book-session/book-session.selector";

const useReturnLogic = () => {
  const updateSessionDoc = useSelector(selectUpdateSessionDoc);
  const updateUserDocBalance = useSelector(selectUpdateUserDocBalance);
  const resetSessionDoc = useSelector(selectResetSessionDoc);

  const updateSessionResult = updateSessionDoc.result;
  const updateSessionError = updateSessionDoc.error;

  const updateBalanceResult = updateUserDocBalance.result;
  const updateBalanceError = updateUserDocBalance.error;

  const resetSessionResult = resetSessionDoc.result;
  const resetSessionError = resetSessionDoc.error;

  const noActionsFiredYet = useCallback(() => {
    return !updateSessionResult &&
      !updateSessionError &&
      updateBalanceResult &&
      !updateBalanceError &&
      !resetSessionResult &&
      !resetSessionError
      ? true
      : false;
  }, [
    resetSessionError,
    resetSessionResult,
    updateBalanceError,
    updateBalanceResult,
    updateSessionError,
    updateSessionResult,
  ]);

  return { noActionsFiredYet };
};

export default useReturnLogic;
