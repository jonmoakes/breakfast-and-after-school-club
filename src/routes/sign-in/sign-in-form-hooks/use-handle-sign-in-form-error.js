import { useEffect } from "react";

import useFireSwal from "../../../hooks/use-fire-swal";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useCurrentUserActions from "../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";

import {
  appwriteNoUserError,
  errorSigningInMessage,
  errorSigningInInstructions,
  appwriteCredentialsError,
  errorReceivedMessage,
  passwordLengthErrorMessage,
  appwritePasswordLengthError,
} from "../../../strings/errors/errors-strings";

const useHandleSignInFormError = () => {
  const { currentUserError } = useGetCurrentUserSelectors();
  const { dispatchResetCurrentUserErrorMessage } = useCurrentUserActions();
  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (
      !currentUserError ||
      (currentUserError &&
        (currentUserError === appwriteNoUserError ||
          currentUserError === "no user found" ||
          currentUserError === "Failed to fetch"))
    )
      return;

    if (
      currentUserError &&
      currentUserError === "action fulfilled but no user"
    ) {
      fireSwal(
        "error",
        errorSigningInMessage,
        errorSigningInInstructions,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          window.location.reload();
        }
      });
    } else {
      // const error = currentUserError;
      // const errorDetails =
      //   currentUserError && currentUserError === appwriteCredentialsError
      //     ? errorSigningInInstructions
      //     : currentUserError &&
      //       currentUserError ===
      //         "Invalid `password` param: Password must be between 8 and 256 characters long."
      //     ? passwordLengthErrorMessage
      //     : errorReceivedMessage(error);

      const error =
        currentUserError === appwriteCredentialsError
          ? appwriteCredentialsError
          : currentUserError === appwritePasswordLengthError
          ? passwordLengthErrorMessage
          : currentUserError;

      fireSwal(
        "error",
        errorSigningInMessage,
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetCurrentUserErrorMessage();
        }
      });
    }
  }, [fireSwal, currentUserError, dispatchResetCurrentUserErrorMessage]);
};

export default useHandleSignInFormError;
