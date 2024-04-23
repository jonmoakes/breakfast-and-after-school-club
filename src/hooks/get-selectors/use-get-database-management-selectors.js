import { useSelector } from "react-redux";

import { selectDatabaseManagementSelectors } from "../../store/database-management/database-management.slice";

const useGetDatabaseManagementSelectors = () => {
  const {
    databaseManagementIsLoading,
    databaseManagementResult,
    databaseManagementError,
    newMorningBookingClosingTime,
    newAfternoonBookingClosingTime,
    newMorningSessionTime,
    newAfternoonShortSessionTime,
    newAfternoonLongSessionTime,
  } = useSelector(selectDatabaseManagementSelectors);

  return {
    databaseManagementIsLoading,
    newMorningBookingClosingTime,
    newAfternoonBookingClosingTime,
    newMorningSessionTime,
    newAfternoonShortSessionTime,
    newAfternoonLongSessionTime,
    databaseManagementResult,
    databaseManagementError,
  };
};

export default useGetDatabaseManagementSelectors;
