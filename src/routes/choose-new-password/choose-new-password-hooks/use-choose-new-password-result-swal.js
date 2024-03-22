import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";
import useResetAllStoreOnSignOut from "../../../hooks/use-reset-all-store-on-sign-out";
import useGetChooseNewPasswordSelectors from "../../../hooks/get-selectors/use-get-choose-new-password-selectors";
import useChooseNewPasswordActions from "../../../hooks/get-actions-and-thunks/choose-new-password-actions-and-thunks/use-choose-new-password-actions";
import { selectCurrentUserSelectors } from "../../../store/user/user.slice";
import { signOutAsync } from "../../../store/user/user.thunks";

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
  const { newPasswordResult, newPasswordError } =
    useGetChooseNewPasswordSelectors();
  const { dispatchResetPasswordResultError } = useChooseNewPasswordActions();

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
          dispatchResetPasswordResultError();
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
    dispatchResetPasswordResultError,
  ]);
};

export default useChooseNewPasswordResultSwal;
