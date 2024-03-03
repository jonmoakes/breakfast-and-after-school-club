import { useSelector } from "react-redux";

import { selectUserBookingToDeleteSelectors } from "../../../store/user-booking-to-delete/user-booking-to-delete.slice";
import { selectSessionTypesAndPricesSelectors } from "../../../store/session-types-and-prices/session-types-and-prices.slice";

const useGetRefundPrice = () => {
  const { userBookingToDelete } = useSelector(
    selectUserBookingToDeleteSelectors
  );

  const {
    morningSessionPrice,
    afternoonShortSessionPrice,
    afternoonLongSessionPrice,
    morningAndAfternoonShortSessionPrice,
    morningAndAfternoonLongSessionPrice,
  } = useSelector(selectSessionTypesAndPricesSelectors);

  const { sessionType } = userBookingToDelete || {};

  const childrensName = userBookingToDelete
    ? userBookingToDelete.childrensName
    : "";

  const getRefundPrice = () => {
    switch (sessionType) {
      case "afternoonShort":
        return afternoonShortSessionPrice * 100;
      case "afternoonLong":
        return afternoonLongSessionPrice * 100;
      case "morningAndAfternoonShort":
        return morningAndAfternoonShortSessionPrice * 100;
      case "morningAndAfternoonLong":
        return morningAndAfternoonLongSessionPrice * 100;
      default:
        return morningSessionPrice * 100;
    }
  };

  const countOccurrences = (str, char) => {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  };

  const charToCount = ",";
  // if there is 1 comma, there must be 2 names
  const numberOfCommasInNamesString = countOccurrences(
    childrensName,
    charToCount
  );

  const numberOfChildrenInBooking = numberOfCommasInNamesString + 1;

  const refundPrice = getRefundPrice();
  const totalRefundPrice = refundPrice * numberOfChildrenInBooking;

  return { refundPrice, totalRefundPrice, numberOfChildrenInBooking };
};

export default useGetRefundPrice;
