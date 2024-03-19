import { useSelector } from "react-redux";
import { selectRequestDateDataSelectors } from "../../store/request-date-data/request-date-data.slice";

const useGetRequestDateDataSelectors = () => {
  const {
    chosenDate,
    requestDateDataIsLoading,
    dateData,
    requestDateDataError,
    earlyFinishDates,
    bookingClosingTimes,
    sessionTimes,
    morningSessionTime,
    afternoonShortSessionTime,
    afternoonLongSessionTime,
  } = useSelector(selectRequestDateDataSelectors);

  return {
    chosenDate,
    requestDateDataIsLoading,
    dateData,
    requestDateDataError,
    earlyFinishDates,
    bookingClosingTimes,
    sessionTimes,
    morningSessionTime,
    afternoonShortSessionTime,
    afternoonLongSessionTime,
  };
};

export default useGetRequestDateDataSelectors;
