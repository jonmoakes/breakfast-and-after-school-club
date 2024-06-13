import { useMemo } from "react";

import useGetBookedSessionsUserSelectors from "../../../hooks/get-selectors/use-get-booked-sessions-user-selectors";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

import { BOOKED_SESSIONS_USER_TABLE_COLUMNS } from "../../../components/tables/booked-sessions-user-table-columns";

import { defaultTableSize } from "../../../components/tables/default-table-size";

const useBookedSessionsUserAllBookingsVariables = () => {
  const {
    sortedUserBookings,
    bookedSessionsUserIsLoading,
    bookedSessionsUser,
    bookedSessionsUserError,
  } = useGetBookedSessionsUserSelectors();
  const { currentUser, databaseId, bookedSessionsCollectionId } =
    useGetCurrentUserSelectors();

  const data = useMemo(() => sortedUserBookings, [sortedUserBookings]);

  const bookedSessionsUserAllBookingsPageSizeFromLocalStorage =
    localStorage.getItem("bookedSessionsUserAllBookingsChosenTablePageSize");

  const columns = useMemo(() => BOOKED_SESSIONS_USER_TABLE_COLUMNS, []);

  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "dateAsDateObjectForSorting", desc: true }],
      pageSize: bookedSessionsUserAllBookingsPageSizeFromLocalStorage
        ? Number(bookedSessionsUserAllBookingsPageSizeFromLocalStorage)
        : defaultTableSize,
    }),
    [bookedSessionsUserAllBookingsPageSizeFromLocalStorage]
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

export default useBookedSessionsUserAllBookingsVariables;
