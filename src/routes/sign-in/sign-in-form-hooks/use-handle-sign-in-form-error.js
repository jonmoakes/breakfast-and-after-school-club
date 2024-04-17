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
} from "../../../strings/errors/errors-strings";

const useHandleSignInFormError = () => {
  const { currentUserError } = useGetCurrentUserSelectors();
  const { dispatchResetCurrentUserErrorMessage } = useCurrentUserActions();
  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (
      !currentUserError ||
      (currentUserError && currentUserError === appwriteNoUserError)
    )
      return;

    const error = currentUserError;
    const errorDetails =
      (currentUserError && currentUserError === appwriteCredentialsError) ||
      (currentUserError && currentUserError === "action fulfilled but no user")
        ? errorSigningInInstructions
        : errorReceivedMessage(error);

    fireSwal("error", errorSigningInMessage, errorDetails, 0, true, false).then(
      (isConfirmed) => {
        if (isConfirmed) {
          dispatchResetCurrentUserErrorMessage();
        }
      }
    );
  }, [fireSwal, currentUserError, dispatchResetCurrentUserErrorMessage]);
};

export default useHandleSignInFormError;
