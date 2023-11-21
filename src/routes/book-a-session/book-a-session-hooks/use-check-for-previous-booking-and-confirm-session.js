import { useDispatch, useSelector } from "react-redux";

import useConditionalLogic from "./use-conditional-logic";
import useChildSessionAlreadyBooked from "./use-child-session-already-booked";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useSessionAlreadyBookedSwal from "./swals/use-session-already-booked-swal";

import { selectChildrenSelectedForBooking } from "../../../store/book-session/book-session.selector";
import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import {
  addSessionBookingInfoAsync,
  updateSessionDocAsync,
  updateUserDocBalanceAsync,
} from "../../../store/book-session/book-session-thunks";

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

  const usersChildren = useSelector(selectUsersChildren);
  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const { id } = currentUser;
  const childrenSelectedViaCheckbox = childrenSelectedForBooking.length;

  const confirmResult = (sessionType, price) => {
    dispatch(
      updateSessionDocAsync({ date, sessionType, childrenSelectedForBooking })
    ).then((resultAction) => {
      if (updateSessionDocAsync.fulfilled.match(resultAction)) {
        dispatch(updateUserDocBalanceAsync({ id, price })).then(
          (resultAction) => {
            if (updateUserDocBalanceAsync.fulfilled.match(resultAction)) {
              dispatch(
                addSessionBookingInfoAsync({
                  date,
                  sessionType,
                  usersChildren,
                  childrenSelectedForBooking,
                })
              );
            }
          }
        );
      }
    });
  };

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
