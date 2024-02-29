import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  resetCurrentUserErrorMessage,
  selectCurrentUserSelectors,
} from "../../../store/user/user.slice";

import {
  appwriteNoUserError,
  errorSigningUpMessage,
} from "../../../strings/strings";

const useHandleSignUpFormError = () => {
  const { fireSwal } = useFireSwal();

  const { currentUserError } = useSelector(selectCurrentUserSelectors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUserError || currentUserError === appwriteNoUserError) return;
    fireSwal("error", errorSigningUpMessage, currentUserError, 0, true, false);
    dispatch(resetCurrentUserErrorMessage());
  }, [fireSwal, currentUserError, dispatch]);
};

export default useHandleSignUpFormError;
