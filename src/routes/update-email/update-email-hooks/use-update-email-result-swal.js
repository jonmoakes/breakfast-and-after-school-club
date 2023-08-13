import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectUpdateEmailResult,
  selectUpdateEmailError,
} from "../../../store/update-email/update-email.selector";
import { resetError } from "../../../store/update-email/update-email.slice";

import {
  appwritePasswordError,
  emailChangedMessage,
  errorUpdatingEmailMessage,
  passwordErrorInstructions,
  passwordErrorMessage,
  signInWithNewEmailMessage,
} from "../../../strings/strings";

const useUpdateEmailResultResultSwal = () => {
  const { fireSwal } = useFireSwal();

  const result = useSelector(selectUpdateEmailResult);
  const error = useSelector(selectUpdateEmailError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!result && !error) return;

    if (result === "succeeded") {
      fireSwal(
        "success",
        emailChangedMessage,
        signInWithNewEmailMessage,
        0,
        false,
        false
      );
      setTimeout(function () {
        window.location.reload();
      }, 5000);
    } else if (
      result === "failure" &&
      error &&
      error === appwritePasswordError
    ) {
      fireSwal(
        "error",
        passwordErrorMessage,
        passwordErrorInstructions,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetError());
        }
      });
    } else if (
      result === "failure" &&
      error &&
      error !== appwritePasswordError
    ) {
      fireSwal(
        "error",
        errorUpdatingEmailMessage,
        `The error received was: ${error}`,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetError());
        }
      });
    }
  }, [result, error, fireSwal, dispatch]);
};

export default useUpdateEmailResultResultSwal;
