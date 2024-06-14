import { useSelector } from "react-redux";

import { selectBookedSessionsOwnerSelectors } from "../../store/booked-sessions-owner/booked-sessions-owner.slice";

const useGetBookedSessionsOwnerSelectors = () => {
  const {
    bookedSessionsOwnerIsLoading,
    bookedSessionsOwner,
    bookedSessionsOwnerShowAllDates,
    bookedSessionsOwnerError,
    sortedOwnerBookings,
    registrationChangeError,
  } = useSelector(selectBookedSessionsOwnerSelectors);

  return {
    bookedSessionsOwnerIsLoading,
    bookedSessionsOwner,
    bookedSessionsOwnerShowAllDates,
    bookedSessionsOwnerError,
    sortedOwnerBookings,
    registrationChangeError,
  };
};

export default useGetBookedSessionsOwnerSelectors;
