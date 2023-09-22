import { useDispatch, useSelector } from "react-redux";

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
    confirmSwal(
      confirmSureBookSession(sessionType, date),
      fundsDeductedFromBalance(price),
      imSureMessage,
      () => confirmResult(sessionType, price)
    );
  };

  return { confirmSession };
};

export default useConfirmSession;
