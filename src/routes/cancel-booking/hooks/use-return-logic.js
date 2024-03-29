import { useCallback } from "react";
import { useSelector } from "react-redux";

import { selectUserBookingToDeleteSelectors } from "../../../store/user-booking-to-delete/user-booking-to-delete.slice";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

const useReturnLogic = () => {
  const { updateBookingsDoc, updateUserDocBalance, updateSessionSpacesDoc } =
    useSelector(selectUserBookingToDeleteSelectors);
  const { currentUserWalletBalanceResult, currentUserWalletBalanceError } =
    useGetCurrentUserSelectors();

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
