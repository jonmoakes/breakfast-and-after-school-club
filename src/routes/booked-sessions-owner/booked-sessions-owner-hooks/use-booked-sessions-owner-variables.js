import { useMemo } from "react";

import useGetBookedSessionsOwnerSelectors from "../../../hooks/get-selectors/use-get-booked-sessions-owner-selectors";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

import { TABLE_COLUMNS } from "../table-columns";

const useBookedSessionsOwnerVariables = () => {
  const {
    bookedSessionsOwnerShowAllDates,
    sortedOwnerBookings,
    bookedSessionsOwnerIsLoading,
    bookedSessionsOwner,
    bookedSessionsOwnerError,
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

  const columns = useMemo(() => TABLE_COLUMNS, []);
  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "dateAsDateObjectForSorting", desc: true }],
      pageSize: 30,
    }),
    []
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
  };
};

export default useBookedSessionsOwnerVariables;
