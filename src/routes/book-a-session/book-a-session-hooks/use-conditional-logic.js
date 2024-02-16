import { format } from "date-fns";
import { useSelector } from "react-redux";

import {
  selectChosenDate,
  selectEarlyFinishDates,
  selectRequestDateData,
  selectRequestDateDataErrorMessage,
  selectBookingClosingTimes,
} from "../../../store/request-date-data/request-date-data.slice";
import { selectCurrentDateAndTime } from "../../../store/date-and-time/date-and-time.slice";
import { selectCurrentUser } from "../../../store/user/user.selector";
import {
  selectGetPricesError,
  selectMorningSessionPrice,
} from "../../../store/session-types-and-prices/session-types-and-prices.selector";
import {
  selectGetUsersChildrenError,
  selectUsersChildren,
} from "../../../store/get-users-children/get-users-children.selector";
import { selectBookSessionSelectors } from "../../../store/book-session/book-session.slice";
import { selectGetUserBookingsError } from "../../../store/user-bookings/user-bookings.selector";

import { priceMultipliedBy100 } from "../../../functions/price-multiplied-by-100";

const useConditionalLogic = () => {
  const { currentDateAndTime } = useSelector(selectCurrentDateAndTime);
  const requestDateData = useSelector(selectRequestDateData);
  const morningSessionPrice = useSelector(selectMorningSessionPrice);
  const requestDateErrorMessage = useSelector(
    selectRequestDateDataErrorMessage
  );

  const chosenDate = useSelector(selectChosenDate);
  const currentUser = useSelector(selectCurrentUser);
  const usersChildren = useSelector(selectUsersChildren);
  const { childrenSelectedForBooking } = useSelector(
    selectBookSessionSelectors
  );
  const getUsersChildrenError = useSelector(selectGetUsersChildrenError);
  const getUsersBookingsError = useSelector(selectGetUserBookingsError);
  const getSessionTypesAndPricesError = useSelector(selectGetPricesError);
  const earlyFinishDates = useSelector(selectEarlyFinishDates);
  const bookingClosingTimes = useSelector(selectBookingClosingTimes);

  const { walletBalance } = currentUser;
  const date = requestDateData ? requestDateData.date : "";
  const formattedTodaysDate = format(new Date(), "yyyy-MM-dd");
  const morningSessionSpaces = requestDateData
    ? requestDateData.morningSessionSpaces
    : "";
  const afternoonSessionSpaces = requestDateData
    ? requestDateData.afternoonSessionSpaces
    : "";
  const morningCloseTime = bookingClosingTimes
    ? bookingClosingTimes.morningSessionClosingTime
    : "";

  const afternoonCloseTime = bookingClosingTimes
    ? bookingClosingTimes.afternoonSessionClosingTime
    : "";

  const errorFetchingData = () => {
    return getUsersChildrenError ||
      getUsersBookingsError ||
      getSessionTypesAndPricesError ||
      (requestDateErrorMessage &&
        requestDateErrorMessage !== "is not available")
      ? true
      : false;
  };

  const currentTimeAsString = () => {
    const hours = currentDateAndTime.getHours().toString().padStart(2, "0");
    const minutes = currentDateAndTime.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  // gives the early finish time as a string to use to show the user.
  const dateHasEarlyFinishTime = () => {
    const earlyFinishTime = earlyFinishDates
      ? earlyFinishDates.find(
          (earlyFinishDate) => earlyFinishDate.date === date
        )
      : null;

    if (!earlyFinishTime) return;

    return earlyFinishTime.finishTime;
  };

  const noChildrenAddedYet = () => {
    return usersChildren === undefined ? true : false;
  };

  const shouldShowDatePicker = () => {
    return walletBalance >= priceMultipliedBy100(morningSessionPrice)
      ? true
      : false;
  };

  const hasInsufficientFunds = () => {
    return walletBalance < priceMultipliedBy100(morningSessionPrice)
      ? true
      : false;
  };

  //user has chosen a date from the picker which is why requestDateData is not null but no spaces in the db on that date
  const noSpacesAvailableOnChosenDate = () => {
    return requestDateData && !morningSessionSpaces && !afternoonSessionSpaces
      ? true
      : false;
  };

  const onlyMorningSessionsAvailable = () => {
    return requestDateData &&
      morningSessionSpaces &&
      !afternoonSessionSpaces &&
      date
      ? true
      : false;
  };

  const onlyAfternoonSessionsAvailable = () => {
    return requestDateData &&
      !morningSessionSpaces &&
      afternoonSessionSpaces &&
      date
      ? true
      : false;
  };

  const allSessionsAvailable = () => {
    return requestDateData &&
      morningSessionSpaces &&
      afternoonSessionSpaces &&
      date
      ? true
      : false;
  };

  //meaning school is off that day. also if the function throws an error otherwise, means will not show the child checkbox.
  const dateUnavailable = () => {
    return requestDateErrorMessage ? true : false;
  };

  const dateChosenInThePast = () => {
    return date && date < formattedTodaysDate ? true : false;
  };

  const dateNotChosenOrDateChosenAndBalanceTooLow = () => {
    return !requestDateData ||
      (requestDateData &&
        walletBalance < priceMultipliedBy100(morningSessionPrice))
      ? true
      : false;
  };

  // noSpacesAvailableOnChosenDate  needs to be there because if its a date with no spaces available, dateData will not be null
  const dateInPastOrNotChosenOrChosenAndBalanceTooLowOrNoSpacesAvailable =
    () => {
      return dateChosenInThePast() ||
        dateNotChosenOrDateChosenAndBalanceTooLow() ||
        noSpacesAvailableOnChosenDate()
        ? true
        : false;
    };

  const isToday = () => {
    return formattedTodaysDate === chosenDate ? true : false;
  };

  const isTodayAndIsBetweenOpenAndCloseTime = () => {
    return date === formattedTodaysDate &&
      currentTimeAsString() > morningCloseTime &&
      date === formattedTodaysDate &&
      currentTimeAsString() < afternoonCloseTime
      ? true
      : false;
  };

  const notTodaysOrIsTodayAndBeforeMorningCloseTime = () => {
    return date !== formattedTodaysDate ||
      (date === formattedTodaysDate && currentTimeAsString() < morningCloseTime)
      ? true
      : false;
  };

  const isTodayAndAfterCloseTime = () => {
    return date === formattedTodaysDate &&
      currentTimeAsString() > afternoonCloseTime
      ? true
      : false;
  };

  const hasOneChild = () => {
    return usersChildren.length === 1 ? true : false;
  };

  const hasMoreThanOneChild = () => {
    return usersChildren.length > 1 ? true : false;
  };

  const atLeastOneChildHasBeenSelected = () => {
    return childrenSelectedForBooking.length >= 1 ? true : false;
  };

  const notEnoughMorningSpacesForMultipleChildren = (sessionType) => {
    return sessionType === "morning" &&
      childrenSelectedForBooking.length > 1 &&
      morningSessionSpaces < childrenSelectedForBooking.length
      ? true
      : false;
  };

  const notEnoughAfternoonSpacesForMultipleChildren = (sessionType) => {
    return (sessionType === "afternoonShort" ||
      sessionType === "afternoonLong") &&
      childrenSelectedForBooking.length > 1 &&
      afternoonSessionSpaces < childrenSelectedForBooking.length
      ? true
      : false;
  };

  const notEnoughMorningSpacesForMultipleChildrenInMorningAndAfternoonSession =
    (sessionType) => {
      return (sessionType === "morningAndAfternoonShort" ||
        sessionType === "morningAndAfternoonLong") &&
        childrenSelectedForBooking.length > 1 &&
        morningSessionSpaces < childrenSelectedForBooking.length
        ? true
        : false;
    };

  const notEnoughAfternoonSpacesForMultipleChildrenInMorningAndAfternoonSession =
    (sessionType) => {
      return (sessionType === "morningAndAfternoonShort" ||
        sessionType === "morningAndAfternoonLong") &&
        childrenSelectedForBooking.length > 1 &&
        afternoonSessionSpaces < childrenSelectedForBooking.length
        ? true
        : false;
    };

  return {
    errorFetchingData,
    date,
    dateUnavailable,
    dateChosenInThePast,
    shouldShowDatePicker,
    noSpacesAvailableOnChosenDate,
    onlyMorningSessionsAvailable,
    onlyAfternoonSessionsAvailable,
    allSessionsAvailable,
    dateNotChosenOrDateChosenAndBalanceTooLow,
    noChildrenAddedYet,
    hasInsufficientFunds,
    notTodaysOrIsTodayAndBeforeMorningCloseTime,
    isTodayAndAfterCloseTime,
    isTodayAndIsBetweenOpenAndCloseTime,
    isToday,
    atLeastOneChildHasBeenSelected,
    dateInPastOrNotChosenOrChosenAndBalanceTooLowOrNoSpacesAvailable,
    hasOneChild,
    hasMoreThanOneChild,
    morningSessionSpaces,
    afternoonSessionSpaces,
    notEnoughMorningSpacesForMultipleChildren,
    notEnoughAfternoonSpacesForMultipleChildren,
    notEnoughMorningSpacesForMultipleChildrenInMorningAndAfternoonSession,
    notEnoughAfternoonSpacesForMultipleChildrenInMorningAndAfternoonSession,
    dateHasEarlyFinishTime,
    morningSessionPrice,
    formattedTodaysDate,
    requestDateErrorMessage,
    afternoonCloseTime,
  };
};

export default useConditionalLogic;
