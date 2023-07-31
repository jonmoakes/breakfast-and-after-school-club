import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { account } from "../../../utils/appwrite/appwrite-config";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { startLoader, stopLoader } from "../../../store/loader/loader.slice";
import { selectUpdatePasswordDetails } from "../../../store/update-password/update-password.selector";
import { clearNewPasswordDetails } from "../../../store/update-password/update-password.slice";
import { selectCurrentUser } from "../../../store/user/user.selector";

import {
  passwordResetSuccessMessage,
  signOutThenSignInWithNewPasswordMessage,
  areYouSureMessage,
  imSureMessage,
  signInRoute,
  passwordUpdateMustBeSignedInMessage,
} from "../../../strings/strings";
import { setCurrentUser } from "../../../store/user/user.slice";

const useHandleUpdatePasswordSubmit = () => {
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();

  const updatePasswordDetails = useSelector(selectUpdatePasswordDetails);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { updatePasswordNewPassword, updatePasswordConfirmNewPassword } =
    updatePasswordDetails;

  const confirmResult = () => {
    updatePassword();
  };

  const confirmUpdatePassword = () => {
    confirmSwal(areYouSureMessage, "", imSureMessage, confirmResult);
  };

  const updatePassword = async () => {
    dispatch(startLoader());
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const userId = urlParams.get("userId");
      const secret = urlParams.get("secret");

      await account.updateRecovery(
        userId,
        secret,
        updatePasswordNewPassword,
        updatePasswordConfirmNewPassword
      );
      await account.deleteSessions();
      dispatch(stopLoader());
      dispatch(setCurrentUser(null));
      dispatch(clearNewPasswordDetails());
      fireSwal(
        "success",
        passwordResetSuccessMessage,
        signOutThenSignInWithNewPasswordMessage,
        5000,
        true,
        true
      );
      navigate(signInRoute);
    } catch (error) {
      dispatch(stopLoader());
      if (!currentUser) {
        fireSwal(
          "error",
          passwordUpdateMustBeSignedInMessage,
          "",
          0,
          true,
          false
        );
      } else {
        fireSwal("error", error.message, "", 0, true, false);
      }
    }
  };

  return { confirmUpdatePassword };
};

export default useHandleUpdatePasswordSubmit;
