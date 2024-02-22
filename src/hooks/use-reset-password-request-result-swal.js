import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "./use-fire-swal";
import {
  selectGenerateNewPasswordRequestSelectors,
  resetGenerateNewPasswordRequestState,
} from "../store/generate-new-password-request/generate-new-password-request.slice";

import {
  appwriteUserNotFoundMessage,
  checkEmailMessage,
  emailAddressNotInDatabase,
  errorReceivedMessage,
  errorRequestResetPasswordLinkMessage,
  successMessage,
} from "../strings/strings";

const useResetPasswordRequestResultSwal = () => {
  const { fireSwal } = useFireSwal();

  const { generateNewPasswordRequestResult, generateNewPasswordRequestError } =
    useSelector(selectGenerateNewPasswordRequestSelectors);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!generateNewPasswordRequestResult && !generateNewPasswordRequestError)
      return;

    if (generateNewPasswordRequestResult) {
      fireSwal(
        "success",
        successMessage,
        checkEmailMessage,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetGenerateNewPasswordRequestState());
        }
      });
    } else if (generateNewPasswordRequestError) {
      const error =
        generateNewPasswordRequestError === appwriteUserNotFoundMessage
          ? emailAddressNotInDatabase
          : generateNewPasswordRequestError;
      fireSwal(
        "error",
        errorRequestResetPasswordLinkMessage,
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetGenerateNewPasswordRequestState());
        }
      });
    }
  }, [
    dispatch,
    generateNewPasswordRequestError,
    fireSwal,
    generateNewPasswordRequestResult,
  ]);
};

export default useResetPasswordRequestResultSwal;
