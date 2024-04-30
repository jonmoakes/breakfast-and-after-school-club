import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";

const useBookingClosingTimesVariables = () => {
  const {
    newMorningBookingClosingTime,
    newAfternoonBookingClosingTime,
    bookingClosingTimeResult,
    bookingClosingTimeError,
  } = useGetDatabaseManagementSelectors();
  const { bookingClosingTimes } = useGetRequestDateDataSelectors();

  const { morningSessionClosingTime, afternoonSessionClosingTime } =
    bookingClosingTimes || {};

  return {
    newMorningBookingClosingTime,
    newAfternoonBookingClosingTime,
    morningSessionClosingTime,
    afternoonSessionClosingTime,
    bookingClosingTimeResult,
    bookingClosingTimeError,
  };
};

export default useBookingClosingTimesVariables;
