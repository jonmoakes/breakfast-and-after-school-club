import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import { resetErrorMessage } from "../../../store/user/user.slice";
import { selectError } from "../../../store/user/user.selector";
import {
  appwriteNoUserError,
  errorSigningInMessage,
} from "../../../strings/strings";

const useHandleSignInFormError = () => {
  const { fireSwal } = useFireSwal();

  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!error || (error && error === appwriteNoUserError)) return;

    fireSwal("error", errorSigningInMessage, error, 0, true, false);
    dispatch(resetErrorMessage());
  }, [fireSwal, error, dispatch]);
};

export default useHandleSignInFormError;
