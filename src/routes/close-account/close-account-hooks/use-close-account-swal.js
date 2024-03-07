import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  resetSendEmailState,
  selectSendEmailSelectors,
} from "../../../store/send-email/send-email.slice";

import { successSendingCloseAccountEmailMessage } from "../../../strings/successes/successes-strings";
import { receiveEmailWhenCompleteMessage } from "../../../strings/infos/infos-strings";
import { errorSendingAccountClosureRequest } from "../../../strings/errors/errors-strings";
import { accountRoute } from "../../../strings/routes/routes-strings";

const useCloseAccountSwal = () => {
  const { fireSwal } = useFireSwal();

  const { sendEmailStatusCode, sendEmailError } = useSelector(
    selectSendEmailSelectors
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!sendEmailStatusCode && !sendEmailError) return;

    if (sendEmailStatusCode === 202) {
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
        `the error received was: '${sendEmailError}'.please try again or contact the school directly if the error continues.`,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetSendEmailState());
        }
      });
    }
  }, [sendEmailStatusCode, sendEmailError, fireSwal, dispatch, navigate]);
};

export default useCloseAccountSwal;
