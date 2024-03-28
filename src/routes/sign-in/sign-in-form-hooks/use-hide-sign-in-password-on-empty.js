import { useEffect } from "react";

import useGetSignInFormSelectors from "../../../hooks/get-selectors/use-get-sign-in-form-selectors";
import useGetPasswordIsVisibleSelectors from "../../../hooks/get-selectors/use-get-password-is-visible-selectors";
import usePasswordIsVisibleActions from "../../../hooks/get-actions-and-thunks/use-password-is-visible-actions";

const useHideSignUpPasswordOnEmpty = () => {
  const { signInPasswordIsVisible } = useGetPasswordIsVisibleSelectors();
  const { dispatchHideSignInPasswordIsVisible } = usePasswordIsVisibleActions();

  const { password } = useGetSignInFormSelectors();

  useEffect(() => {
    if (signInPasswordIsVisible && !password.length) {
      dispatchHideSignInPasswordIsVisible();
    }
  }, [password, signInPasswordIsVisible, dispatchHideSignInPasswordIsVisible]);
};

export default useHideSignUpPasswordOnEmpty;
