import { useSelector } from "react-redux";

import useGetDateAndTime from "./use-get-date-and-time";

import {
  selectChosenDate,
  selectRequestDateData,
  selectRequestDateDataErrorMessage,
} from "../../../store/request-date-data/request-date-data.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import {
  selectGetPricesError,
  selectMorningSessionPrice,
} from "../../../store/session-types-and-prices/session-types-and-prices.selector";
import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import { selectChildrenToBook } from "../../../store/book-session/book-session.selector";

import { priceMultipliedBy100 } from "../../../functions/price-multiplied-by-100";

const useConditionalLogic = () => {
  const {
    currentDateAndTime,
    formattedTodaysDate,
    morningCloseTime,
    afternoonCloseTime,
  } = useGetDateAndTime();

  const requestDateData = useSelector(selectRequestDateData); // gets the dateData object from the slice
  const sessionPrice = useSelector(selectMorningSessionPrice);
  const dateError = useSelector(selectRequestDateDataErrorMessage);
  const chosenDate = useSelector(selectChosenDate);
  const currentUser = useSelector(selectCurrentUser);
  const error = useSelector(selectGetPricesError);
  const usersChildren = useSelector(selectUsersChildren);
  const childrenToBook = useSelector(selectChildrenToBook);

  const date = requestDateData ? requestDateData.date : "";
  const morningSessionSpaces = requestDateData
    ? requestDateData.morningSessionSpaces
    : "";
  const afternoonSessionSpaces = requestDateData
    ? requestDateData.afternoonSessionSpaces
    : "";

  const { walletBalance } = currentUser;

  const earlyFinishDates = () => {
    return date === "2023-12-22" ||
      date === "2024-03-28" ||
      date === "2024-07-23"
      ? true
      : false;
  };

  const shouldShowDatePicker = () => {
    return walletBalance &&
      walletBalance >= priceMultipliedBy100(sessionPrice) &&
      !error
      ? true
      : false;
  };

  const hasInsufficientFunds = () => {
    return !walletBalance || walletBalance < priceMultipliedBy100(sessionPrice)
      ? true
      : false;
  };

  const noDateSelected = () => {
    return !noSessionsAvailable() &&
      !onlyMorningSessionsAvailable() &&
      !onlyAfternoonSessionsAvailable() &&
      !allSessionsAvailable()
      ? true
      : false;
  };

  const dateUnavailable = () => {
    return !date && !dateError
      ? null
      : !date && chosenDate && dateError
      ? true
      : false;
  };

  const dateChosenInThePast = () => {
    return date && date < formattedTodaysDate ? true : false;
  };

  const dateNotChosenOrDateChosenAndBalanceTooLow = () => {
    return !requestDateData
      ? true
      : requestDateData && walletBalance < priceMultipliedBy100(sessionPrice)
      ? true
      : false;
  };

  const noSessionsAvailable = () => {
    return requestDateData &&
      !morningSessionSpaces &&
      !afternoonSessionSpaces &&
      date
      ? true
      : false;
  };

  const isTodayAndAfterCloseTime = () => {
    return date === formattedTodaysDate &&
      currentDateAndTime > afternoonCloseTime
      ? true
      : false;
  };

  const hasOneChild = () => {
    return usersChildren.length === 1 ? true : false;
  };

  const hasMoreThanOneChild = () => {
    return usersChildren.length > 1 ? true : false;
  };

  const childrenHaveBeenSelected = () => {
    const childrenChosen = () => {
      return (
        usersChildren.length > 1 &&
        Object.values(childrenToBook).filter((child) => child === true).length
      );
    };

    return childrenChosen() >= 1;
  };

  const isToday = () => {
    return formattedTodaysDate === chosenDate ? true : false;
  };

  const isTodayAndIsBetweenOpenAndCloseTime = () => {
    return date === formattedTodaysDate &&
      currentDateAndTime > morningCloseTime &&
      date === formattedTodaysDate &&
      currentDateAndTime < afternoonCloseTime
      ? true
      : false;
  };

  const notTodaysOrIsTodayAndBeforeMorningCloseTime = () => {
    return date !== formattedTodaysDate ||
      (date === formattedTodaysDate && currentDateAndTime < morningCloseTime)
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

  const showNothing = () => {
    return noDateSelected() ||
      dateUnavailable() ||
      dateChosenInThePast() ||
      dateNotChosenOrDateChosenAndBalanceTooLow() ||
      noSessionsAvailable()
      ? true
      : false;
  };

  return {
    date,
    dateUnavailable,
    dateChosenInThePast,
    earlyFinishDates,
    shouldShowDatePicker,
    noSessionsAvailable,
    onlyMorningSessionsAvailable,
    onlyAfternoonSessionsAvailable,
    allSessionsAvailable,
    noDateSelected,
    dateNotChosenOrDateChosenAndBalanceTooLow,
    hasInsufficientFunds,
    notTodaysOrIsTodayAndBeforeMorningCloseTime,
    isTodayAndAfterCloseTime,
    isTodayAndIsBetweenOpenAndCloseTime,
    isToday,
    childrenHaveBeenSelected,
    showNothing,
    hasOneChild,
    hasMoreThanOneChild,
  };
};

export default useConditionalLogic;
