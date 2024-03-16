import useChildSessionAlreadyBooked from "./use-child-session-already-booked";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useSessionAlreadyBookedSwal from "./swals/use-session-already-booked-swal";
import useConfirmResult from "./use-confirm-result";
import useSelectBookSessionSelectors from "./select-book-session-selectors/use-select-book-session-selectors";
import useDatesLogic from "./dates-logic/use-dates-logic";

import {
  confirmSureBookSession,
  fundsDeductedFromBalance,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useCheckForPreviousBookingAndConfirmSession = () => {
  const { confirmSwal } = useConfirmSwal();
  const { date } = useDatesLogic();
  const { confirmResult } = useConfirmResult();
  const { singleChildSessionAlreadyBooked, multipleChildSessionAlreadyBooked } =
    useChildSessionAlreadyBooked();
  const { sessionAlreadyBookedSwal } = useSessionAlreadyBookedSwal();
  const { childrenSelectedForBooking } = useSelectBookSessionSelectors();

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
