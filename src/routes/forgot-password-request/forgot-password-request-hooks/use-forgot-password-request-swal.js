import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectForgotPasswordRequestError,
  selectForgotPasswordRequestResult,
} from "../../../store/forgot-password-request/forgot-password-request.selector";
import {
  resetPasswordRequestError,
  resetPasswordRequestResult,
} from "../../../store/forgot-password-request/forgot-password-request.slice";

import {
  appwriteUserNotFoundMessage,
  checkEmailMessage,
  emailAddressNotInDatabase,
  errorRequestForgotPasswordLinkMessage,
  successMessage,
} from "../../../strings/strings";

const useForgotPasswordRequestSwal = () => {
  const { fireSwal } = useFireSwal();

  const requestResult = useSelector(selectForgotPasswordRequestResult);
  const error = useSelector(selectForgotPasswordRequestError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!error && !requestResult) return;

    if (requestResult) {
      fireSwal(
        "success",
        successMessage,
        checkEmailMessage,
        "",
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetPasswordRequestResult());
        }
      });
    } else if (error) {
      const errorMessageResult =
        error === appwriteUserNotFoundMessage
          ? emailAddressNotInDatabase
          : `${error}`;
      fireSwal(
        "error",
        errorRequestForgotPasswordLinkMessage,
        errorMessageResult,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetPasswordRequestError());
        }
      });
    }
  }, [dispatch, error, fireSwal, requestResult]);
};

export default useForgotPasswordRequestSwal;
