import { isAfter, isBefore, parse } from "date-fns";

import useGetRequestDateDataSelectors from "../../../../hooks/get-selectors/use-get-request-date-data-selectors";
import useDatesLogic from "../logic/use-dates-logic";

const useTimesLogic = () => {
  const { bookingClosingTimes } = useGetRequestDateDataSelectors();
  const { isToday } = useDatesLogic();

  //times return as a string
  const { morningSessionClosingTime, afternoonSessionClosingTime } =
    bookingClosingTimes || {};

  const currentTimeRelativeToLatestTimeToBookSessionComparison = (
    latestTimeToBookASession,
    isBeforeOrAfter
  ) => {
    if (!latestTimeToBookASession) return;
    // extracts the hours from one of the latest time to book session variables above ( ie 07:25 ) and adds it into the new Date object.
    // ie if new Date() is Fri Mar 15 2024 10:22:46 GMT+0000 (Greenwich Mean Time)
    // latestTimeToBookASessionAsDateObject = Fri Mar 15 2024 07:25:00 GMT+0000 (Greenwich Mean Time)
    const latestTimeToBookASessionAsDateObject = parse(
      latestTimeToBookASession,
      "HH:mm",
      new Date()
    );
    return (
      //will choose whether to check if current time is before of after  here.
      isBeforeOrAfter(new Date(), latestTimeToBookASessionAsDateObject)
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
    notTodaysOrIsTodayAndBeforeMorningCloseTime,
    morningSessionClosingTime,
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
