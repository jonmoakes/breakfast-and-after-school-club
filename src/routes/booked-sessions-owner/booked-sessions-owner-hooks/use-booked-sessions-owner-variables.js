import { useMemo } from "react";

import useGetBookedSessionsOwnerSelectors from "../../../hooks/get-selectors/use-get-booked-sessions-owner-selectors";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

import { BOOKED_SESSIONS_OWNER_TABLE_COLUMNS } from "../../../components/tables/booked-sessions-owner-table-columns";

import { defaultTableSize } from "../../../components/tables/default-table-size";

const useBookedSessionsOwnerVariables = () => {
  const {
    bookedSessionsOwnerShowAllDates,
    sortedOwnerBookings,
    bookedSessionsOwnerIsLoading,
    bookedSessionsOwner,
    bookedSessionsOwnerError,
    updateRegistrationError,
  } = useGetBookedSessionsOwnerSelectors();
  const { currentUser, databaseId, bookedSessionsCollectionId } =
    useGetCurrentUserSelectors();

  const setTimeToMidnight = (date) => {
    date.setHours(0, 0, 0, 0);
  };

  const data = useMemo(
    () =>
      !bookedSessionsOwnerShowAllDates
        ? sortedOwnerBookings.filter((row) => {
            const rowDate = row.dateAsDateObjectForSorting;
            const currentDate = new Date();
            setTimeToMidnight(rowDate);
            setTimeToMidnight(currentDate);
            const rowDateTime = rowDate.getTime();
            const currentDateTime = currentDate.getTime();
            const bookingsOnTodaysDate = rowDateTime === currentDateTime;

            return bookingsOnTodaysDate;
          })
        : sortedOwnerBookings,
    [sortedOwnerBookings, bookedSessionsOwnerShowAllDates]
  );

  const bookedSessionsOwnerPageSizeFromLocalStorage = localStorage.getItem(
    "bookedSessionsOwnerChosenTablePageSize"
  );

  const columns = useMemo(() => BOOKED_SESSIONS_OWNER_TABLE_COLUMNS, []);

  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "dateAsDateObjectForSorting", desc: true }],
      pageSize: bookedSessionsOwnerPageSizeFromLocalStorage
        ? Number(bookedSessionsOwnerPageSizeFromLocalStorage)
        : defaultTableSize,
    }),
    [bookedSessionsOwnerPageSizeFromLocalStorage]
  );

  return {
    data,
    columns,
    initialState,
    currentUser,
    databaseId,
    bookedSessionsCollectionId,
    bookedSessionsOwnerIsLoading,
    bookedSessionsOwner,
    bookedSessionsOwnerError,
    bookedSessionsOwnerShowAllDates,
    updateRegistrationError,
  };
};

export default useBookedSessionsOwnerVariables;
