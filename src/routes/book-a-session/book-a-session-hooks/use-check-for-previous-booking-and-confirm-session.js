import useChildSessionAlreadyBooked from "./logic/use-child-session-already-booked";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useSessionAlreadyBookedSwal from "./swals/use-session-already-booked-swal";
import useConfirmResult from "./use-confirm-result";
import useGetBookSessionSelectors from "../../../hooks/get-selectors/use-get-book-session-selectors";
import useDatesLogic from "./logic/use-dates-logic";

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
  const { childrenSelectedLength } = useGetBookSessionSelectors();

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
