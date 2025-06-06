import { isBefore, isAfter, isSameDay, parse, startOfDay } from "date-fns";
import { useNavigate } from "react-router-dom";

import useGetBookedSessionsUserSelectors from "../../../hooks/get-selectors/use-get-booked-sessions-user-selectors";
import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";
import useBookedSessionsUserVariables from "./use-booked-sessions-user-variables";
import useUserBookingToDeleteActions from "../../../hooks/get-actions-and-thunks/user-booking-to-delete-actions-and-thunks/use-user-booking-to-delete-actions";
import useFireErrorSwals from "./use-fire-error-swals";

import { cancelBookingRoute } from "../../../strings/routes/routes-strings";

import { scrollToTop } from "../../../functions/scroll-top-top";

const useBookedSessionsUserFunctions = (chosenEntry) => {
  const { bookedSessionsUser } = useGetBookedSessionsUserSelectors();

  const { bookingClosingTimes } = useGetRequestDateDataSelectors();
  const { data } = useBookedSessionsUserVariables();
  const { dispatchAddUserBookingToDelete } = useUserBookingToDeleteActions();
  const {
    cantCancelMorningSessionSwal,
    cantCancelAfternoonSessionSwal,
    couldntFetchBookingClosingTimesSwal,
  } = useFireErrorSwals();

  const navigate = useNavigate();

  const noBookingsHaveBeenMadeYet = () => {
    return !bookedSessionsUser.length && !data.length ? true : false;
  };

  const noUpcomingBookingsFound = () => {
    return bookedSessionsUser.length && !data.length ? true : false;
  };

  const noEntryHasBeenSelected = () => {
    return !chosenEntry.length ? true : false;
  };

  const oneEntrySelected = () => {
    return chosenEntry && chosenEntry.length === 1 ? true : false;
  };

  const moreThanOneEntrySelected = () => {
    return chosenEntry && chosenEntry.length > 1 ? true : false;
  };

  const { sessionType, date } = (chosenEntry ?? [])[0] ?? {};

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

  // chosenEntryDateAsDateObject shows the date with a time of 00:00:00 GMT+0000. startOfDay does the same to currentDateAndTime which initially contains whatever time it is when intialised. So if currentDateAndTine had a time value later than 00:00:00 then it would class it as being an earlier date even though the two dates are the same.
  const bookingIsOnADayInThePast = () => {
    return isBefore(chosenEntryDateAsDateObject, startOfDay(new Date()))
      ? true
      : false;
  };

  // checks if the two date objects have the same day value - don't care about the time.
  const chosenDateIsToday = () => {
    return isSameDay(chosenEntryDateAsDateObject, new Date()) ? true : false;
  };

  const sessionIsTodayInTheMorningAndTooLateTooCancel = () => {
    if (!sessionType) return false;
    return chosenDateIsToday() &&
      sessionType === "morning" &&
      isAfter(new Date(), morningSessionClosingTimeAsDateObject)
      ? true
      : false;
  };

  const sessionIsTodayInTheAfternoonAndTooLateTooCancel = () => {
    if (!sessionType) return false;
    return (sessionType === "afternoonShort" ||
      sessionType === "afternoonLong") &&
      chosenDateIsToday() &&
      isAfter(new Date(), afternoonSessionClosingTimeAsDateObject)
      ? true
      : false;
  };

  const checkOkToCancelAndGoToCancelBookingRoute = () => {
    if (!bookingClosingTimes) {
      couldntFetchBookingClosingTimesSwal();
    } else if (sessionIsTodayInTheMorningAndTooLateTooCancel()) {
      cantCancelMorningSessionSwal(morningSessionClosingTime);
    } else if (sessionIsTodayInTheAfternoonAndTooLateTooCancel()) {
      cantCancelAfternoonSessionSwal(afternoonSessionClosingTime);
    } else {
      dispatchAddUserBookingToDelete(chosenEntry);
      navigate(cancelBookingRoute);
    }
  };

  return {
    noEntryHasBeenSelected,
    oneEntrySelected,
    moreThanOneEntrySelected,
    noUpcomingBookingsFound,
    noBookingsHaveBeenMadeYet,
    checkOkToCancelAndGoToCancelBookingRoute,
    scrollToTop,
    bookingIsOnADayInThePast,
  };
};

export default useBookedSessionsUserFunctions;
