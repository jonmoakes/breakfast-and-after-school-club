import { useDispatch } from "react-redux";

import useGetSignInFormSelectors from "../get-selectors/use-get-sign-in-form-selectors";

import {
  resetSignInFormState,
  setSignInFormDetails,
  setShowSocialSignInForm,
  resetSignInFormDetails,
} from "../../store/sign-in-form/sign-in-form.slice";

const useSignInFormActions = () => {
  const { signInFormDetails } = useGetSignInFormSelectors();

  const dispatch = useDispatch();

  const dispatchHandleSignInFormChange = (event) => {
    const { value, name } = event.target;
    dispatch(setSignInFormDetails({ ...signInFormDetails, [name]: value }));
  };

  const dispatchResetSignInFormState = () => {
    dispatch(resetSignInFormState());
  };

  const dispatchShowSocialSignIn = (payload) => {
    dispatch(setShowSocialSignInForm(payload));
  };

  const dispatchResetSignInFormDetails = () => {
    dispatch(resetSignInFormDetails());
  };

  return {
    dispatchHandleSignInFormChange,
    dispatchResetSignInFormState,
    dispatchShowSocialSignIn,
    dispatchResetSignInFormDetails,
  };
};

export default useSignInFormActions;
