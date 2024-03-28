import { useEffect } from "react";

import useGetSignUpFormSelectors from "../../../hooks/get-selectors/use-get-sign-up-form-selectors";
import useGetPasswordIsVisibleSelectors from "../../../hooks/get-selectors/use-get-password-is-visible-selectors";
import usePasswordIsVisibleActions from "../../../hooks/get-actions-and-thunks/use-password-is-visible-actions";

const useHideSignUpPasswordOnEmpty = () => {
  const { password, confirmPassword } = useGetSignUpFormSelectors();
  const { signUpPasswordIsVisible, signUpConfirmPasswordIsVisible } =
    useGetPasswordIsVisibleSelectors();
  const {
    dispatchHideSignUpPasswordIsVisible,
    dispatchHideSignUpConfirmPasswordIsVisible,
  } = usePasswordIsVisibleActions();

  useEffect(() => {
    if (signUpPasswordIsVisible && !password.length) {
      dispatchHideSignUpPasswordIsVisible();
    } else if (signUpConfirmPasswordIsVisible && !confirmPassword.length) {
      dispatchHideSignUpConfirmPasswordIsVisible();
    }
  }, [
    password,
    confirmPassword,
    signUpPasswordIsVisible,
    signUpConfirmPasswordIsVisible,
    dispatchHideSignUpPasswordIsVisible,
    dispatchHideSignUpConfirmPasswordIsVisible,
  ]);
};

export default useHideSignUpPasswordOnEmpty;
