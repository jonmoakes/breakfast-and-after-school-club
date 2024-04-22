import { useSelector } from "react-redux";

import { selectDatabaseManagementSelectors } from "../../store/database-management/database-management.slice";

const useGetDatabaseManagementSelectors = () => {
  const {
    databaseManagementIsLoading,
    newMorningBookingClosingTime,
    databaseManagementError,
  } = useSelector(selectDatabaseManagementSelectors);

  return {
    databaseManagementIsLoading,
    newMorningBookingClosingTime,
    databaseManagementError,
  };
};

export default useGetDatabaseManagementSelectors;
