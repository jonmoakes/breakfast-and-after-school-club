import { isAfter, isBefore, parse } from "date-fns";

import useGetRequestDateDataSelectors from "../../../../hooks/get-selectors/use-get-request-date-data-selectors";
import useDatesLogic from "../logic/use-dates-logic";

import useGetCurrentDateAndTimeSelectors from "../../../../hooks/get-selectors/use-get-date-and-time-selectors";

const useTimesLogic = () => {
  const { bookingClosingTimes } = useGetRequestDateDataSelectors();
  const { currentDateAndTime } = useGetCurrentDateAndTimeSelectors();
  const { isToday } = useDatesLogic();

  // for use when setting dateAndTime dispatcher;
  const milliseconds = 10000;

  //times return as a string
  const { morningSessionClosingTime, afternoonSessionClosingTime } =
    bookingClosingTimes || {};

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

  // these will auto return true or false as the function above does the return
  const isCurrentTimeBeforeLatestTimeToBookMorningSession = () => {
    return currentTimeRelativeToLatestTimeToBookSessionComparison(
      morningSessionClosingTime,
      isBefore
    );
  };
  const isCurrentTimeAfterLatestTimeToBookMorningSession = () => {
    return currentTimeRelativeToLatestTimeToBookSessionComparison(
      morningSessionClosingTime,
      isAfter
    );
  };

  const isCurrentTimeBeforeLatestTimeToBookAfternoonSession = () => {
    return currentTimeRelativeToLatestTimeToBookSessionComparison(
      afternoonSessionClosingTime,
      isBefore
    );
  };

  const isCurrentTimeAfterLatestTimeToBookAfternoonSession = () => {
    return currentTimeRelativeToLatestTimeToBookSessionComparison(
      afternoonSessionClosingTime,
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
    milliseconds,
    notTodaysOrIsTodayAndBeforeMorningCloseTime,
    afternoonSessionClosingTime,
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
