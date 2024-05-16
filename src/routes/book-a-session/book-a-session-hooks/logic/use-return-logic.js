import { useCallback } from "react";

import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";
import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";

const useReturnLogic = () => {
  const { currentUserWalletBalanceResult, currentUserWalletBalanceError } =
    useGetCurrentUserSelectors();
  const {
    updateBalanceResult,
    updateBalanceError,
    addBookingResult,
    addBookingError,
    updateSessionSpacesResult,
    updateSessionSpacesError,
  } = useGetDatabaseManagementSelectors();

  const noActionsFiredYet = useCallback(() => {
    return !updateBalanceResult &&
      !updateBalanceError &&
      !updateSessionSpacesResult &&
      !updateSessionSpacesError &&
      !addBookingResult &&
      !addBookingError &&
      !currentUserWalletBalanceResult &&
      !currentUserWalletBalanceError
      ? true
      : false;
  }, [
    updateBalanceResult,
    updateBalanceError,
    updateSessionSpacesResult,
    updateSessionSpacesError,
    addBookingResult,
    addBookingError,
    currentUserWalletBalanceResult,
    currentUserWalletBalanceError,
  ]);

  return { noActionsFiredYet };
};

export default useReturnLogic;
