import { useCallback } from "react";

import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";

const useReturnLogic = () => {
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
      !addBookingError
      ? true
      : false;
  }, [
    updateBalanceResult,
    updateBalanceError,
    updateSessionSpacesResult,
    updateSessionSpacesError,
    addBookingResult,
    addBookingError,
  ]);

  return { noActionsFiredYet };
};

export default useReturnLogic;
