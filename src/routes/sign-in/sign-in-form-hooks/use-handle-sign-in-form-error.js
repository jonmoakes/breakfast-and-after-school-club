import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

import { resetCurrentUserErrorMessage } from "../../../store/user/user.slice";

import {
  appwriteNoUserError,
  errorSigningInMessage,
  errorSigningInInstructions,
  appwriteCredentialsError,
  errorReceivedMessage,
} from "../../../strings/errors/errors-strings";

const useHandleSignInFormError = () => {
  const { currentUserError } = useGetCurrentUserSelectors();
  const { fireSwal } = useFireSwal();

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !currentUserError ||
      (currentUserError && currentUserError === appwriteNoUserError)
    )
      return;

    const error = currentUserError;
    const errorDetails =
      currentUserError && currentUserError === appwriteCredentialsError
        ? errorSigningInInstructions
        : errorReceivedMessage(error);

    fireSwal("error", errorSigningInMessage, errorDetails, 0, true, false).then(
      (isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetCurrentUserErrorMessage());
        }
      }
    );
  }, [fireSwal, currentUserError, dispatch]);
};

export default useHandleSignInFormError;
