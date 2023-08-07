import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectForgotPasswordResultError,
  selectForgotPasswordResult,
} from "../../../store/forgot-password-result/forgot-password-result.selector";

import {
  resetPasswordResult,
  clearNewPasswordDetails,
  resetPasswordResultError,
} from "../../../store/forgot-password-result/forgot-password-result.slice";

import {
  errorResettingPassword,
  passwordResetSuccessMessage,
  signInRoute,
  signInWithNewPasswordMessage,
} from "../../../strings/strings";

const useForgotPasswordResultSwal = () => {
  const { fireSwal } = useFireSwal();

  const error = useSelector(selectForgotPasswordResultError);
  const result = useSelector(selectForgotPasswordResult);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!error && !result) return;

    if (result) {
      fireSwal(
        "success",
        passwordResetSuccessMessage,
        signInWithNewPasswordMessage,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetPasswordResult());
          dispatch(clearNewPasswordDetails());
          navigate(signInRoute);
        }
      });
    } else if (error) {
      fireSwal("error", errorResettingPassword, error, 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatch(resetPasswordResultError());
          }
        }
      );
    }
  }, [error, result, dispatch, fireSwal, navigate]);
};

export default useForgotPasswordResultSwal;
