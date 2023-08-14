import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectUpdatePasswordResult,
  selectUpdatePasswordResultError,
} from "../../../store/update-password-result/update-password-result.selector";

import { resetError } from "../../../store/update-password-result/update-password-result.slice";

import {
  alreadyClickedOnUpdatePasswordLink,
  errorUpdatingPasswordMessage,
  invalidTokenPassedInRequest,
  passwordResetSuccessMessage,
  signInRoute,
  signOutThenSignInWithNewPasswordMessage,
  updatePasswordRequestRoute,
} from "../../../strings/strings";

const useUpdatePasswordResultSwal = () => {
  const { fireSwal } = useFireSwal();

  const result = useSelector(selectUpdatePasswordResult);
  const error = useSelector(selectUpdatePasswordResultError);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!result && !error) return;

    if (result === "succeeded") {
      fireSwal(
        "success",
        passwordResetSuccessMessage,
        signOutThenSignInWithNewPasswordMessage,
        5000,
        false,
        false
      );
      navigate(signInRoute);
      setTimeout(function () {
        window.location.reload();
      }, 5000);
    } else if (
      result === "failure" &&
      error &&
      error === invalidTokenPassedInRequest
    ) {
      fireSwal(
        "error",
        errorUpdatingPasswordMessage,
        alreadyClickedOnUpdatePasswordLink,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetError());
          navigate(updatePasswordRequestRoute);
        }
      });
    } else if (
      result === "failure" &&
      error &&
      error !== invalidTokenPassedInRequest
    ) {
      fireSwal(
        "error",
        errorUpdatingPasswordMessage,
        `the error received was: ${error}`,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetError());
          navigate(updatePasswordRequestRoute);
        }
      });
    }
  }, [result, error, fireSwal, dispatch, navigate]);
};

export default useUpdatePasswordResultSwal;
