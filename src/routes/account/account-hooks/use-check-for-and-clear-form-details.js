import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectSignInFormSelectors,
  resetSignInFormState,
} from "../../../store/sign-in-form/sign-in-form.slice";
import {
  resetSignUpFormState,
  selectSignUpFormSelectors,
} from "../../../store/sign-up-form/sign-up-form.slice";
import { selectUserError } from "../../../store/user/user.selector";

const useCheckForAndClearFormDetails = () => {
  const error = useSelector(selectUserError);
  const { signInFormDetails } = useSelector(selectSignInFormSelectors);
  const { signUpFormDetails } = useSelector(selectSignUpFormSelectors);

  const dispatch = useDispatch();

  const checkForSignInDetails = useCallback(() => {
    if (
      Object.values(signInFormDetails).every(
        (value) =>
          value !== "" &&
          Object.values(signUpFormDetails).every((value) => value === "")
      )
    ) {
      dispatch(resetSignInFormState());
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
      dispatch(resetSignUpFormState());
    } else {
      return;
    }
  }, [signInFormDetails, signUpFormDetails, dispatch]);

  useEffect(() => {
    checkForSignInDetails();
    checkForSignUpDetails();
  }, [checkForSignInDetails, checkForSignUpDetails, error, dispatch]);
};

export default useCheckForAndClearFormDetails;
