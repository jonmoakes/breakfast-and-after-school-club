import { useDispatch, useSelector } from "react-redux";

import useConditionalLogic from "./use-conditional-logic";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectChildrenSelectedForBooking } from "../../../store/book-session/book-session.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import { setSessionType } from "../../../store/book-session/book-session.slice";
import { addSessionBookingInfoAsync } from "../../../store/book-session/book-session-thunks";

import {
  updateSessionDocAsync,
  updateUserDocBalanceAsync,
} from "../../../store/book-session/book-session-thunks";

import {
  confirmSureBookSession,
  fundsDeductedFromBalance,
  imSureMessage,
} from "../../../strings/strings";

const useConfirmSession = () => {
  const { confirmSwal } = useConfirmSwal();
  const { date } = useConditionalLogic();

  const currentUser = useSelector(selectCurrentUser);
  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );
  const usersChildren = useSelector(selectUsersChildren);

  const { id } = currentUser;

  const dispatch = useDispatch();

  const confirmResult = (sessionType, price) => {
    dispatch(updateSessionDocAsync({ date, sessionType })).then(
      (resultAction) => {
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
      }
    );
  };

  const confirmSession = (sessionType, price) => {
    dispatch(setSessionType(sessionType));
    if (usersChildren.length === 1) {
      confirmSwal(
        confirmSureBookSession(sessionType, date),
        fundsDeductedFromBalance(price),
        imSureMessage,
        () => confirmResult(sessionType, price)
      );
    } else if (usersChildren.length > 1) {
      confirmSwal(
        confirmSureBookSession(sessionType, date),
        fundsDeductedFromBalance(price * childrenSelectedForBooking.length),
        imSureMessage,
        () => confirmResult(sessionType, price)
      );
    }
  };

  return { confirmSession };
};

export default useConfirmSession;
