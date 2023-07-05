import { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectSignInFormDetails } from "../../../store/sign-in-form/sign-in-form.selector";

const useResetPasswordVisibility = (setIsVisible) => {
  const signInFormDetails = useSelector(selectSignInFormDetails);
  const { password } = signInFormDetails;

  useEffect(() => {
    if (!password.trim().length) {
      setIsVisible(false);
    }
  }, [password, setIsVisible]);
};

export default useResetPasswordVisibility;
