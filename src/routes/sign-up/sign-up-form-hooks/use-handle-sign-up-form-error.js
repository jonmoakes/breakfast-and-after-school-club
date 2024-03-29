import { useEffect } from "react";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useCurrentUserActions from "../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  appwriteNoUserError,
  errorSigningUpMessage,
} from "../../../strings/errors/errors-strings";

const useHandleSignUpFormError = () => {
  const { currentUserError } = useGetCurrentUserSelectors();
  const { dispatchResetCurrentUserErrorMessage } = useCurrentUserActions();
  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!currentUserError || currentUserError === appwriteNoUserError) return;
    fireSwal("error", errorSigningUpMessage, currentUserError, 0, true, false);
    dispatchResetCurrentUserErrorMessage();
  }, [fireSwal, currentUserError, dispatchResetCurrentUserErrorMessage]);
};

export default useHandleSignUpFormError;
