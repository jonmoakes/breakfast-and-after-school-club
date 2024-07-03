import { useEffect } from "react";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import useGetChooseNewPasswordSelectors from "../../../hooks/get-selectors/use-get-choose-new-password-selectors";
import useChooseNewPasswordActions from "../../../hooks/get-actions-and-thunks/choose-new-password-actions-and-thunks/use-choose-new-password-actions";
import useSignOutSubmitThunk from "../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-sign-out-submit-thunk";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

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
  const { signOutSubmitThunk } = useSignOutSubmitThunk();
  const { dispatchResetPasswordResultError } = useChooseNewPasswordActions();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

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
          signOutSubmitThunk();
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
          hamburgerHandlerNavigate(signInRoute);
        }
      });
    } else if (newPasswordError) {
      const error =
        newPasswordError ===
        "Invalid `password` param: Password must be between 8 and 265 characters long, and should not be one of the commonly used password."
          ? "the password you chose is not secure"
          : newPasswordError;

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
    hamburgerHandlerNavigate,
    currentUser,
    dispatchResetPasswordResultError,
    signOutSubmitThunk,
  ]);
};

export default useChooseNewPasswordResultSwal;
