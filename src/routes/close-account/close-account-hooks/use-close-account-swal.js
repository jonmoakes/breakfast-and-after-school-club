import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectSendEmailStatusCode,
  selectSendEmailError,
  resetSendEmailState,
} from "../../../store/send-email/send-email.slice";

import {
  accountRoute,
  errorSendingAccountClosureRequest,
  receiveEmailWhenCompleteMessage,
  successSendingCloseAccountEmailMessage,
} from "../../../strings/strings";

const useCloseAccountSwal = () => {
  const { fireSwal } = useFireSwal();

  const statusCode = useSelector(selectSendEmailStatusCode);
  const error = useSelector(selectSendEmailError);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!statusCode && !error) return;

    if (statusCode === 202) {
      fireSwal(
        "success",
        successSendingCloseAccountEmailMessage,
        receiveEmailWhenCompleteMessage,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetSendEmailState());
          navigate(accountRoute);
        }
      });
    } else {
      fireSwal(
        "error",
        errorSendingAccountClosureRequest,
        `the error received was: '${error}'.please try again or contact the school directly if the error continues.`,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetSendEmailState());
        }
      });
    }
  }, [statusCode, error, fireSwal, dispatch, navigate]);
};

export default useCloseAccountSwal;
