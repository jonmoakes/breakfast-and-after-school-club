import { useCallback } from "react";
import { useSelector } from "react-redux";

import { selectUserBookingToDeleteSelectors } from "../../../store/user-booking-to-delete/user-booking-to-delete.slice";
import { selectCurrentUserSelectors } from "../../../store/user/user.slice";

const useReturnLogic = () => {
  const { updateBookingsDoc, updateUserDocBalance, updateSessionSpacesDoc } =
    useSelector(selectUserBookingToDeleteSelectors);
  const { currentUserWalletBalanceResult, currentUserWalletBalanceError } =
    useSelector(selectCurrentUserSelectors);

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
      !updateSessionSpacesError &&
      !currentUserWalletBalanceResult &&
      !currentUserWalletBalanceError
      ? true
      : false;
  }, [
    updateBalanceError,
    updateBookingsError,
    updateBookingsResult,
    updateBalanceResult,
    updateSessionSpacesResult,
    updateSessionSpacesError,
    currentUserWalletBalanceResult,
    currentUserWalletBalanceError,
  ]);

  return { noActionsFiredYet };
};

export default useReturnLogic;
