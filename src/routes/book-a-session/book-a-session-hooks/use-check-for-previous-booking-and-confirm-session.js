import useChildSessionAlreadyBooked from "./logic/use-child-session-already-booked";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useSessionAlreadyBookedSwal from "./swals/use-session-already-booked-swal";
import useBookSessionThunks from "../../../hooks/get-actions-and-thunks/book-session-actions-and-thunks/use-book-session-thunks";
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
  const { singleChildSessionAlreadyBooked, multipleChildSessionAlreadyBooked } =
    useChildSessionAlreadyBooked();
  const { sessionAlreadyBookedSwal } = useSessionAlreadyBookedSwal();
  const { childrenSelectedLength } = useGetChildrenLogic();
  const { bookSessionAsync } = useBookSessionThunks(date);

  // sessionType and price is received from confirmSession -  to avoid closure issue where if we tried to use the selector for sessionType and price,  the selector doesn't pick up the latest value.
  const checkForPreviousBookingAndConfirmSession = (sessionType, price) => {
    const confirmResult = () => {
      bookSessionAsync(sessionType, price);
    };

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
        () => confirmResult()
      );
    }
  };

  return { checkForPreviousBookingAndConfirmSession };
};

export default useCheckForPreviousBookingAndConfirmSession;
