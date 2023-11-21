import { useSelector } from "react-redux";

import useConditionalLogic from "./use-conditional-logic";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useSessionAlreadyBookedSwal from "./swals/use-session-already-booked-swal";
import useChildSessionAlreadyBooked from "./use-child-session-already-booked";
import useConfirmResult from "./use-confirm-result";

import { selectChildrenSelectedForBooking } from "../../../store/book-session/book-session.selector";

import {
  confirmSureBookSession,
  fundsDeductedFromBalance,
  imSureMessage,
} from "../../../strings/strings";

const useCheckForPreviousBookingAndConfirmSession = () => {
  const { confirmSwal } = useConfirmSwal();
  const { date } = useConditionalLogic();
  const { singleChildSessionAlreadyBooked, multipleChildSessionAlreadyBooked } =
    useChildSessionAlreadyBooked();
  const { sessionAlreadyBookedSwal } = useSessionAlreadyBookedSwal();
  const { confirmResult } = useConfirmResult();

  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );

  const childrenSelectedViaCheckbox = childrenSelectedForBooking.length;

  const checkForPreviousBookingAndConfirmSession = (sessionType, price) => {
    if (
      (!childrenSelectedViaCheckbox &&
        singleChildSessionAlreadyBooked(sessionType)) ||
      (childrenSelectedViaCheckbox &&
        multipleChildSessionAlreadyBooked(sessionType))
    ) {
      sessionAlreadyBookedSwal();
    } else {
      confirmSwal(
        confirmSureBookSession(sessionType, date),
        fundsDeductedFromBalance(price),
        imSureMessage,
        () => confirmResult(sessionType, price)
      );
    }
  };

  return { checkForPreviousBookingAndConfirmSession };
};

export default useCheckForPreviousBookingAndConfirmSession;
