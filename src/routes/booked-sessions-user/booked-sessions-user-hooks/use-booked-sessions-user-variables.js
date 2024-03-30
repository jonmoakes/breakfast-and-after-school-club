import { useMemo } from "react";

import useGetBookedSessionsUserSelectors from "../../../hooks/get-selectors/use-get-booked-sessions-user-selectors";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

import { TABLE_COLUMNS } from "../table-columns";

const useBookedSessionsUserVariables = () => {
  const {
    bookedSessionsUserShowAllDates,
    sortedUserBookings,
    bookedSessionsUserIsLoading,
    bookedSessionsUser,
    bookedSessionsUserError,
  } = useGetBookedSessionsUserSelectors();
  const { currentUser, databaseId, bookedSessionsCollectionId } =
    useGetCurrentUserSelectors();

  const columns = useMemo(() => TABLE_COLUMNS, []);

  const setTimeToMidnight = (date) => {
    date.setHours(0, 0, 0, 0);
  };

  const data = useMemo(
    () =>
      !bookedSessionsUserShowAllDates
        ? sortedUserBookings.filter((row) => {
            const rowDate = new Date(row.date);
            setTimeToMidnight(rowDate);

            const currentDate = new Date();
            setTimeToMidnight(currentDate);

            return rowDate >= currentDate;
          })
        : sortedUserBookings,
    [sortedUserBookings, bookedSessionsUserShowAllDates]
  );

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
    bookedSessionsUserIsLoading,
    bookedSessionsUser,
    bookedSessionsUserError,
  };
};

export default useBookedSessionsUserVariables;
