import { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectSignUpFormDetails } from "../../../store/sign-up-form/sign-up-form.selector";

const useResetPasswordVisibility = (setIsVisible, setConfirmIsVisible) => {
  const signUpFormDetails = useSelector(selectSignUpFormDetails);
  const { password, confirmPassword } = signUpFormDetails;

  useEffect(() => {
    if (!password.trim().length) {
      setIsVisible(false);
    } else if (!confirmPassword.trim().length) {
      setConfirmIsVisible(false);
    }
  }, [password, setIsVisible, confirmPassword, setConfirmIsVisible]);
};

export default useResetPasswordVisibility;
