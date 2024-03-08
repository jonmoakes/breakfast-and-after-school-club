import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  resetUpdateEmailError,
  selectUpdateEmailSelectors,
} from "../../../store/update-email/update-email.slice";

import {
  appwritePasswordError,
  errorReceivedMessage,
  errorUpdatingEmailMessage,
  passwordErrorMessage,
} from "../../../strings/errors/errors-strings";
import {
  emailChangedMessage,
  passwordErrorInstructions,
  signInWithNewEmailMessage,
} from "../../../strings/infos/infos-strings";

const useUpdateEmailResultResultSwal = () => {
  const { fireSwal } = useFireSwal();

  const { updateEmailResult, updateEmailError } = useSelector(
    selectUpdateEmailSelectors
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!updateEmailResult && !updateEmailError) return;

    if (updateEmailResult === "succeeded") {
      fireSwal(
        "success",
        emailChangedMessage,
        signInWithNewEmailMessage,
        0,
        false,
        false
      );
      setTimeout(function () {
        navigate("/");
        window.location.reload();
      }, 5000);
    } else if (
      updateEmailResult === "failure" &&
      updateEmailError &&
      updateEmailError === appwritePasswordError
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
          dispatch(resetUpdateEmailError());
        }
      });
    } else if (
      updateEmailResult === "failure" &&
      updateEmailError &&
      updateEmailError !== appwritePasswordError
    ) {
      const error = updateEmailError;
      fireSwal(
        "error",
        errorUpdatingEmailMessage,
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetUpdateEmailError());
        }
      });
    }
  }, [updateEmailResult, updateEmailError, fireSwal, dispatch, navigate]);
};

export default useUpdateEmailResultResultSwal;
