import { useSelector, useDispatch } from "react-redux";

import {
  setSignUpFormDetails,
  selectSignUpFormSelectors,
} from "../../../store/sign-up-form/sign-up-form.slice";

const useHandleSignUpFormChange = () => {
  const { signUpFormDetails } = useSelector(selectSignUpFormSelectors);
  const dispatch = useDispatch();

  const handleSignUpFormChange = (event) => {
    const { value, name } = event.target;
    dispatch(setSignUpFormDetails({ ...signUpFormDetails, [name]: value }));
  };

  return { handleSignUpFormChange };
};

export default useHandleSignUpFormChange;
