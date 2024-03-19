import useChildSessionAlreadyBooked from "./logic/use-child-session-already-booked";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useSessionAlreadyBookedSwal from "./swals/use-session-already-booked-swal";
import useConfirmResult from "./use-confirm-result";
import useDatesLogic from "./logic/use-dates-logic";
import useGetChildrenLogic from "./logic/use-get-children-logic";

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
  const { childrenSelectedLength } = useGetChildrenLogic();

  // received from confrimSession to avoid closure issue where if tried to use the selector for sessionType and price,  the selector doesn't pick up the latest value.
  const checkForPreviousBookingAndConfirmSession = (sessionType, price) => {
    if (
      (!childrenSelectedLength &&
        singleChildSessionAlreadyBooked(sessionType)) ||
      (childrenSelectedLength && multipleChildSessionAlreadyBooked(sessionType))
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
