import { useSelector } from "react-redux";

import useConditionalLogic from "./use-conditional-logic";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useSessionAlreadyBookedSwal from "./swals/use-session-already-booked-swal";
import useSingleChildSessionAlreadyBooked from "./use-single-child-session-already-booked.js";

import { selectChildrenSelectedForBooking } from "../../../store/book-session/book-session.selector";

import {
  confirmSureBookSession,
  fundsDeductedFromBalance,
  imSureMessage,
} from "../../../strings/strings";

const useCheckForPreviousBookingAndHandleBooking = () => {
  const { confirmSwal } = useConfirmSwal();
  const { date } = useConditionalLogic();
  const { singleChildSessionAlreadyBooked } =
    useSingleChildSessionAlreadyBooked();
  const {
    singleChildSessionAlreadyBookedSwal,
    // multipleChildSessionAlreadyBookedSwal,
  } = useSessionAlreadyBookedSwal();

  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );

  const childrenSelectedViaCheckbox = childrenSelectedForBooking.length;

  const checkForPreviousBookingAndHandleBooking = (
    sessionType,
    price,
    confirmResult
  ) => {
    if (
      !childrenSelectedViaCheckbox &&
      singleChildSessionAlreadyBooked(sessionType)
    ) {
      singleChildSessionAlreadyBookedSwal();
    }
    //  else if (childrenSelectedViaCheckbox) {
    //   multipleChildSessionAlreadyBookedSwal(sessionType);
    // }
    else {
      confirmSwal(
        confirmSureBookSession(sessionType, date),
        fundsDeductedFromBalance(price),
        imSureMessage,
        () => confirmResult(sessionType, price)
      );
    }
  };

  return { checkForPreviousBookingAndHandleBooking };
};

export default useCheckForPreviousBookingAndHandleBooking;
