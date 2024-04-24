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
    newMorningSessionPrice,
    newAfternoonShortSessionPrice,
    newAfternoonLongSessionPrice,
    newMorningAndAfternoonShortSessionPrice,
    newMorningAndAfternoonLongSessionPrice,
  } = useSelector(selectDatabaseManagementSelectors);

  return {
    databaseManagementIsLoading,
    databaseManagementResult,
    databaseManagementError,
    newMorningBookingClosingTime,
    newAfternoonBookingClosingTime,
    newMorningSessionTime,
    newAfternoonShortSessionTime,
    newAfternoonLongSessionTime,
    newMorningSessionPrice,
    newAfternoonShortSessionPrice,
    newAfternoonLongSessionPrice,
    newMorningAndAfternoonShortSessionPrice,
    newMorningAndAfternoonLongSessionPrice,
  };
};

export default useGetDatabaseManagementSelectors;
