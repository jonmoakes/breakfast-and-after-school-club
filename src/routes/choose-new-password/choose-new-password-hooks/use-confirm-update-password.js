import { useDispatch, useSelector } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";

import { selectChooseNewPasswordSelectors } from "../../../store/choose-new-password/choose-new-password.slice";
import { getChooseNewPasswordResultAsync } from "../../../store/choose-new-password/choose-new-password.thunks";

import {
  imSureMessage,
  passwordLengthErrorMessage,
  passwordsDontMatchMessage,
  sureResetPasswordMessage,
} from "../../../strings/strings";

const useConfirmUpdatePassword = () => {
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const { newPasswordDetails } = useSelector(selectChooseNewPasswordSelectors);

  const dispatch = useDispatch();

  const { newPassword, confirmNewPassword } = newPasswordDetails;

  const confirmResult = () => {
    dispatch(getChooseNewPasswordResultAsync({ newPasswordDetails }));
  };

  const confirmUpdatePassword = () => {
    if (newPassword.length < 8 || confirmNewPassword.length < 8) {
      fireSwal("error", passwordLengthErrorMessage, "", 0, true, false);
    } else if (newPassword !== confirmNewPassword) {
      fireSwal("error", passwordsDontMatchMessage, "", 0, true, false);
    } else {
      confirmSwal(sureResetPasswordMessage, "", imSureMessage, confirmResult);
    }
  };
  return { confirmUpdatePassword };
};

export default useConfirmUpdatePassword;
