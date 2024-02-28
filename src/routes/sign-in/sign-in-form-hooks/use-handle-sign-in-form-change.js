import { useSelector, useDispatch } from "react-redux";

import {
  setSignInFormDetails,
  selectSignInFormSelectors,
} from "../../../store/sign-in-form/sign-in-form.slice";

const useHandleSignInFormChange = () => {
  const { signInFormDetails } = useSelector(selectSignInFormSelectors);

  const dispatch = useDispatch();

  const handleSignInFormChange = (event) => {
    const { value, name } = event.target;
    dispatch(setSignInFormDetails({ ...signInFormDetails, [name]: value }));
  };

  return { handleSignInFormChange };
};

export default useHandleSignInFormChange;
