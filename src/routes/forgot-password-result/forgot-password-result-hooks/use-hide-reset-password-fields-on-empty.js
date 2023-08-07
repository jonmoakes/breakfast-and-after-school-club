import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectResetPasswordIsVisible,
  selectResetPasswordConfirmPasswordIsVisible,
} from "../../../store/password-is-visible/password-is-visible.selector";
import {
  hideResetPasswordIsVisible,
  hideResetPasswordConfirmPasswordIsVisible,
} from "../../../store/password-is-visible/password-is-visible.slice";
import { selectNewPasswordDetails } from "../../../store/forgot-password-result/forgot-password-result.selector";

const useHideResetPasswordFieldsOnEmpty = () => {
  const resetPasswordIsVisible = useSelector(selectResetPasswordIsVisible);
  const resetPasswordConfirmPasswordIsVisible = useSelector(
    selectResetPasswordConfirmPasswordIsVisible
  );
  const newPasswordDetails = useSelector(selectNewPasswordDetails);

  const dispatch = useDispatch();
  const { newPassword, confirmNewPassword } = newPasswordDetails;

  useEffect(() => {
    if (resetPasswordIsVisible && !newPassword.length) {
      dispatch(hideResetPasswordIsVisible());
    } else if (
      resetPasswordConfirmPasswordIsVisible &&
      !confirmNewPassword.length
    ) {
      dispatch(hideResetPasswordConfirmPasswordIsVisible());
    }
  }, [
    confirmNewPassword,
    newPassword,
    resetPasswordConfirmPasswordIsVisible,
    resetPasswordIsVisible,
    dispatch,
  ]);
};

export default useHideResetPasswordFieldsOnEmpty;
