import { useCallback } from "react";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useGetUserBookingToDeleteSelectors from "../../../hooks/get-selectors/use-get-user-booking-to-delete-selectors";

const useReturnLogic = () => {
  const {
    updateBookingsResult,
    updateBookingsError,
    updateBalanceResult,
    updateBalanceError,
    updateSessionSpacesResult,
    updateSessionSpacesError,
  } = useGetUserBookingToDeleteSelectors();
  const { currentUserWalletBalanceResult, currentUserWalletBalanceError } =
    useGetCurrentUserSelectors();

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
