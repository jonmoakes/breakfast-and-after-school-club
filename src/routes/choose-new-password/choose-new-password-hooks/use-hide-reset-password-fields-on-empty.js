import { useEffect } from "react";

import useGetChooseNewPasswordSelectors from "../../../hooks/get-selectors/use-get-choose-new-password-selectors";
import useGetPasswordIsVisibleSelectors from "../../../hooks/get-selectors/use-get-password-is-visible-selectors";
import usePasswordIsVisibleActions from "../../../hooks/get-actions-and-thunks/use-password-is-visible-actions";

const useHideResetPasswordFieldsOnEmpty = () => {
  const { newPassword, confirmNewPassword } =
    useGetChooseNewPasswordSelectors();
  const { resetPasswordIsVisible, resetPasswordConfirmPasswordIsVisible } =
    useGetPasswordIsVisibleSelectors();
  const {
    dispatchHideResetPasswordIsVisible,
    dispatchHideResetPasswordConfirmPasswordIsVisible,
  } = usePasswordIsVisibleActions();

  useEffect(() => {
    if (resetPasswordIsVisible && !newPassword.length) {
      dispatchHideResetPasswordIsVisible();
    } else if (
      resetPasswordConfirmPasswordIsVisible &&
      !confirmNewPassword.length
    ) {
      dispatchHideResetPasswordConfirmPasswordIsVisible();
    }
  }, [
    confirmNewPassword,
    newPassword,
    resetPasswordConfirmPasswordIsVisible,
    resetPasswordIsVisible,
    dispatchHideResetPasswordIsVisible,
    dispatchHideResetPasswordConfirmPasswordIsVisible,
  ]);
};

export default useHideResetPasswordFieldsOnEmpty;
