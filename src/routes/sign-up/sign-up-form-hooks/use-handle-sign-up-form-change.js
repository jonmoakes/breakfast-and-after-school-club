import { useSelector, useDispatch } from "react-redux";

import { setSignUpFormDetails } from "../../../store/sign-up-form/sign-up-form.slice";
import { selectSignUpFormDetails } from "../../../store/sign-up-form/sign-up-form.selector";

const useHandleSignUpFormChange = () => {
  const signUpFormDetails = useSelector(selectSignUpFormDetails);
  const dispatch = useDispatch();

  const handleSignUpFormChange = (event) => {
    const { value, name } = event.target;
    dispatch(setSignUpFormDetails({ ...signUpFormDetails, [name]: value }));
  };

  return { handleSignUpFormChange };
};

export default useHandleSignUpFormChange;
