import { useSelector } from "react-redux";

import { selectBookedSessionsOwnerSelectors } from "../../store/booked-sessions-owner/booked-sessions-owner.slice";

const useGetBookedSessionsOwnerSelectors = () => {
  const {
    bookedSessionsOwnerIsLoading,
    bookedSessionsOwner,
    bookedSessionsOwnerShowAllDates,
    bookedSessionsOwnerError,
    sortedOwnerBookings,
    updateRegistrationError,
  } = useSelector(selectBookedSessionsOwnerSelectors);

  return {
    bookedSessionsOwnerIsLoading,
    bookedSessionsOwner,
    bookedSessionsOwnerShowAllDates,
    bookedSessionsOwnerError,
    sortedOwnerBookings,
    updateRegistrationError,
  };
};

export default useGetBookedSessionsOwnerSelectors;
