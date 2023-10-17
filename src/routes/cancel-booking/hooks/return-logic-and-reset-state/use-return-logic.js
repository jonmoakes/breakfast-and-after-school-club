import { useCallback } from "react";
import { useSelector } from "react-redux";

import {
  selectUpdateBookingsDoc,
  selectUpdateUserDocBalance,
} from "../../../../store/user-booking-to-delete/user-booking-to-delete.selector";

const useReturnLogic = () => {
  const updateBookingsDoc = useSelector(selectUpdateBookingsDoc);
  const updateUserDocBalance = useSelector(selectUpdateUserDocBalance);

  const updateBookingsResult = updateBookingsDoc.result;
  const updateBookingsError = updateBookingsDoc.error;

  const updateBalanceResult = updateUserDocBalance.result;
  const updateBalanceError = updateUserDocBalance.error;

  const noActionsFiredYet = useCallback(() => {
    return !updateBookingsResult &&
      !updateBookingsError &&
      !updateBalanceResult &&
      !updateBalanceError
      ? true
      : false;
  }, [
    updateBalanceError,
    updateBookingsError,
    updateBookingsResult,
    updateBalanceResult,
  ]);

  return { noActionsFiredYet };
};

export default useReturnLogic;
