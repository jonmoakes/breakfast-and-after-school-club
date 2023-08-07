import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectSignInFormDetails } from "../../../store/sign-in-form/sign-in-form.selector";
import { clearSignInFormDetails } from "../../../store/sign-in-form/sign-in-form.slice";
import { selectSignUpFormDetails } from "../../../store/sign-up-form/sign-up-form.selector";
import { clearSignUpFormDetails } from "../../../store/sign-up-form/sign-up-form.slice";
import { selectError } from "../../../store/user/user.selector";
import { resetErrorMessage } from "../../../store/user/user.slice";

const useCheckForAndClearFormDetails = () => {
  const error = useSelector(selectError);
  const signInFormDetails = useSelector(selectSignInFormDetails);
  const signUpFormDetails = useSelector(selectSignUpFormDetails);

  const dispatch = useDispatch();

  const checkForSignInDetails = useCallback(() => {
    if (
      Object.values(signInFormDetails).every(
        (value) =>
          value !== "" &&
          Object.values(signUpFormDetails).every((value) => value === "")
      )
    ) {
      dispatch(clearSignInFormDetails());
    } else {
      return;
    }
  }, [signInFormDetails, signUpFormDetails, dispatch]);

  const checkForSignUpDetails = useCallback(() => {
    if (
      Object.values(signInFormDetails).every(
        (value) =>
          value === "" &&
          Object.values(signUpFormDetails).every((value) => value !== "")
      )
    ) {
      dispatch(clearSignUpFormDetails());
    } else {
      return;
    }
  }, [signInFormDetails, signUpFormDetails, dispatch]);

  useEffect(() => {
    if (error) {
      dispatch(resetErrorMessage());
    }
    checkForSignInDetails();
    checkForSignUpDetails();
  }, [checkForSignInDetails, checkForSignUpDetails, error, dispatch]);
};

export default useCheckForAndClearFormDetails;
