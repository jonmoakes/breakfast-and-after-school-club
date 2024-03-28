import { useCallback, useEffect } from "react";

import useGetSignInFormSelectors from "../../../hooks/get-selectors/use-get-sign-in-form-selectors";
import useGetSignUpFormSelectors from "../../../hooks/get-selectors/use-get-sign-up-form-selectors";
import useSignInFormActions from "../../../hooks/get-actions-and-thunks/use-sign-in-form-actions";
import useSignUpFormActions from "../../../hooks/get-actions-and-thunks/use-sign-up-form-actions";

const useCheckForAndClearFormDetails = () => {
  const { signInFormDetails } = useGetSignInFormSelectors();
  const { signUpFormDetails } = useGetSignUpFormSelectors();
  const { dispatchResetSignInFormState } = useSignInFormActions();
  const { dispatchResetSignUpFormState } = useSignUpFormActions();

  const checkForSignInDetails = useCallback(() => {
    if (
      Object.values(signInFormDetails).every(
        (value) =>
          value !== "" &&
          Object.values(signUpFormDetails).every((value) => value === "")
      )
    ) {
      dispatchResetSignInFormState();
    } else {
      return;
    }
  }, [signInFormDetails, signUpFormDetails, dispatchResetSignInFormState]);

  const checkForSignUpDetails = useCallback(() => {
    if (
      Object.values(signInFormDetails).every(
        (value) =>
          value === "" &&
          Object.values(signUpFormDetails).every((value) => value !== "")
      )
    ) {
      dispatchResetSignUpFormState();
    } else {
      return;
    }
  }, [signInFormDetails, signUpFormDetails, dispatchResetSignUpFormState]);

  useEffect(() => {
    checkForSignInDetails();
    checkForSignUpDetails();
  }, [checkForSignInDetails, checkForSignUpDetails]);
};

export default useCheckForAndClearFormDetails;
