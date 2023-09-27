import { useDispatch, useSelector } from "react-redux";

import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import { selectChildrenToBook } from "../../../store/book-session/book-session.selector";
import { setSessionType } from "../../../store/book-session/book-session.slice";

import useConditionalLogic from "./use-conditional-logic";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectCurrentUser } from "../../../store/user/user.selector";
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
  const usersChildren = useSelector(selectUsersChildren);
  const childrenToBook = useSelector(selectChildrenToBook);

  console.log(childrenToBook);
  const { id } = currentUser;

  const dispatch = useDispatch();

  const confirmResult = (sessionType, price) => {
    dispatch(updateSessionDocAsync({ date, sessionType })).then(
      (resultAction) => {
        if (updateSessionDocAsync.fulfilled.match(resultAction)) {
          dispatch(updateUserDocBalanceAsync({ id, price }));
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
        fundsDeductedFromBalance(price * usersChildren.length),
        imSureMessage,
        () => confirmResult(sessionType, price * usersChildren.length)
      );
    }
  };

  return { confirmSession };
};

export default useConfirmSession;
