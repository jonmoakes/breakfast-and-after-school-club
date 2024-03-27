import { useEffect } from "react";
import { useSelector } from "react-redux";

import useGetPasswordIsVisibleSelectors from "../../../hooks/get-selectors/use-get-password-is-visible-selectors";
import usePasswordIsVisibleActions from "../../../hooks/get-actions-and-thunks/use-password-is-visible-actions";

import { selectSignUpFormSelectors } from "../../../store/sign-up-form/sign-up-form.slice";

const useHideSignUpPasswordOnEmpty = () => {
  const { signUpPasswordIsVisible, signUpConfirmPasswordIsVisible } =
    useGetPasswordIsVisibleSelectors();
  const { signUpFormDetails } = useSelector(selectSignUpFormSelectors);
  const {
    dispatchHideSignUpPasswordIsVisible,
    dispatchHideSignUpConfirmPasswordIsVisible,
  } = usePasswordIsVisibleActions();

  const { password, confirmPassword } = signUpFormDetails;

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
