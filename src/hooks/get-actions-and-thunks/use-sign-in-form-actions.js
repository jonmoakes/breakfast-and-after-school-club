import { useDispatch } from "react-redux";

import useGetSignInFormSelectors from "../get-selectors/use-get-sign-in-form-selectors";

import {
  resetSignInFormState,
  setSignInFormDetails,
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

  return {
    dispatchHandleSignInFormChange,
    dispatchResetSignInFormState,
  };
};

export default useSignInFormActions;
