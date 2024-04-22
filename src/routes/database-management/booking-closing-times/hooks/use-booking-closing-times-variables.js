import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useGetRequestDateDataSelectors from "../../../../hooks/get-selectors/use-get-request-date-data-selectors";

const useBookingClosingTimesVariables = () => {
  const {
    newMorningBookingClosingTime,
    newAfternoonBookingClosingTime,
    databaseManagementIsLoading,
  } = useGetDatabaseManagementSelectors();
  const {
    requestDateDataIsLoading,
    bookingClosingTimes,
    requestDateDataError,
  } = useGetRequestDateDataSelectors();

  const { morningSessionClosingTime, afternoonSessionClosingTime } =
    bookingClosingTimes || {};

  // for use in UpdateBookingClosingTimesInstructions for clarity as to which time they're trying to change
  const morningText = "morning";
  const afternoonText = "afternoon";

  return {
    newMorningBookingClosingTime,
    newAfternoonBookingClosingTime,
    databaseManagementIsLoading,
    requestDateDataIsLoading,
    requestDateDataError,
    morningSessionClosingTime,
    afternoonSessionClosingTime,
    morningText,
    afternoonText,
  };
};

export default useBookingClosingTimesVariables;
