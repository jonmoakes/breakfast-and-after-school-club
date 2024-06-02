import { useEffect } from "react";

import useGetSendEmailSelectors from "../../../hooks/get-selectors/use-get-send-email-selectors";
import useGetUpdateEmailSelectors from "../../../hooks/get-selectors/use-get-update-email-selectors";
import useUpdateEmailActions from "../../../hooks/get-actions-and-thunks/update-email-actions-and-thunks/use-update-email-actions";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  appwritePasswordError,
  errorUpdatingEmailMessage,
  passwordErrorMessage,
} from "../../../strings/errors/errors-strings";
import {
  emailChangedMessage,
  passwordErrorInstructions,
  signInWithNewEmailMessage,
  updatedEmailButFailedToInformAppOwnerMessage,
} from "../../../strings/infos/infos-strings";

import { signInRoute } from "../../../strings/routes/routes-strings";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

const useUpdateEmailResultResultSwal = () => {
  const { updateEmailResult, updateEmailError } = useGetUpdateEmailSelectors();
  const { sendEmailError, sendEmailStatusCode } = useGetSendEmailSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { dispatchResetUpdateEmailError, dispatchResetUpdateEmailResult } =
    useUpdateEmailActions();
  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!updateEmailResult && !updateEmailError && !sendEmailError) return;

    if (updateEmailResult === "fulfilled" && sendEmailStatusCode === 202) {
      fireSwal(
        "success",
        emailChangedMessage,
        signInWithNewEmailMessage,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(signInRoute);
          window.location.reload();
        }
      });
    } else if (updateEmailResult === "fulfilled" && sendEmailError) {
      fireSwal(
        "error",
        updatedEmailButFailedToInformAppOwnerMessage,
        "",
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(signInRoute);
          window.location.reload();
        }
      });
    } else if (
      updateEmailResult === "rejected" &&
      updateEmailError === appwritePasswordError
    ) {
      fireSwal(
        "error",
        passwordErrorMessage,
        passwordErrorInstructions,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetUpdateEmailError();
          dispatchResetUpdateEmailResult();
        }
      });
    } else if (
      updateEmailResult === "rejected" &&
      updateEmailError !== appwritePasswordError
    ) {
      const error = updateEmailError;
      fireSwal(
        "error",
        errorUpdatingEmailMessage(error),
        "",
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetUpdateEmailError();
          dispatchResetUpdateEmailResult();
        }
      });
    }
  }, [
    updateEmailResult,
    updateEmailError,
    fireSwal,
    dispatchResetUpdateEmailError,
    dispatchResetUpdateEmailResult,
    sendEmailError,
    sendEmailStatusCode,
    hamburgerHandlerNavigate,
  ]);
};

export default useUpdateEmailResultResultSwal;
