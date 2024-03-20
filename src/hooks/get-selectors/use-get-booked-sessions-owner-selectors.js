import { useSelector } from "react-redux";

import { selectBookedSessionsOwnerSelectors } from "../../store/booked-sessions-owner/booked-sessions-owner.slice";

const useGetBookedSessionsOwnerSelectors = () => {
  const {
    bookedSessionsOwnerIsLoading,
    bookedSessionsOwner,
    showAllDates,
    bookedSessionsOwnerError,
    sortedOwnerBookings,
  } = useSelector(selectBookedSessionsOwnerSelectors);

  return {
    bookedSessionsOwnerIsLoading,
    bookedSessionsOwner,
    showAllDates,
    bookedSessionsOwnerError,
    sortedOwnerBookings,
  };
};

export default useGetBookedSessionsOwnerSelectors;
