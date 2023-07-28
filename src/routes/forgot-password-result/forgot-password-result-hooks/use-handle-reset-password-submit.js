import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { account } from "../../../utils/appwrite/appwrite-config";

import useFireSwal from "../../../hooks/use-fire-swal";

import { startLoader, stopLoader } from "../../../store/loader/loader.slice";
import { selectNewPasswordDetails } from "../../../store/forgot-password/forgot-password.selector";
import { clearNewPasswordDetails } from "../../../store/forgot-password/forgot-password.slice";

import {
  signInRoute,
  passwordResetSuccessMessage,
  signInWithNewPasswordMessage,
} from "../../../strings/strings";

const useHandleResetPasswordSubmit = () => {
  const { fireSwal } = useFireSwal();

  const newPasswordDetails = useSelector(selectNewPasswordDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { newPassword, confirmNewPassword } = newPasswordDetails;

  const handleResetPasswordSubmit = async () => {
    dispatch(startLoader());
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const userId = urlParams.get("userId");
      const secret = urlParams.get("secret");

      await account.updateRecovery(
        userId,
        secret,
        newPassword,
        confirmNewPassword
      );
      dispatch(stopLoader());
      dispatch(clearNewPasswordDetails());
      fireSwal(
        "success",
        passwordResetSuccessMessage,
        signInWithNewPasswordMessage,
        0,
        true,
        false
      );
      navigate(signInRoute);
    } catch (error) {
      dispatch(stopLoader());
      fireSwal("error", error.message, "", 0, true, false);
    }
  };

  return { handleResetPasswordSubmit };
};

export default useHandleResetPasswordSubmit;
