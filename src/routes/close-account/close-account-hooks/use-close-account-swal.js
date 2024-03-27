import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useSendEmailActions from "../../../hooks/get-actions-and-thunks/use-send-email-actions";
import useGetSendEmailSelectors from "../../../hooks/get-selectors/use-get-send-email-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";

import { successSendingCloseAccountEmailMessage } from "../../../strings/successes/successes-strings";
import { receiveEmailWhenCompleteMessage } from "../../../strings/infos/infos-strings";
import { errorSendingAccountClosureRequest } from "../../../strings/errors/errors-strings";
import { accountRoute } from "../../../strings/routes/routes-strings";

const useCloseAccountSwal = () => {
  const { sendEmailStatusCode, sendEmailError } = useGetSendEmailSelectors();
  const { dispatchResetSendEmailState } = useSendEmailActions();
  const { fireSwal } = useFireSwal();

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
          dispatchResetSendEmailState();
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
          dispatchResetSendEmailState();
        }
      });
    }
  }, [
    sendEmailStatusCode,
    sendEmailError,
    fireSwal,
    dispatchResetSendEmailState,
    navigate,
  ]);
};

export default useCloseAccountSwal;
