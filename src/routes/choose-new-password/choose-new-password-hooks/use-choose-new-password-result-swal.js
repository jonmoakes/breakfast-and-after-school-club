import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import useGetChooseNewPasswordSelectors from "../../../hooks/get-selectors/use-get-choose-new-password-selectors";
import useChooseNewPasswordActions from "../../../hooks/get-actions-and-thunks/choose-new-password-actions-and-thunks/use-choose-new-password-actions";
import useSignOutSubmitThunk from "../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-sign-out-submit-thunk";

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
  const { currentUser } = useGetCurrentUserSelectors();
  const { newPasswordResult, newPasswordError } =
    useGetChooseNewPasswordSelectors();
  const { fireSwal } = useFireSwal();
  const { signOutSoCanSignInWithNewPasswordThunk } = useSignOutSubmitThunk();
  const { dispatchResetPasswordResultError } = useChooseNewPasswordActions();

  const navigate = useNavigate();

  useEffect(() => {
    if (!newPasswordError && !newPasswordResult) return;

    if (newPasswordResult && currentUser) {
      fireSwal(
        "success",
        passwordResetSuccessMessage,
        logoutSoCanSignInWithNewPasswordMessage,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          signOutSoCanSignInWithNewPasswordThunk();
        }
      });
    } else if (newPasswordResult && !currentUser) {
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
    fireSwal,
    navigate,
    currentUser,
    dispatchResetPasswordResultError,
    signOutSoCanSignInWithNewPasswordThunk,
  ]);
};

export default useChooseNewPasswordResultSwal;
