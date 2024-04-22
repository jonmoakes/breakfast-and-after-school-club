import { useSelector } from "react-redux";

import { selectDatabaseManagementSelectors } from "../../store/database-management/database-management.slice";

const useGetDatabaseManagementSelectors = () => {
  const {
    databaseManagementIsLoading,
    newMorningBookingClosingTime,
    newAfternoonBookingClosingTime,
    databaseManagementResult,
    databaseManagementError,
  } = useSelector(selectDatabaseManagementSelectors);

  return {
    databaseManagementIsLoading,
    newMorningBookingClosingTime,
    newAfternoonBookingClosingTime,
    databaseManagementResult,
    databaseManagementError,
  };
};

export default useGetDatabaseManagementSelectors;
