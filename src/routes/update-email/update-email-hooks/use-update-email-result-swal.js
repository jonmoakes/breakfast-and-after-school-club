import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import useGetUpdateEmailSelectors from "../../../hooks/get-selectors/use-get-update-email-selectors";
import useUpdateEmailActions from "../../../hooks/get-actions-and-thunks/update-email-actions-and-thunks/use-update-email-actions";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  appwritePasswordError,
  errorReceivedMessage,
  errorUpdatingEmailMessage,
  passwordErrorMessage,
} from "../../../strings/errors/errors-strings";
import {
  emailChangedMessage,
  passwordErrorInstructions,
  signInWithNewEmailMessage,
} from "../../../strings/infos/infos-strings";

const useUpdateEmailResultResultSwal = () => {
  const { updateEmailResult, updateEmailError } = useGetUpdateEmailSelectors();
  const { dispatchResetUpdateEmailError, dispatchResetUpdateEmailResult } =
    useUpdateEmailActions();
  const { fireSwal } = useFireSwal();

  const navigate = useNavigate();

  useEffect(() => {
    if (!updateEmailResult && !updateEmailError) return;

    if (updateEmailResult === "succeeded") {
      fireSwal(
        "success",
        emailChangedMessage,
        signInWithNewEmailMessage,
        0,
        false,
        false
      );
      setTimeout(function () {
        navigate("/");
        window.location.reload();
      }, 5000);
    } else if (
      updateEmailResult === "failure" &&
      updateEmailError &&
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
      updateEmailResult === "failure" &&
      updateEmailError &&
      updateEmailError !== appwritePasswordError
    ) {
      const error = updateEmailError;
      fireSwal(
        "error",
        errorUpdatingEmailMessage,
        errorReceivedMessage(error),
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
    navigate,
  ]);
};

export default useUpdateEmailResultResultSwal;
