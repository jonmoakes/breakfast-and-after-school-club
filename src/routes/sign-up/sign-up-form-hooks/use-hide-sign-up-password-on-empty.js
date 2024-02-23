import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  hideSignUpPasswordIsVisible,
  hideSignUpConfirmPasswordIsVisible,
  selectPasswordIsVisibleSelectors,
} from "../../../store/password-is-visible/password-is-visible.slice";

import { selectSignUpFormDetails } from "../../../store/sign-up-form/sign-up-form.selector";

const useHideSignUpPasswordOnEmpty = () => {
  const { signUpPasswordIsVisible, signUpConfirmPasswordIsVisible } =
    useSelector(selectPasswordIsVisibleSelectors);
  const signUpFormDetails = useSelector(selectSignUpFormDetails);

  const dispatch = useDispatch();
  const { password, confirmPassword } = signUpFormDetails;

  useEffect(() => {
    if (signUpPasswordIsVisible && !password.length) {
      dispatch(hideSignUpPasswordIsVisible());
    } else if (signUpConfirmPasswordIsVisible && !confirmPassword.length) {
      dispatch(hideSignUpConfirmPasswordIsVisible());
    }
  }, [
    password,
    confirmPassword,
    signUpPasswordIsVisible,
    signUpConfirmPasswordIsVisible,
    dispatch,
  ]);
};

export default useHideSignUpPasswordOnEmpty;
