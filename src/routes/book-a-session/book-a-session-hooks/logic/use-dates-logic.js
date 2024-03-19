import { format } from "date-fns";

import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";
import useGetChildrenLogic from "./use-get-children-logic";
import useGetSessionTypesAndPricesSelectors from "../../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";
import useGetRequestDateDataSelectors from "../../../../hooks/get-selectors/use-get-request-date-data-selectors";

import { priceMultipliedBy100 } from "../../../../functions/price-multiplied-by-100";

const useDatesLogic = () => {
  const { walletBalance } = useGetCurrentUserSelectors();
  const { noChildrenAddedYet } = useGetChildrenLogic();
  const { morningSessionPrice } = useGetSessionTypesAndPricesSelectors();
  const { dateData, requestDateDataError, earlyFinishDates } =
    useGetRequestDateDataSelectors();

  const documentId = dateData ? dateData.$id : "";
  const date = dateData ? dateData.date : "";
  const morningSessionSpaces = dateData ? dateData.morningSessionSpaces : "";
  const afternoonSessionSpaces = dateData
    ? dateData.afternoonSessionSpaces
    : "";
  const formattedTodaysDate = format(new Date(), "yyyy-MM-dd");

  const isToday = () => {
    return date === formattedTodaysDate ? true : false;
  };

  const shouldShowDatePicker = () => {
    return (
      !noChildrenAddedYet() &&
      walletBalance >= priceMultipliedBy100(morningSessionPrice) &&
      true
    );
  };

  const dateUnavailable = () => {
    return requestDateDataError ? true : false;
  };

  const dateChosenInThePast = () => {
    return date && date < formattedTodaysDate ? true : false;
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

  const dateNotChosenOrDateChosenAndBalanceTooLow = () => {
    return !dateData ||
      (dateData && walletBalance < priceMultipliedBy100(morningSessionPrice))
      ? true
      : false;
  };

  //user has chosen a date from the picker which is why requestDateData is not null but no spaces in the db on that date
  const noSpacesAvailableOnChosenDate = () => {
    return dateData && !morningSessionSpaces && !afternoonSessionSpaces
      ? true
      : false;
  };

  // noSpacesAvailableOnChosenDate  needs to be there because if its a date with no spaces available, dateData will not be null
  const dateInPastOrNotChosenOrChosenAndBalanceTooLowOrNoSpacesAvailable =
    () => {
      return (
        (dateChosenInThePast() ||
          dateNotChosenOrDateChosenAndBalanceTooLow() ||
          noSpacesAvailableOnChosenDate()) &&
        true
      );
    };

  return {
    documentId,
    date,
    isToday,
    formattedTodaysDate,
    shouldShowDatePicker,
    dateUnavailable,
    dateChosenInThePast,
    dateHasEarlyFinishTime,
    requestDateDataError,
    noSpacesAvailableOnChosenDate,
    dateInPastOrNotChosenOrChosenAndBalanceTooLowOrNoSpacesAvailable,
    morningSessionSpaces,
    afternoonSessionSpaces,
  };
};

export default useDatesLogic;
