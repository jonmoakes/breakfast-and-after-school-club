import { useEffect } from "react";
import { useSelector } from "react-redux";

import useGetPasswordIsVisibleSelectors from "../../../hooks/get-selectors/use-get-password-is-visible-selectors";
import usePasswordIsVisibleActions from "../../../hooks/get-actions-and-thunks/use-password-is-visible-actions";

import { selectSignInFormSelectors } from "../../../store/sign-in-form/sign-in-form.slice";

const useHideSignUpPasswordOnEmpty = () => {
  const { signInPasswordIsVisible } = useGetPasswordIsVisibleSelectors();
  const { dispatchHideSignInPasswordIsVisible } = usePasswordIsVisibleActions();
  const { signInFormDetails } = useSelector(selectSignInFormSelectors);

  const { password } = signInFormDetails;

  useEffect(() => {
    if (signInPasswordIsVisible && !password.length) {
      dispatchHideSignInPasswordIsVisible();
    }
  }, [password, signInPasswordIsVisible, dispatchHideSignInPasswordIsVisible]);
};

export default useHideSignUpPasswordOnEmpty;
