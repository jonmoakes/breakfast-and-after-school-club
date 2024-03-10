import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  resetCurrentUserErrorMessage,
  selectCurrentUserSelectors,
} from "../../../store/user/user.slice";

import {
  appwriteNoUserError,
  errorSigningInMessage,
  errorSigningInInstructions,
  appwriteCredentialsError,
  errorReceivedMessage,
} from "../../../strings/errors/errors-strings";

const useHandleSignInFormError = () => {
  const { fireSwal } = useFireSwal();

  const { currentUserError } = useSelector(selectCurrentUserSelectors);

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !currentUserError ||
      (currentUserError && currentUserError === appwriteNoUserError)
    )
      return;

    fireSwal(
      "error",
      errorSigningInMessage,
      errorSigningInInstructions,
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(resetCurrentUserErrorMessage());
      }
    );
  }, [fireSwal, currentUserError, dispatch]);
};

export default useHandleSignInFormError;
