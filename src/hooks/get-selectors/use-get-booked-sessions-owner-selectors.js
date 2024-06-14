import { useSelector } from "react-redux";

import { selectBookedSessionsOwnerSelectors } from "../../store/booked-sessions-owner/booked-sessions-owner.slice";

const useGetBookedSessionsOwnerSelectors = () => {
  const {
    bookedSessionsOwnerIsLoading,
    bookedSessionsOwner,
    bookedSessionsOwnerShowAllDates,
    bookedSessionsOwnerError,
    sortedOwnerBookings,
  } = useSelector(selectBookedSessionsOwnerSelectors);

  return {
    bookedSessionsOwnerIsLoading,
    bookedSessionsOwner,
    bookedSessionsOwnerShowAllDates,
    bookedSessionsOwnerError,
    sortedOwnerBookings,
  };
};

export default useGetBookedSessionsOwnerSelectors;
