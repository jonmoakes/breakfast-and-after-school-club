import { useCallback } from "react";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useGetUserBookingToDeleteSelectors from "../../../hooks/get-selectors/use-get-user-booking-to-delete-selectors";
import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";

const useReturnLogic = () => {
  const { updateBookingsResult, updateBookingsError } =
    useGetUserBookingToDeleteSelectors();
  const { currentUserWalletBalanceResult, currentUserWalletBalanceError } =
    useGetCurrentUserSelectors();
  const {
    updateSessionSpacesResult,
    updateSessionSpacesError,
    updateBalanceResult,
    updateBalanceError,
  } = useGetDatabaseManagementSelectors();

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
