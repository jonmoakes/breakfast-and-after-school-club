import { useSelector } from "react-redux";
import { isAfter, isBefore, parse } from "date-fns";

import useGetRequestDateDataSelectors from "../../../../hooks/get-selectors/use-get-request-date-data-selectors";
import useDatesLogic from "../logic/use-dates-logic";

import { selectCurrentDateAndTimeSelectors } from "../../../../store/date-and-time/date-and-time.slice";

const useTimesLogic = () => {
  const { bookingClosingTimes } = useGetRequestDateDataSelectors();
  const { isToday } = useDatesLogic();

  const { currentDateAndTime } = useSelector(selectCurrentDateAndTimeSelectors);

  const latestTimeToBookMorningSession = bookingClosingTimes
    ? bookingClosingTimes.morningSessionClosingTime
    : "";

  const latestTimeToBookAfternoonSession = bookingClosingTimes
    ? bookingClosingTimes.afternoonSessionClosingTime
    : "";

  const currentTimeRelativeToLatestTimeToBookSessionComparison = (
    latestTimeToBookASession,
    isBeforeOrAfter
  ) => {
    if (!latestTimeToBookASession) return;
    // extracts the hours from one of the latest time to book session variables above ( ie 07:25 ) and adds it into the currentDateAndTime date object.
    // ie if currentDateAndTime is Fri Mar 15 2024 10:22:46 GMT+0000 (Greenwich Mean Time)
    // latestTimeToBookASessionAsDateObject = Fri Mar 15 2024 07:25:00 GMT+0000 (Greenwich Mean Time)
    const latestTimeToBookASessionAsDateObject = parse(
      latestTimeToBookASession,
      "HH:mm",
      currentDateAndTime
    );
    return (
      //will choose whether to check if current time is before of after  here.
      isBeforeOrAfter(currentDateAndTime, latestTimeToBookASessionAsDateObject)
        ? true
        : false
    );
  };

  const isCurrentTimeBeforeLatestTimeToBookMorningSession = () => {
    return currentTimeRelativeToLatestTimeToBookSessionComparison(
      latestTimeToBookMorningSession,
      isBefore
    );
  };

  const isCurrentTimeAfterLatestTimeToBookMorningSession = () => {
    return currentTimeRelativeToLatestTimeToBookSessionComparison(
      latestTimeToBookMorningSession,
      isAfter
    );
  };

  const isCurrentTimeBeforeLatestTimeToBookAfternoonSession = () => {
    return currentTimeRelativeToLatestTimeToBookSessionComparison(
      latestTimeToBookAfternoonSession,
      isBefore
    );
  };

  const isCurrentTimeAfterLatestTimeToBookAfternoonSession = () => {
    return currentTimeRelativeToLatestTimeToBookSessionComparison(
      latestTimeToBookAfternoonSession,
      isAfter
    );
  };

  const notTodaysOrIsTodayAndBeforeMorningCloseTime = () => {
    return (
      !isToday() ||
      (isToday() && isCurrentTimeBeforeLatestTimeToBookMorningSession()
        ? true
        : false)
    );
  };

  const isTodayAndIsBetweenOpenAndCloseTime = () => {
    return (
      isToday() &&
      isCurrentTimeAfterLatestTimeToBookMorningSession() &&
      isToday() &&
      isCurrentTimeBeforeLatestTimeToBookAfternoonSession() &&
      true
    );
  };

  const isTodayAndAfterMorningSessionCloseTime = () => {
    return isToday() && isCurrentTimeAfterLatestTimeToBookMorningSession()
      ? true
      : false;
  };

  const isTodayAndAfterAfternoonSessionCloseTime = () => {
    return isToday() && isCurrentTimeAfterLatestTimeToBookAfternoonSession()
      ? true
      : false;
  };

  return {
    notTodaysOrIsTodayAndBeforeMorningCloseTime,
    latestTimeToBookAfternoonSession,
    isCurrentTimeBeforeLatestTimeToBookMorningSession,
    isCurrentTimeAfterLatestTimeToBookMorningSession,
    isCurrentTimeBeforeLatestTimeToBookAfternoonSession,
    isCurrentTimeAfterLatestTimeToBookAfternoonSession,
    isTodayAndIsBetweenOpenAndCloseTime,
    isTodayAndAfterMorningSessionCloseTime,
    isTodayAndAfterAfternoonSessionCloseTime,
  };
};

export default useTimesLogic;
