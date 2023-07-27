import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { account } from "../../utils/appwrite/appwrite-config";

import { selectSignInFormDetails } from "../../store/sign-in-form/sign-in-form.selector";
import { clearSignInFormDetails } from "../../store/sign-in-form/sign-in-form.slice";
import { selectSignUpFormDetails } from "../../store/sign-up-form/sign-up-form.selector";
import { clearSignUpFormDetails } from "../../store/sign-up-form/sign-up-form.slice";

const useCheckForAndClearFormDetails = () => {
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
    // const test = async () => {
    //   const user = await account.get();
    //   console.log(user);
    // };
    // test();
    checkForSignInDetails();
    checkForSignUpDetails();
  }, [checkForSignInDetails, checkForSignUpDetails]);
};

export default useCheckForAndClearFormDetails;
