import { useSelector, useDispatch } from "react-redux";

import { setSignInFormDetails } from "../../../store/sign-in-form/sign-in-form.slice";
import { selectSignInFormDetails } from "../../../store/sign-in-form/sign-in-form.selector";

const useHandleSignInFormChange = () => {
  const signInFormDetails = useSelector(selectSignInFormDetails);
  const dispatch = useDispatch();

  const handleSignInFormChange = (event) => {
    const { value, name } = event.target;
    dispatch(setSignInFormDetails({ ...signInFormDetails, [name]: value }));
  };

  return { handleSignInFormChange };
};

export default useHandleSignInFormChange;
