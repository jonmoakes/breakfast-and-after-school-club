import { useSelector } from "react-redux";

import useConditionalLogic from "./use-conditional-logic";
import useChildSessionAlreadyBooked from "./use-child-session-already-booked";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useSessionAlreadyBookedSwal from "./swals/use-session-already-booked-swal";
import useConfirmResult from "./use-confirm-result";
import useCouldntFetchUserBookingsErrorSwal from "./swals/use-couldnt-fetch-user-bookings-error-swal";

import { selectChildrenSelectedForBooking } from "../../../store/book-session/book-session.selector";
import { selectError } from "../../../store/user-bookings/user-bookings.selector";

import {
  confirmSureBookSession,
  fundsDeductedFromBalance,
  imSureMessage,
} from "../../../strings/strings";

const useCheckForPreviousBookingAndConfirmSession = () => {
  const { confirmSwal } = useConfirmSwal();
  const { date } = useConditionalLogic();
  const { confirmResult } = useConfirmResult();
  const { singleChildSessionAlreadyBooked, multipleChildSessionAlreadyBooked } =
    useChildSessionAlreadyBooked();
  const { sessionAlreadyBookedSwal } = useSessionAlreadyBookedSwal();
  const { couldntFetchUserBookingsErrorSwal } =
    useCouldntFetchUserBookingsErrorSwal();

  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );
  const userBookingsFetchError = useSelector(selectError);

  const childrenSelectedViaCheckbox = childrenSelectedForBooking.length;

  const checkForPreviousBookingAndConfirmSession = (sessionType, price) => {
    if (userBookingsFetchError) {
      couldntFetchUserBookingsErrorSwal(confirmResult, sessionType, price);
    } else if (
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
