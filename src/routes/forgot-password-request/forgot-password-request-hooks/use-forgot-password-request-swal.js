import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import {
  resetForgotPasswordRequestState,
  selectForgotPasswordRequestSelectors,
} from "../../../store/forgot-password-request/forgot-password-request.slice";

import {
  appwriteUserNotFoundMessage,
  checkEmailMessage,
  emailAddressNotInDatabase,
  errorReceivedMessage,
  errorRequestForgotPasswordLinkMessage,
  successMessage,
} from "../../../strings/strings";

const useForgotPasswordRequestSwal = () => {
  const { fireSwal } = useFireSwal();

  const { forgotPasswordRequestResult, forgotPasswordRequestError } =
    useSelector(selectForgotPasswordRequestSelectors);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!forgotPasswordRequestResult && !forgotPasswordRequestError) return;

    if (forgotPasswordRequestResult) {
      fireSwal(
        "success",
        successMessage,
        checkEmailMessage,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetForgotPasswordRequestState());
        }
      });
    } else if (forgotPasswordRequestError) {
      const error =
        forgotPasswordRequestError === appwriteUserNotFoundMessage
          ? emailAddressNotInDatabase
          : forgotPasswordRequestError;
      fireSwal(
        "error",
        errorRequestForgotPasswordLinkMessage,
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetForgotPasswordRequestState());
        }
      });
    }
  }, [
    dispatch,
    forgotPasswordRequestError,
    fireSwal,
    forgotPasswordRequestResult,
  ]);
};

export default useForgotPasswordRequestSwal;
