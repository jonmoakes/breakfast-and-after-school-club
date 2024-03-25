import { useEffect } from "react";

import useGetGenerateNewPasswordRequestSelectors from "./get-selectors/use-get-generate-new-password-request-selectors";
import useGenerateNewPasswordRequestActions from "./get-actions-and-thunks/generate-new-password-request-actions-and-thunks/use-generate-new-password-request-actions";
import useFireSwal from "./use-fire-swal";

import { successMessage } from "../strings/successes/successes-strings";
import {
  errorReceivedMessage,
  errorRequestResetPasswordLinkMessage,
  emailAddressNotInDatabase,
  appwriteUserNotFoundMessage,
} from "../strings/errors/errors-strings";
import { checkEmailMessage } from "../strings/infos/infos-strings";

const useResetPasswordRequestResultSwal = () => {
  const { generateNewPasswordRequestResult, generateNewPasswordRequestError } =
    useGetGenerateNewPasswordRequestSelectors();
  const { dispatchResetGenerateNewPasswordRequestState } =
    useGenerateNewPasswordRequestActions();

  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!generateNewPasswordRequestResult && !generateNewPasswordRequestError)
      return;

    if (generateNewPasswordRequestResult) {
      fireSwal(
        "success",
        successMessage,
        checkEmailMessage,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetGenerateNewPasswordRequestState();
        }
      });
    } else if (generateNewPasswordRequestError) {
      const error =
        generateNewPasswordRequestError === appwriteUserNotFoundMessage
          ? emailAddressNotInDatabase
          : generateNewPasswordRequestError;
      fireSwal(
        "error",
        errorRequestResetPasswordLinkMessage,
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetGenerateNewPasswordRequestState();
        }
      });
    }
  }, [
    dispatchResetGenerateNewPasswordRequestState,
    generateNewPasswordRequestError,
    fireSwal,
    generateNewPasswordRequestResult,
  ]);
};

export default useResetPasswordRequestResultSwal;
