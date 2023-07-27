import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectSignInFormDetails } from "../../store/sign-in-form/sign-in-form.selector";
import { clearSignInFormDetails } from "../../store/sign-in-form/sign-in-form.slice";
import { selectSignUpFormDetails } from "../../store/sign-up-form/sign-up-form.selector";
import { clearSignUpFormDetails } from "../../store/sign-up-form/sign-up-form.slice";
import { clearMagicUrlResultError } from "../../store/magic-url/magic-url.slice";
import { selectMagicUrlResultError } from "../../store/magic-url/magic-url.selector";

const useCheckForAndClearFormDetails = () => {
  const magicUrlResultError = useSelector(selectMagicUrlResultError);
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
    if (magicUrlResultError) {
      dispatch(clearMagicUrlResultError());
    }
    checkForSignInDetails();
    checkForSignUpDetails();
  }, [
    checkForSignInDetails,
    checkForSignUpDetails,
    magicUrlResultError,
    dispatch,
  ]);
};

export default useCheckForAndClearFormDetails;
