import useChildSessionAlreadyBooked from "./logic/use-child-session-already-booked";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useSessionAlreadyBookedSwal from "./swals/use-session-already-booked-swal";
import useDispatchBookSessionThunks from "../../../hooks/get-actions-and-thunks/book-session-actions-and-thunks/use-dispatch-book-session-thunks";
import useDatesLogic from "./logic/use-dates-logic";
import useGetChildrenLogic from "./logic/use-get-children-logic";
import useSessionLogic from "./logic/use-session-logic";

import {
  confirmSureBookSession,
  fundsDeductedFromBalance,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useCheckForPreviousBookingAndConfirmSession = () => {
  const { confirmSwal } = useConfirmSwal();
  const { date } = useDatesLogic();
  const { cancelResult, bookingData, walletBalance } = useSessionLogic();
  const { singleChildSessionAlreadyBooked, multipleChildSessionAlreadyBooked } =
    useChildSessionAlreadyBooked();
  const { sessionAlreadyBookedSwal } = useSessionAlreadyBookedSwal();
  const { childrenSelectedLength, numberOfChildrenInBooking } =
    useGetChildrenLogic();
  const { dispatchBookSessionThunks } = useDispatchBookSessionThunks();

  // sessionType and price is received from confirmSession -  to avoid closure issue where if we tried to use the selector for sessionType and price,  the selector doesn't pick up the latest value.
  const checkForPreviousBookingAndConfirmSession = (sessionType, price) => {
    const confirmResult = () => {
      dispatchBookSessionThunks(
        numberOfChildrenInBooking,
        date,
        sessionType,
        price,
        bookingData
      );
    };

    if (
      (!childrenSelectedLength &&
        singleChildSessionAlreadyBooked(sessionType)) ||
      (childrenSelectedLength && multipleChildSessionAlreadyBooked(sessionType))
    ) {
      sessionAlreadyBookedSwal(sessionType);
    } else {
      const balanceAfterBooking = ((walletBalance - price) / 100).toFixed(2);
      confirmSwal(
        confirmSureBookSession(sessionType, date),
        fundsDeductedFromBalance(price, balanceAfterBooking),
        imSureMessage,
        () => confirmResult(),
        cancelResult
      );
    }
  };

  return { checkForPreviousBookingAndConfirmSession };
};

export default useCheckForPreviousBookingAndConfirmSession;
