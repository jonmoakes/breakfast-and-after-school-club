import { useDispatch, useSelector } from "react-redux";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectNewPasswordDetails } from "../../../store/forgot-password-result/forgot-password-result.selector";
import { submitForgotPasswordResultAsync } from "../../../store/forgot-password-result/forgot-password-result.slice";

import {
  imSureMessage,
  sureResetPasswordMessage,
} from "../../../strings/strings";

const useConfirmResetPassword = () => {
  const { confirmSwal } = useConfirmSwal();

  const newPasswordDetails = useSelector(selectNewPasswordDetails);
  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(submitForgotPasswordResultAsync({ newPasswordDetails }));
  };

  const confirmResetPassword = () => {
    confirmSwal(sureResetPasswordMessage, "", imSureMessage, confirmResult);
  };
  return { confirmResetPassword };
};

export default useConfirmResetPassword;
