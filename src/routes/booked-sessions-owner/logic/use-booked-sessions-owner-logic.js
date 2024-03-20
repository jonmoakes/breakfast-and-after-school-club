import useGetBookedSessionsOwnerSelectors from "../../../hooks/get-selectors/use-get-booked-sessions-owner-selectors";

const useBookedSessionsOwnerLogic = () => {
  const { bookedSessionsOwner, showAllDates } =
    useGetBookedSessionsOwnerSelectors();

  // no bookings at all in database
  const noSessionsBookedYet = () => {
    return !bookedSessionsOwner.length ? true : false;
  };

  const noDataFound = (data) => {
    return !data.length ? true : false;
  };

  const allBookingsAreBeingShown = (data) => {
    return data.length && showAllDates ? true : false;
  };

  return {
    noSessionsBookedYet,
    noDataFound,
    allBookingsAreBeingShown,
  };
};

export default useBookedSessionsOwnerLogic;
