import { useCallback } from "react";
import { useSelector } from "react-redux";

import {
  selectUpdateBookingsDoc,
  selectUpdateSessionSpacesDoc,
  selectUpdateUserDocBalance,
} from "../../../store/user-booking-to-delete/user-booking-to-delete.selector";

const useReturnLogic = () => {
  const updateBookingsDoc = useSelector(selectUpdateBookingsDoc);
  const updateUserDocBalance = useSelector(selectUpdateUserDocBalance);
  const updateSessionSpacesDoc = useSelector(selectUpdateSessionSpacesDoc);

  const updateBookingsResult = updateBookingsDoc.result;
  const updateBookingsError = updateBookingsDoc.error;

  const updateBalanceResult = updateUserDocBalance.result;
  const updateBalanceError = updateUserDocBalance.error;

  const updateSessionSpacesResult = updateSessionSpacesDoc.result;
  const updateSessionSpacesError = updateSessionSpacesDoc.error;

  const noActionsFiredYet = useCallback(() => {
    return !updateBookingsResult &&
      !updateBookingsError &&
      !updateBalanceResult &&
      !updateBalanceError &&
      !updateSessionSpacesResult &&
      !updateSessionSpacesError
      ? true
      : false;
  }, [
    updateBalanceError,
    updateBookingsError,
    updateBookingsResult,
    updateBalanceResult,
    updateSessionSpacesResult,
    updateSessionSpacesError,
  ]);

  return { noActionsFiredYet };
};

export default useReturnLogic;
