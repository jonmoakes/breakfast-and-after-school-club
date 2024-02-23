import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  hideSignInPasswordIsVisible,
  selectPasswordIsVisibleSelectors,
} from "../../../store/password-is-visible/password-is-visible.slice";
import { selectSignInFormDetails } from "../../../store/sign-in-form/sign-in-form.selector";

const useHideSignUpPasswordOnEmpty = () => {
  const { signInPasswordIsVisible } = useSelector(
    selectPasswordIsVisibleSelectors
  );

  const signInFormDetails = useSelector(selectSignInFormDetails);

  const dispatch = useDispatch();
  const { password } = signInFormDetails;

  useEffect(() => {
    if (signInPasswordIsVisible && !password.length) {
      dispatch(hideSignInPasswordIsVisible());
    }
  }, [password, signInPasswordIsVisible, dispatch]);
};

export default useHideSignUpPasswordOnEmpty;
