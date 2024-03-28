import { useDispatch } from "react-redux";

import useGetSignUpFormSelectors from "../get-selectors/use-get-sign-up-form-selectors";
import {
  setSignUpFormDetails,
  resetSignUpFormState,
} from "../../store/sign-up-form/sign-up-form.slice";

const useSignUpFormActions = () => {
  const { signUpFormDetails } = useGetSignUpFormSelectors();

  const dispatch = useDispatch();

  const dispatchHandleSignUpFormChange = (event) => {
    const { value, name } = event.target;
    dispatch(setSignUpFormDetails({ ...signUpFormDetails, [name]: value }));
  };

  const dispatchResetSignUpFormState = () => {
    dispatch(resetSignUpFormState());
  };

  return { dispatchHandleSignUpFormChange, dispatchResetSignUpFormState };
};

export default useSignUpFormActions;
