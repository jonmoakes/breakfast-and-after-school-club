import { useSelector } from "react-redux";

import useGetRequestDateDataValues from "./use-get-request-date-data-values";

import { selectRequestDateData } from "../../../store/request-date-data/request-date-data.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectMorningSessionPrice } from "../../../store/session-types-and-prices/session-types-and-prices.selector";
import { priceMultipliedBy100 } from "../../../functions/price-multiplied-by-100";

const useCheckSpacesAvailableAndBalance = () => {
  const { date, morningSessionSpaces, afternoonSessionSpaces } =
    useGetRequestDateDataValues();

  const requestDateData = useSelector(selectRequestDateData);
  const sessionPrice = useSelector(selectMorningSessionPrice);
  const currentUser = useSelector(selectCurrentUser);

  const { walletBalance } = currentUser;

  const noSessionsAvailable = () => {
    return requestDateData &&
      !morningSessionSpaces &&
      !afternoonSessionSpaces &&
      date
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

  const noDateSelected = () => {
    return !noSessionsAvailable() &&
      !onlyMorningSessionsAvailable() &&
      !onlyAfternoonSessionsAvailable() &&
      !allSessionsAvailable()
      ? true
      : false;
  };

  const dateNotChosenOrDateChosenAndBalanceTooLow = () => {
    return !requestDateData
      ? true
      : requestDateData && walletBalance < priceMultipliedBy100(sessionPrice)
      ? true
      : false;
  };

  return {
    noSessionsAvailable,
    onlyMorningSessionsAvailable,
    onlyAfternoonSessionsAvailable,
    allSessionsAvailable,
    noDateSelected,
    dateNotChosenOrDateChosenAndBalanceTooLow,
  };
};

export default useCheckSpacesAvailableAndBalance;
