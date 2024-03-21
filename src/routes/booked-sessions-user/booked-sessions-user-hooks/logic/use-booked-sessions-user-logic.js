import { isBefore, isAfter, isSameDay, parse, startOfDay } from "date-fns";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useGetBookedSessionsUserSelectors from "../../../../hooks/get-selectors/use-get-booked-sessions-user-selectors";
import useGetRequestDateDataSelectors from "../../../../hooks/get-selectors/use-get-request-date-data-selectors";
import useFireErrorSwals from "../use-fire-error-swals";

import { addUserBookingToDelete } from "../../../../store/user-booking-to-delete/user-booking-to-delete.slice";

import { cancelBookingRoute } from "../../../../strings/routes/routes-strings";
import useGetCurrentDateAndTimeSelectors from "../../../../hooks/get-selectors/use-get-date-and-time-selectors";

const useBookedSessionsUserLogic = (chosenEntry) => {
  const { bookedSessionsUser } = useGetBookedSessionsUserSelectors();
  const { bookingClosingTimes } = useGetRequestDateDataSelectors();
  // returns a date object for today that includes the current time.
  const { currentDateAndTime } = useGetCurrentDateAndTimeSelectors();
  const {
    cantCancelPastBookingSwal,
    cantCancelMorningSessionSwal,
    cantCancelAfternoonSessionSwal,
    couldntFetchBookingClosingTimesSwal,
    cantCancelDualSessionSwal,
  } = useFireErrorSwals();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { sessionType, date } = (chosenEntry ?? [])[0] ?? {};

  // for use when setting dateAndTime dispatcherl
  const milliseconds = 5000;
  // convert yyyy-mm-dd to date object for comparisons. Makes the time of the chosen date 00:00:00 GMT+0000
  const chosenEntryDateAsDateObject = new Date(date);

  //times return as a string
  const { morningSessionClosingTime, afternoonSessionClosingTime } =
    bookingClosingTimes || {};

  // we are checking for whether we can cancel a booking for today so we create a date object that returns today,  but sets its time to be whatever morningSessionClosingTime is in the db.
  const morningSessionClosingTimeAsDateObject = parse(
    morningSessionClosingTime,
    "HH:mm",
    new Date()
  );

  const afternoonSessionClosingTimeAsDateObject = parse(
    afternoonSessionClosingTime,
    "HH:mm",
    new Date()
  );

  // chosenEntryDateAsDateObject shows thedate with a time of 00:00:00 GMT+0000. startOfDay does the same to currentDateAndTime which initially contains whatever time it is when intialised. So if currentDateAndTine had a time value later than 00:00:00 then it would class it as being an earlier date even though the two dates are the same.
  const bookingIsOnADayInThePast = () => {
    return isBefore(chosenEntryDateAsDateObject, startOfDay(currentDateAndTime))
      ? true
      : false;
  };

  // checks if the two date objects have the same day value - don't care about the time.
  const chosenDateIsToday = () => {
    return isSameDay(chosenEntryDateAsDateObject, currentDateAndTime)
      ? true
      : false;
  };

  const sessionIsTodayInTheMorningAndTooLateTooCancel = () => {
    if (!sessionType) return false;
    return chosenDateIsToday() &&
      sessionType === "morning" &&
      isAfter(currentDateAndTime, morningSessionClosingTimeAsDateObject)
      ? true
      : false;
  };

  const sessionIsTodayInTheAfternoonAndTooLateTooCancel = () => {
    if (!sessionType) return false;
    return (sessionType === "afternoonShort" ||
      sessionType === "afternoonLong") &&
      chosenDateIsToday() &&
      isAfter(currentDateAndTime, afternoonSessionClosingTimeAsDateObject)
      ? true
      : false;
  };

  const sessionIsTodayAndTooLateTooCancelMorningAndAfternoonSession = () => {
    if (!sessionType) return false;
    return (sessionType === "morningAndAfternoonShort" ||
      sessionType === "morningAndAfternoonLong") &&
      chosenDateIsToday() &&
      isAfter(currentDateAndTime, morningSessionClosingTimeAsDateObject)
      ? true
      : false;
  };

  // no bookings have been made yet
  const noBookingDataFound = (data) => {
    return !bookedSessionsUser.length && !data.length ? true : false;
  };

  const checkOkToCancelAndGoToCancelBookingRoute = () => {
    if (!bookingClosingTimes) {
      couldntFetchBookingClosingTimesSwal();
    } else if (bookingIsOnADayInThePast()) {
      cantCancelPastBookingSwal();
    } else if (sessionIsTodayInTheMorningAndTooLateTooCancel()) {
      cantCancelMorningSessionSwal(morningSessionClosingTime);
    } else if (sessionIsTodayInTheAfternoonAndTooLateTooCancel()) {
      cantCancelAfternoonSessionSwal(afternoonSessionClosingTime);
    } else if (sessionIsTodayAndTooLateTooCancelMorningAndAfternoonSession()) {
      cantCancelDualSessionSwal(morningSessionClosingTime);
    } else {
      dispatch(addUserBookingToDelete(chosenEntry));
      navigate(cancelBookingRoute);
    }
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return {
    noBookingDataFound,
    checkOkToCancelAndGoToCancelBookingRoute,
    scrollToTop,
    milliseconds,
  };
};

export default useBookedSessionsUserLogic;
