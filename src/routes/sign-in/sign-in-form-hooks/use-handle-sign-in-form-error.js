import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import { resetUserErrorMessage } from "../../../store/user/user.slice";
import { selectUserError } from "../../../store/user/user.selector";
import {
  appwriteNoUserError,
  errorSigningInMessage,
  errorSigningInInstructions,
} from "../../../strings/strings";

const useHandleSignInFormError = () => {
  const { fireSwal } = useFireSwal();

  const error = useSelector(selectUserError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!error || (error && error === appwriteNoUserError)) return;

    fireSwal(
      "error",
      errorSigningInMessage,
      errorSigningInInstructions,
      0,
      true,
      false
    );
    dispatch(resetUserErrorMessage());
  }, [fireSwal, error, dispatch]);
};

export default useHandleSignInFormError;
