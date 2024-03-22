import { useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";
import useGetChooseNewPasswordSelectors from "../../../hooks/get-selectors/use-get-choose-new-password-selectors";

import { getChooseNewPasswordResultAsync } from "../../../store/choose-new-password/choose-new-password.thunks";

import {
  passwordLengthErrorMessage,
  passwordsDontMatchMessage,
} from "../../../strings/errors/errors-strings";
import {
  sureResetPasswordMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmUpdatePassword = () => {
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();
  const { newPassword, confirmNewPassword } =
    useGetChooseNewPasswordSelectors();

  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(
      getChooseNewPasswordResultAsync({ newPassword, confirmNewPassword })
    );
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
