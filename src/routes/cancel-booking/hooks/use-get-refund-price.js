import { useSelector } from "react-redux";

import { selectUserBookingToDelete } from "../../../store/user-booking-to-delete/user-booking-to-delete.selector";
import {
  selectMorningSessionPrice,
  selectAfternoonShortSessionPrice,
  selectAfternoonLongSessionPrice,
  selectMorningAndAfternoonLongSessionPrice,
  selectMorningAndAfternoonShortSessionPrice,
} from "../../../store/session-types-and-prices/session-types-and-prices.selector";

const useGetRefundPrice = () => {
  const userBookingToDelete = useSelector(selectUserBookingToDelete);
  const morningPrice = useSelector(selectMorningSessionPrice);
  const afternoonShortPrice = useSelector(selectAfternoonShortSessionPrice);
  const afternoonLongPrice = useSelector(selectAfternoonLongSessionPrice);
  const morningAndAfternoonShortPrice = useSelector(
    selectMorningAndAfternoonShortSessionPrice
  );
  const morningAndAfternoonLongPrice = useSelector(
    selectMorningAndAfternoonLongSessionPrice
  );
  const { sessionType } = userBookingToDelete || {};

  const childrensName = userBookingToDelete
    ? userBookingToDelete.childrensName
    : "";

  const getRefundPrice = () => {
    switch (sessionType) {
      case "afternoonShort":
        return afternoonShortPrice * 100;
      case "afternoonLong":
        return afternoonLongPrice * 100;
      case "morningAndAfternoonShort":
        return morningAndAfternoonShortPrice * 100;
      case "morningAndAfternoonLong":
        return morningAndAfternoonLongPrice * 100;
      default:
        return morningPrice * 100;
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
  const result = countOccurrences(childrensName, charToCount);
  const numberOfChildrenInBooking = result + 1;

  const refundPrice = getRefundPrice();
  const refundForMoreThanOneChild = refundPrice * numberOfChildrenInBooking;

  return { refundPrice, refundForMoreThanOneChild, numberOfChildrenInBooking };
};

export default useGetRefundPrice;
