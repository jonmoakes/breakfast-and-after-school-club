import { useDispatch, useSelector } from "react-redux";

import useGetRequestDateDataValues from "./use-get-request-date-data-values";
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

const useConfirmBookSession = () => {
  const { confirmSwal } = useConfirmSwal();
  const { date } = useGetRequestDateDataValues();

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

  const confirmBookSession = (sessionType, price) => {
    console.log(sessionType);
    confirmSwal(
      confirmSureBookSession(sessionType, date),
      fundsDeductedFromBalance(price),
      imSureMessage,
      () => confirmResult(sessionType, price)
    );
  };

  return { confirmBookSession };
};

export default useConfirmBookSession;
