import { useMemo } from "react";

import useGetBookedSessionsOwnerSelectors from "../../../hooks/get-selectors/use-get-booked-sessions-owner-selectors";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

import { BOOKED_SESSIONS_OWNER_TABLE_COLUMNS } from "../../../components/tables/booked-sessions-owner-table-columns";

import { defaultTableSize } from "../../../components/tables/default-table-size";

const useBookedSessionsOwnerAllBookingsVariables = () => {
  const {
    sortedOwnerBookings,
    bookedSessionsOwnerIsLoading,
    bookedSessionsOwner,
    bookedSessionsOwnerError,
  } = useGetBookedSessionsOwnerSelectors();
  const { currentUser, databaseId, bookedSessionsCollectionId } =
    useGetCurrentUserSelectors();

  const data = useMemo(() => sortedOwnerBookings, [sortedOwnerBookings]);

  const bookedSessionsOwnerAllBookingsPageSizeFromLocalStorage =
    localStorage.getItem("bookedSessionsOwnerAllBookingsChosenTablePageSize");

  const columns = useMemo(() => BOOKED_SESSIONS_OWNER_TABLE_COLUMNS, []);

  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "dateAsDateObjectForSorting", desc: true }],
      pageSize: bookedSessionsOwnerAllBookingsPageSizeFromLocalStorage
        ? Number(bookedSessionsOwnerAllBookingsPageSizeFromLocalStorage)
        : defaultTableSize,
    }),
    [bookedSessionsOwnerAllBookingsPageSizeFromLocalStorage]
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

export default useBookedSessionsOwnerAllBookingsVariables;
