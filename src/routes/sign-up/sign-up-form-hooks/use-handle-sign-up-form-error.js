import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";

import { resetCurrentUserErrorMessage } from "../../../store/user/user.slice";

import {
  appwriteNoUserError,
  errorSigningUpMessage,
} from "../../../strings/errors/errors-strings";

const useHandleSignUpFormError = () => {
  const { currentUserError } = useGetCurrentUserSelectors();
  const { fireSwal } = useFireSwal();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUserError || currentUserError === appwriteNoUserError) return;
    fireSwal("error", errorSigningUpMessage, currentUserError, 0, true, false);
    dispatch(resetCurrentUserErrorMessage());
  }, [fireSwal, currentUserError, dispatch]);
};

export default useHandleSignUpFormError;
