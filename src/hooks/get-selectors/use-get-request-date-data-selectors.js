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

  const documentId = dateData ? dateData.$id : "";

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
    documentId,
  };
};

export default useGetRequestDateDataSelectors;
