import { useMemo } from "react";
import { format } from "date-fns";

import useGetBookedSessionsOwnerSelectors from "../../../hooks/get-selectors/use-get-booked-sessions-owner-selectors";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

import { TABLE_COLUMNS } from "../table-columns";

const useBookedSessionsOwnerVariables = () => {
  const {
    showAllDates,
    sortedOwnerBookings,
    bookedSessionsOwnerIsLoading,
    bookedSessionsOwner,
    bookedSessionsOwnerError,
  } = useGetBookedSessionsOwnerSelectors();
  const { currentUser, databaseId, bookedSessionsCollectionId } =
    useGetCurrentUserSelectors();

  const data = useMemo(
    () =>
      !showAllDates
        ? sortedOwnerBookings.filter((row) => {
            const rowDate = row.date;
            const formattedTodaysDate = format(new Date(), "yyyy-MM-dd");
            return rowDate === formattedTodaysDate;
          })
        : sortedOwnerBookings,
    [sortedOwnerBookings, showAllDates]
  );

  const columns = useMemo(() => TABLE_COLUMNS, []);

  const initialState = useMemo(
    () => ({ sortBy: [{ id: "date", desc: true }], pageSize: 30 }),
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
  };
};

export default useBookedSessionsOwnerVariables;
