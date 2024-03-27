import useGetRequestDateDataSelectors from "../../../get-selectors/use-get-request-date-data-selectors";

import {
  requestBookingClosingTimesAsync,
  requestDateDataAsync,
  requestEarlyFinishDatesAsync,
} from "../../../../store/request-date-data/request-date-data.thunks";
import useGetCurrentUserSelectors from "../../../get-selectors/use-get-current-user-selectors";

const useThunkIdsAndNextRequestLogic = () => {
  const { chosenDate, earlyFinishDates, bookingClosingTimes, sessionTimes } =
    useGetRequestDateDataSelectors();
  const {
    databaseId,
    termDatesCollectionId,
    earlyFinishDatesCollectionId,
    bookingClosingTimesCollectionId,
    bookingClosingTimesDocumentId,
    sessionTimesCollectionId,
    sessionTimesDocumentId,
  } = useGetCurrentUserSelectors();

  const canFireRequestEarlyFinishDates = (resultAction) => {
    return requestDateDataAsync.fulfilled.match(resultAction) &&
      !earlyFinishDates &&
      !bookingClosingTimes &&
      !sessionTimes
      ? true
      : false;
  };

  const canFireRequestBookingClosingTimes = (resultAction) => {
    return requestEarlyFinishDatesAsync.fulfilled.match(resultAction)
      ? true
      : false;
  };

  const canFireRequestSessionTimes = (resultAction) => {
    return requestBookingClosingTimesAsync.fulfilled.match(resultAction)
      ? true
      : false;
  };

  return {
    chosenDate,
    canFireRequestEarlyFinishDates,
    canFireRequestBookingClosingTimes,
    canFireRequestSessionTimes,
    databaseId,
    termDatesCollectionId,
    earlyFinishDatesCollectionId,
    bookingClosingTimesCollectionId,
    bookingClosingTimesDocumentId,
    sessionTimesCollectionId,
    sessionTimesDocumentId,
  };
};

export default useThunkIdsAndNextRequestLogic;
