import { useSelector } from "react-redux";

import { selectDatabaseManagementSelectors } from "../../store/database-management/database-management.slice";

const useGetDatabaseManagementSelectors = () => {
  const {
    databaseManagementIsLoading,
    newMorningBookingClosingTime,
    databaseManagementResult,
    databaseManagementError,
  } = useSelector(selectDatabaseManagementSelectors);

  return {
    databaseManagementIsLoading,
    newMorningBookingClosingTime,
    databaseManagementResult,
    databaseManagementError,
  };
};

export default useGetDatabaseManagementSelectors;
