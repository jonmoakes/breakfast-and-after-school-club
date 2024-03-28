import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useGetSignInFormSelectors from "../../../hooks/get-selectors/use-get-sign-in-form-selectors";
import useSignInFormActions from "../../../hooks/get-actions-and-thunks/use-sign-in-form-actions";

import {
  resetSignUpFormState,
  selectSignUpFormSelectors,
} from "../../../store/sign-up-form/sign-up-form.slice";

const useCheckForAndClearFormDetails = () => {
  const { signInFormDetails } = useGetSignInFormSelectors();
  const { signUpFormDetails } = useSelector(selectSignUpFormSelectors);
  const { dispatchResetSignInFormState } = useSignInFormActions();

  const dispatch = useDispatch();

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
      dispatch(resetSignUpFormState());
    } else {
      return;
    }
  }, [signInFormDetails, signUpFormDetails, dispatch]);

  useEffect(() => {
    checkForSignInDetails();
    checkForSignUpDetails();
  }, [checkForSignInDetails, checkForSignUpDetails, dispatch]);
};

export default useCheckForAndClearFormDetails;
