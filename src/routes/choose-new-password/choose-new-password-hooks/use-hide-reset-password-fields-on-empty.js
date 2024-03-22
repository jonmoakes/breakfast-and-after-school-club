import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import useGetChooseNewPasswordSelectors from "../../../hooks/get-selectors/use-get-choose-new-password-selectors";

import {
  hideResetPasswordIsVisible,
  hideResetPasswordConfirmPasswordIsVisible,
  selectPasswordIsVisibleSelectors,
} from "../../../store/password-is-visible/password-is-visible.slice";

const useHideResetPasswordFieldsOnEmpty = () => {
  const { newPassword, confirmNewPassword } =
    useGetChooseNewPasswordSelectors();

  const { resetPasswordIsVisible, resetPasswordConfirmPasswordIsVisible } =
    useSelector(selectPasswordIsVisibleSelectors);

  const dispatch = useDispatch();

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
