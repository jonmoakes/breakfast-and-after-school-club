import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";
import useResetAllStoreOnSignOut from "../../../hooks/use-reset-all-store-on-sign-out";

import { selectCurrentUserSelectors } from "../../../store/user/user.slice";
import { signOutAsync } from "../../../store/user/user.thunks";
import {
  selectChooseNewPasswordSelectors,
  resetPasswordResultError,
} from "../../../store/choose-new-password/choose-new-password.slice";

import {
  errorReceivedMessage,
  errorResettingPassword,
} from "../../../strings/errors/errors-strings";
import {
  logoutSoCanSignInWithNewPasswordMessage,
  signInWithNewPasswordMessage,
} from "../../../strings/infos/infos-strings";
import { passwordResetSuccessMessage } from "../../../strings/successes/successes-strings";
import { signInRoute } from "../../../strings/routes/routes-strings";

const useChooseNewPasswordResultSwal = () => {
  const { fireSwal } = useFireSwal();
  const { resetAllStoreOnSignOut } = useResetAllStoreOnSignOut();

  const { newPasswordResult, newPasswordError } = useSelector(
    selectChooseNewPasswordSelectors
  );
  const { curentUser } = useSelector(selectCurrentUserSelectors);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!newPasswordError && !newPasswordResult) return;

    if (newPasswordResult && curentUser) {
      fireSwal(
        "success",
        passwordResetSuccessMessage,
        logoutSoCanSignInWithNewPasswordMessage,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(signOutAsync());
          resetAllStoreOnSignOut();
        }
      });
    } else if (newPasswordResult && !curentUser) {
      fireSwal(
        "success",
        passwordResetSuccessMessage,
        signInWithNewPasswordMessage,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          navigate(signInRoute);
        }
      });
    } else if (newPasswordError) {
      const error = newPasswordError;
      fireSwal(
        "error",
        errorResettingPassword,
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetPasswordResultError());
        }
      });
    }
  }, [
    newPasswordError,
    newPasswordResult,
    dispatch,
    fireSwal,
    navigate,
    curentUser,
    resetAllStoreOnSignOut,
  ]);
};

export default useChooseNewPasswordResultSwal;
