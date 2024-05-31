import { useMemo } from "react";
import useGetBookedSessionsUserSelectors from "../../../hooks/get-selectors/use-get-booked-sessions-user-selectors";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

import { TABLE_COLUMNS } from "../table-columns";

import { defaultTableSize } from "../../../components/tables/default-table-size";

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

  const setTimeToMidnight = (date) => {
    date.setHours(0, 0, 0, 0);
  };

  const data = useMemo(
    () =>
      !bookedSessionsUserShowAllDates
        ? sortedUserBookings.filter((row) => {
            const rowDate = row.dateAsDateObjectForSorting;
            const currentDate = new Date();
            setTimeToMidnight(rowDate);
            setTimeToMidnight(currentDate);
            const rowDateTime = rowDate.getTime();

            const currentDateTime = currentDate.getTime();
            const bookingsOnOrAfterTodaysDate = rowDateTime >= currentDateTime;
            return bookingsOnOrAfterTodaysDate;
          })
        : sortedUserBookings,
    [sortedUserBookings, bookedSessionsUserShowAllDates]
  );

  const bookedSessionsUserPageSizeFromLocalStorage = localStorage.getItem(
    "bookedSessionsUserChosenTablePageSize"
  );

  const columns = useMemo(() => TABLE_COLUMNS, []);
  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "dateAsDateObjectForSorting", desc: true }],
      pageSize: bookedSessionsUserPageSizeFromLocalStorage
        ? Number(bookedSessionsUserPageSizeFromLocalStorage)
        : defaultTableSize,
    }),
    [bookedSessionsUserPageSizeFromLocalStorage]
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
    bookedSessionsUserShowAllDates,
  };
};

export default useBookedSessionsUserVariables;
